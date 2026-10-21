"""
SatuTim Proposal — Google Slides Builder
IBM Carbon Design System · 1920×1080px (EMU) · 5 slides

SETUP (sekali saja):
  1. Buka https://console.cloud.google.com
  2. New project → Enable "Google Slides API" + "Google Drive API"
  3. APIs & Services → Credentials → Create → OAuth 2.0 Client ID → Desktop app
  4. Download JSON → simpan sebagai  google-slides/credentials.json
  5. python3 google-slides/build-slides.py

Script akan buka browser untuk OAuth, lalu build presentasi dan print link-nya.
"""

import os
import sys
import json

from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build

# ─── PATHS ──────────────────────────────────────────────────
SCRIPT_DIR   = os.path.dirname(os.path.abspath(__file__))
CREDS_FILE   = os.path.join(SCRIPT_DIR, 'credentials.json')
TOKEN_FILE   = os.path.join(SCRIPT_DIR, 'token.json')
SCOPES       = ['https://www.googleapis.com/auth/presentations',
                'https://www.googleapis.com/auth/drive']

# ─── DESIGN TOKENS (Google Slides uses RGB 0–1 floats) ──────
def rgb(r, g, b):
    return {'red': r / 255, 'green': g / 255, 'blue': b / 255}

BLUE   = rgb(15,  98,  254)   # #0f62fe
INK    = rgb(22,  22,  22)    # #161616
INKM   = rgb(82,  82,  82)    # #525252
INKS   = rgb(140, 140, 140)   # #8c8c8c
WHITE  = rgb(255, 255, 255)   # #ffffff
SURF   = rgb(244, 244, 244)   # #f4f4f4
HAIR   = rgb(224, 224, 224)   # #e0e0e0
GREEN  = rgb(36,  161, 72)    # #24a148
RED    = rgb(218, 30,  40)    # #da1e28

# Slide canvas: 1920×1080 in EMU (1pt = 12700 EMU, 1px ≈ 9144 EMU at 96dpi)
PX = 9144   # 1px in EMU

def px(n):
    return int(n * PX)

W  = px(1920)
H  = px(1080)

# ─── AUTH ───────────────────────────────────────────────────
def get_service():
    creds = None
    if os.path.exists(TOKEN_FILE):
        creds = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not os.path.exists(CREDS_FILE):
                print(f'\n❌  File tidak ditemukan: {CREDS_FILE}')
                print('   Lihat instruksi SETUP di bagian atas file ini.')
                sys.exit(1)
            flow = InstalledAppFlow.from_client_secrets_file(CREDS_FILE, SCOPES)
            creds = flow.run_local_server(port=0)
        with open(TOKEN_FILE, 'w') as f:
            f.write(creds.to_json())
    return build('slides', 'v1', credentials=creds)

# ─── REQUEST BUILDERS ────────────────────────────────────────
def _size(w, h):
    return {'width': {'magnitude': w, 'unit': 'EMU'},
            'height': {'magnitude': h, 'unit': 'EMU'}}

def _pt(x, y):
    return {'x': {'magnitude': x, 'unit': 'EMU'},
            'y': {'magnitude': y, 'unit': 'EMU'}}

def _transform(x, y, w, h):
    return {
        'size': _size(w, h),
        'transform': {
            'scaleX': 1, 'scaleY': 1,
            'translateX': x, 'translateY': y,
            'unit': 'EMU',
        },
    }

def add_shape(eid, slide_id, x, y, w, h, shape='RECTANGLE'):
    return {
        'createShape': {
            'objectId': eid,
            'shapeType': shape,
            'elementProperties': {
                'pageObjectId': slide_id,
                **_transform(px(x), px(y), px(w), px(h)),
            },
        },
    }

def fill_shape(eid, color):
    return {
        'updateShapeProperties': {
            'objectId': eid,
            'shapeProperties': {
                'shapeBackgroundFill': {
                    'solidFill': {'color': {'rgbColor': color}},
                },
            },
            'fields': 'shapeBackgroundFill',
        },
    }

def border_shape(eid, color, weight_pt=1):
    return {
        'updateShapeProperties': {
            'objectId': eid,
            'shapeProperties': {
                'outline': {
                    'outlineFill': {'solidFill': {'color': {'rgbColor': color}}},
                    'weight': {'magnitude': weight_pt, 'unit': 'PT'},
                    'dashStyle': 'SOLID',
                },
            },
            'fields': 'outline',
        },
    }

def no_border(eid):
    return {
        'updateShapeProperties': {
            'objectId': eid,
            'shapeProperties': {
                'outline': {'dashStyle': 'NONE'},
            },
            'fields': 'outline',
        },
    }

def insert_text(eid, text):
    return {'insertText': {'objectId': eid, 'text': text}}

def style_text(eid, color, size_pt, bold=False, italic=False, start=0, end=None):
    req = {
        'updateTextStyle': {
            'objectId': eid,
            'style': {
                'foregroundColor': {'opaqueColor': {'rgbColor': color}},
                'fontSize': {'magnitude': size_pt, 'unit': 'PT'},
                'bold': bold,
                'italic': italic,
                'fontFamily': 'IBM Plex Sans',
            },
            'fields': 'foregroundColor,fontSize,bold,italic,fontFamily',
        },
    }
    r = {'startIndex': start}
    if end is not None:
        r['endIndex'] = end
    req['updateTextStyle']['textRange'] = r
    return req

def align_text(eid, alignment='START'):
    return {
        'updateParagraphStyle': {
            'objectId': eid,
            'style': {'alignment': alignment},
            'fields': 'alignment',
            'textRange': {'type': 'ALL'},
        },
    }

def no_fill(eid):
    return {
        'updateShapeProperties': {
            'objectId': eid,
            'shapeProperties': {
                'shapeBackgroundFill': {'propertyState': 'NOT_RENDERED'},
            },
            'fields': 'shapeBackgroundFill',
        },
    }

# ─── COMPOSITE HELPERS ───────────────────────────────────────
_id_counter = [0]

def uid(prefix='el'):
    _id_counter[0] += 1
    return f'{prefix}_{_id_counter[0]:04d}'

def make_rect(reqs, slide_id, x, y, w, h, fill=None, stroke=None, stroke_w=1, name=None):
    eid = uid(name or 'rect')
    reqs.append(add_shape(eid, slide_id, x, y, w, h))
    if fill:
        reqs.append(fill_shape(eid, fill))
    else:
        reqs.append(no_fill(eid))
    if stroke:
        reqs.append(border_shape(eid, stroke, stroke_w))
    else:
        reqs.append(no_border(eid))
    return eid

def make_text(reqs, slide_id, x, y, w, h, text, size, color,
              bold=False, italic=False, align='START', name=None):
    eid = uid(name or 'txt')
    reqs.append(add_shape(eid, slide_id, x, y, w, h))
    reqs.append(no_fill(eid))
    reqs.append(no_border(eid))
    reqs.append(insert_text(eid, text))
    reqs.append(style_text(eid, color, size, bold=bold, italic=italic))
    reqs.append(align_text(eid, alignment=align))
    return eid

# ─── FOOTER (shared) ─────────────────────────────────────────
def build_footer(reqs, slide_id, slide_num):
    make_rect(reqs, slide_id, 0, 1016, 1920, 64, fill=INK, name='footer_bg')
    make_text(reqs, slide_id, 80, 1033, 200, 30, 'SatuTim', 16, WHITE, bold=True, name='footer_wm')
    make_text(reqs, slide_id, 560, 1037, 800, 24,
              'Code the Future · Tema 2 · IBM Bob', 12, INKS, align='CENTER', name='footer_center')
    make_text(reqs, slide_id, 1800, 1037, 80, 24,
              f'{slide_num} / 5', 12, WHITE, align='END', name='footer_page')

# ─── EYEBROW + HEADLINE ──────────────────────────────────────
def build_header(reqs, slide_id, eyebrow, headline, subheadline=None):
    make_text(reqs, slide_id, 80, 64, 1760, 28, eyebrow, 14, BLUE, name='eyebrow')
    make_text(reqs, slide_id, 80, 96, 1760, 160, headline, 40, INK, name='headline')
    if subheadline:
        make_text(reqs, slide_id, 80, 240, 1760, 40, subheadline, 22, INKM, name='subhead')

def build_divider(reqs, slide_id, y):
    make_rect(reqs, slide_id, 80, y, 1760, 2, fill=HAIR, name='divider')

def feature_card(reqs, slide_id, x, y, w, h, accent=None):
    make_rect(reqs, slide_id, x, y, w, h, fill=WHITE, stroke=HAIR, name='fcard_bg')
    make_rect(reqs, slide_id, x, y, 4, h, fill=accent or BLUE, name='fcard_accent')

def stat_card(reqs, slide_id, x, y, w, h, accent=None):
    make_rect(reqs, slide_id, x, y, w, h, fill=WHITE, stroke=HAIR, name='scard_bg')
    make_rect(reqs, slide_id, x, y, w, 4, fill=accent or BLUE, name='scard_accent')

# ════════════════════════════════════════════════════════════
# SLIDE 1 — Problem Identification
# ════════════════════════════════════════════════════════════
def build_s1(reqs, slide_id):
    build_header(reqs, slide_id,
        eyebrow='PROBLEM IDENTIFICATION',
        headline='Tugas Kelompok: Semua Dapat Nilai Sama,\nTapi Tidak Semua Bekerja Sama',
        subheadline='Meta-analisis 78 studi membuktikan — ini bukan pengecualian')
    build_divider(reqs, slide_id, 290)

    # 3 bullets (left, x=80..950)
    bullets = [
        ('Social loafing terdokumentasi lintas budaya & jenis tugas',
         '(Karau & Williams, 1993 — meta-analisis 78 studi)', 310),
        ('Norma penghindaran konflik → anggota aktif ambil alih, bukan menegur',
         '(Tjosvold et al., 2009)', 400),
        ('Trello & Notion tidak mendeteksi ketimpangan beban kerja',
         '', 490),
    ]
    for text, cite, y in bullets:
        make_rect(reqs, slide_id, 80, y + 4, 20, 20, fill=BLUE, name='bicon')
        make_text(reqs, slide_id, 114, y, 840, 36, text, 16, INKM, name='btxt')
        if cite:
            make_text(reqs, slide_id, 114, y + 40, 840, 24, cite, 11, INKS, name='bcite')

    # Right — Cycle diagram bg
    make_rect(reqs, slide_id, 1040, 300, 800, 480, fill=SURF, stroke=HAIR, name='cycle_bg')
    make_text(reqs, slide_id, 1040, 308, 800, 28, 'Lingkaran Setan',
              13, BLUE, bold=True, align='CENTER', name='cycle_title')

    # 5 cycle nodes
    nodes = [
        ('Kelompok terbentuk',    1280, 344),
        ('Tidak ada kesepakatan', 1560, 450),
        ('Anggota pasif',         1490, 580),
        ('Aktif ambil alih',      1130, 580),
        ('Tidak ada konsekuensi', 1060, 450),
    ]
    for label, nx, ny in nodes:
        n = make_rect(reqs, slide_id, nx, ny, 210, 40, fill=SURF, stroke=BLUE, stroke_w=2, name='node')
        make_text(reqs, slide_id, nx + 6, ny + 10, 198, 24, label, 12, INK, name='node_txt')

    # Arrows connecting nodes (thin lines)
    arrow_segs = [(1385, 380, 4, 72), (1590, 488, 4, 94), (1540, 618, 4, 40),
                  (1240, 618, 4, 40), (1130, 488, 4, 94)]
    for ax, ay, aw, ah in arrow_segs:
        make_rect(reqs, slide_id, ax, ay, aw, ah, fill=BLUE, name='arrow')

    # 3 gap cards (bottom row, above footer)
    gap_cards = [
        (80,   'Tidak ada pembagian peran eksplisit'),
        (680,  'Tidak ada visibilitas progres bersama'),
        (1280, 'Tidak ada catatan kontribusi individual'),
    ]
    for gx, gtext in gap_cards:
        feature_card(reqs, slide_id, gx, 830, 560, 76)
        make_rect(reqs, slide_id, gx + 16, gx - gx + 844, 20, 20, fill=BLUE, name='gicon')
        make_text(reqs, slide_id, gx + 52, 849, 490, 40, gtext, 14, INK, name='gtxt')

    build_footer(reqs, slide_id, 1)

# ════════════════════════════════════════════════════════════
# SLIDE 2 — Target Audience
# ════════════════════════════════════════════════════════════
def build_s2(reqs, slide_id):
    build_header(reqs, slide_id,
        eyebrow='TARGET AUDIENCE',
        headline='Tiga Orang dalam Setiap Kelompok')
    build_divider(reqs, slide_id, 200)

    personas = [
        (80,   BLUE,  'R', 'Rahma', 'Si Penggerak',
         '"Aku capek jadi satu-satunya yang ngejar orang."',
         'Visibilitas ketimpangan tanpa konflik'),
        (680,  INK,   'D', 'Dito',  'Si Sibuk',
         '"Aku mau ngerjain tapi nggak tau mulai dari mana."',
         'Kejelasan tugas + reminder tanpa rasa malu'),
        (1280, INKM,  'S', 'Sinta', 'Si Bingung',
         '"Aku nggak mau keliatan bego nanya di grup."',
         'Onboarding privat + kriteria selesai yang jelas'),
    ]
    for px_x, accent, initial, name, role, quote, need in personas:
        # Card bg
        make_rect(reqs, slide_id, px_x, 220, 560, 680, fill=WHITE, stroke=HAIR, name='pcard')
        # Top accent bar
        make_rect(reqs, slide_id, px_x, 220, 560, 6, fill=accent, name='pcard_top')
        # Avatar square
        make_rect(reqs, slide_id, px_x + 248, 262, 64, 64, fill=accent, name='avatar')
        make_text(reqs, slide_id, px_x + 248, 274, 64, 40, initial,
                  24, WHITE, bold=True, align='CENTER', name='avatar_init')
        # Name
        make_text(reqs, slide_id, px_x + 24, 348, 512, 36, name,
                  24, INK, align='CENTER', name='pname')
        # Role badge
        make_rect(reqs, slide_id, px_x + 168, 392, 224, 32, fill=accent, name='badge')
        make_text(reqs, slide_id, px_x + 168, 400, 224, 24, role,
                  12, WHITE, align='CENTER', name='badge_txt')
        # Quote
        make_text(reqs, slide_id, px_x + 24, 446, 512, 72, quote,
                  15, INKM, italic=True, align='CENTER', name='quote')
        # Divider
        make_rect(reqs, slide_id, px_x + 24, 560, 512, 1, fill=HAIR, name='pdiv')
        # Need
        make_text(reqs, slide_id, px_x + 24, 572, 80, 28, 'Butuh:',
                  13, INK, bold=True, name='need_lbl')
        make_text(reqs, slide_id, px_x + 112, 572, 424, 56, need,
                  13, INKM, name='need_val')

    make_text(reqs, slide_id, 80, 940, 1760, 28,
              'Mahasiswa S1 aktif · Surabaya · Semua jurusan (T1 Makalah) & jurusan teknis (T2 Proyek IT)',
              12, INKS, align='CENTER', name='demo_lbl')
    build_footer(reqs, slide_id, 2)

# ════════════════════════════════════════════════════════════
# SLIDE 3 — Innovation Concept
# ════════════════════════════════════════════════════════════
def build_s3(reqs, slide_id):
    build_header(reqs, slide_id,
        eyebrow='INNOVATION CONCEPT',
        headline='SatuTim: IBM Bob yang Mengisi Gap — Bukan Sekadar Task Manager')
    build_divider(reqs, slide_id, 200)

    # 4-phase flow
    phases = [
        (80,   'COCOKKAN',   'IBM Bob ekstrak CV\n+ gap analysis',  BLUE),
        (540,  'BAGI TUGAS', 'Sub-tugas per role\n+ DoD',           BLUE),
        (1000, 'MONITOR',    'Update 1 tap ·\nmagic link WA',       INK),
        (1460, 'LOG',        'Laporan kontribusi\n+ Portofolio',     INK),
    ]
    for i, (fx, label, sub, accent) in enumerate(phases):
        make_rect(reqs, slide_id, fx, 220, 360, 190, fill=WHITE, stroke=HAIR, name='phase_bg')
        make_rect(reqs, slide_id, fx, 220, 360, 5, fill=accent, name='phase_top')
        make_rect(reqs, slide_id, fx + 160, 238, 40, 40, fill=accent, name='phase_icon')
        make_text(reqs, slide_id, fx + 8, 292, 344, 28, label,
                  14, INK, bold=True, align='CENTER', name='phase_lbl')
        make_text(reqs, slide_id, fx + 8, 320, 344, 72, sub,
                  12, INKM, align='CENTER', name='phase_sub')
        if i < 3:
            make_rect(reqs, slide_id, fx + 368, 312, 52, 3, fill=BLUE, name='phase_arr')

    # UX strip
    make_rect(reqs, slide_id, 80, 426, 1760, 40, fill=SURF, name='ux_strip')
    make_text(reqs, slide_id, 80, 436, 1760, 28,
              'Wizard 7 langkah · Setup ≤5 menit · Anggota pasif update tanpa buka app',
              13, INKM, align='CENTER', name='ux_txt')

    # Comparison table (left, width 940)
    ty = 490
    # Header
    make_rect(reqs, slide_id, 80, ty, 940, 40, fill=INK, name='th_bg')
    headers = [('', 0, 340), ('Trello / Notion', 340, 200),
               ('Notion AI', 540, 200), ('SatuTim', 740, 200)]
    for h, hx, hw in headers:
        if h:
            make_text(reqs, slide_id, 80 + hx + 4, ty + 10, hw - 8, 24,
                      h, 12, WHITE, bold=True, align='CENTER', name='th_txt')
    rows = [
        ('Gap analysis berbasis CV',              ['✗', '✗', '✓']),
        ('Pembagian peran per jenis tugas',       ['✗', '✗', '✓']),
        ('Akuntabilitas terlihat + notif privat', ['✗', '✗', '✓']),
    ]
    for ri, (label, vals) in enumerate(rows):
        ry = ty + 40 + ri * 40
        row_fill = WHITE if ri % 2 == 0 else SURF
        make_rect(reqs, slide_id, 80, ry, 940, 40, fill=row_fill, stroke=HAIR, name='row_bg')
        make_text(reqs, slide_id, 88, ry + 10, 324, 24, label, 12, INK, name='row_lbl')
        col_offsets = [340, 540, 740]
        for ci, v in enumerate(vals):
            col = GREEN if v == '✓' else RED
            make_text(reqs, slide_id, 80 + col_offsets[ci] + 4, ry + 8, 192, 28,
                      v, 16, col, bold=True, align='CENTER', name='row_val')
    make_text(reqs, slide_id, 80, ty + 168, 940, 24,
              'van Knippenberg et al. (2004) · Oakley et al. (2004) · Barrett (2007)',
              11, INKS, name='table_cite')

    # Tema 2 badges (right)
    badges = [
        ('🔗  Connect',                   BLUE, 500),
        ('🤝  Collaborate',               INK,  580),
        ('🎯  Engage with Opportunities', BLUE, 660),
    ]
    for blabel, bfill, by in badges:
        make_rect(reqs, slide_id, 1080, by, 760, 56, fill=bfill, name='badge_bg')
        make_text(reqs, slide_id, 1096, by + 16, 728, 28,
                  blabel, 17, WHITE, bold=True, name='badge_txt')
    make_text(reqs, slide_id, 1080, 740, 760, 28,
              'van Knippenberg et al. (2004) · Barrett (2007) · Oakley et al. (2004)',
              11, INKS, align='CENTER', name='badge_cite')

    build_footer(reqs, slide_id, 3)

# ════════════════════════════════════════════════════════════
# SLIDE 4 — IBM Bob Utilization
# ════════════════════════════════════════════════════════════
def build_s4(reqs, slide_id):
    build_header(reqs, slide_id,
        eyebrow='IBM BOB UTILIZATION',
        headline='IBM Bob di Setiap Langkah: 23 Sesi, 3 Mode, 2 Koreksi Besar')
    build_divider(reqs, slide_id, 200)

    # 3 stat cards
    for sx, num, lbl in [(80, '23', 'Sesi Terdokumentasi'),
                          (680, '3', 'Mode Bob Digunakan'),
                          (1280, '2', 'Koreksi Manusia Dicatat')]:
        stat_card(reqs, slide_id, sx, 220, 560, 120)
        make_text(reqs, slide_id, sx + 24, 238, 512, 80,
                  num, 56, BLUE, bold=True, align='CENTER', name='stat_num')
        make_text(reqs, slide_id, sx + 24, 314, 512, 28,
                  lbl, 13, INKM, align='CENTER', name='stat_lbl')

    # Mode bar chart
    make_text(reqs, slide_id, 80, 370, 400, 28, 'Distribusi Mode Penggunaan',
              13, INK, bold=True, name='bar_title')
    bars = [('Agent', 0.913, '21 sesi', BLUE),
            ('Plan',  0.043, '1 sesi (Sesi 03)', INK),
            ('Ask',   0.043, '1 sesi (Sesi 12)', INKM)]
    for bi, (lbl, pct, num, bfill) in enumerate(bars):
        by = 400 + bi * 48
        make_text(reqs, slide_id, 80, by + 6, 80, 28, lbl, 13, INK, name='bar_lbl')
        bw = max(8, int(pct * 780))
        make_rect(reqs, slide_id, 180, by, bw, 32, fill=bfill, name='bar_fill')
        make_text(reqs, slide_id, 180 + bw + 12, by + 6, 300, 28,
                  num, 12, INKS, name='bar_num')
    make_text(reqs, slide_id, 80, 550, 900, 28,
              'Multi-mode utilization memenuhi sub-kriteria rubrik juri',
              11, INKS, name='bar_note')

    # Correction blocks
    cy = 600
    for i, (cx, title, before, after, reason) in enumerate([
        (80, 'Koreksi #1: Sesi 06 → 07',
         'SEBELUM: Bob rekomendasikan WA-based solution (Kickoff Pact)',
         'SESUDAH: Alur 4 fase terpadu dalam satu app',
         'Tim tolak — WA adalah masalah yang diserang, bukan solusi'),
        (980, 'Koreksi #2: Sesi 08',
         'SEBELUM: Bob tidak bahas jenis tugas & skill imbalance',
         'SESUDAH: Gap analysis T2 — 15 frontend / 5 backend',
         'Tim angkat kasus nyata: kelas 20 mahasiswa → AI butuh gap analysis'),
    ]):
        make_rect(reqs, slide_id, cx, cy, 860, 200, fill=WHITE, stroke=HAIR, name='corr_bg')
        make_rect(reqs, slide_id, cx, cy, 860, 4, fill=RED, name='corr_top')
        make_text(reqs, slide_id, cx + 16, cy + 14, 828, 28, title,
                  13, INK, bold=True, name='corr_title')
        make_rect(reqs, slide_id, cx + 16, cy + 50, 370, 56, fill=SURF, name='corr_bfbg')
        make_text(reqs, slide_id, cx + 24, cy + 60, 354, 48, before,
                  11, INKM, name='corr_before')
        make_rect(reqs, slide_id, cx + 396, cy + 76, 36, 3, fill=RED, name='corr_arr')
        make_rect(reqs, slide_id, cx + 444, cy + 50, 4, 56, fill=GREEN, name='corr_af_acc')
        make_text(reqs, slide_id, cx + 456, cy + 60, 380, 48, after,
                  11, INK, name='corr_after')
        make_text(reqs, slide_id, cx + 16, cy + 124, 828, 40, reason,
                  12, INKM, name='corr_reason')

    # Prompt box
    make_rect(reqs, slide_id, 80, 830, 860, 72, fill=SURF, stroke=HAIR, name='prompt_bg')
    make_text(reqs, slide_id, 96, 844, 828, 28,
              '"Identifikasi ≥8 masalah mahasiswa Indonesia relevan Tema 2..."',
              12, INK, name='prompt_txt')
    make_text(reqs, slide_id, 96, 874, 828, 24,
              '→ Menghasilkan plans/01-problem-discovery.md (LOG Sesi 01)',
              11, INKS, name='prompt_cap')

    build_footer(reqs, slide_id, 4)

# ════════════════════════════════════════════════════════════
# SLIDE 5 — Expected Impact
# ════════════════════════════════════════════════════════════
def build_s5(reqs, slide_id):
    build_header(reqs, slide_id,
        eyebrow='EXPECTED IMPACT',
        headline='Kolaborasi yang Adil, Terdokumentasi, dan Bisa Dibuktikan')
    build_divider(reqs, slide_id, 200)

    # 4 metric cards (2×2 grid, left side)
    for mx, my, num, lbl in [
        (80,  220, '< 15%', 'Ketimpangan kontribusi per tim'),
        (680, 220, '≥ 80%', 'Onboarding selesai dalam 24 jam'),
        (80,  420, '≥ 70%', 'Sub-tugas diupdate sebelum deadline'),
        (680, 420, '≥ 40%', 'Room capai laporan akhir'),
    ]:
        stat_card(reqs, slide_id, mx, my, 560, 160)
        make_text(reqs, slide_id, mx + 24, my + 20, 512, 80,
                  num, 48, BLUE, bold=True, align='CENTER', name='metric_num')
        make_text(reqs, slide_id, mx + 24, my + 108, 512, 40,
                  lbl, 13, INKM, align='CENTER', name='metric_lbl')

    make_text(reqs, slide_id, 80, 598, 1160, 28,
              'Sinyal sukses yang diusulkan — bukan standar industri',
              11, INKS, name='metric_note')

    # Before / After panel (right side)
    px_r = 1280
    # BEFORE
    make_rect(reqs, slide_id, px_r, 220, 300, 380, fill=SURF, stroke=HAIR, name='before_bg')
    make_rect(reqs, slide_id, px_r, 220, 300, 40, fill=RED, name='before_hdr_bg')
    make_text(reqs, slide_id, px_r, 230, 300, 28, 'SEBELUM',
              13, WHITE, bold=True, align='CENTER', name='before_hdr')
    for i, item in enumerate(['Chat WA tidak terstruktur',
                               'Tidak ada kejelasan siapa\nmengerjakan apa',
                               'Kontribusi tidak\nbisa dibuktikan']):
        make_text(reqs, slide_id, px_r + 16, 276 + i * 92, 268, 72,
                  '• ' + item, 13, INKM, name='before_item')

    # AFTER
    make_rect(reqs, slide_id, px_r + 320, 220, 320, 380, fill=WHITE, stroke=HAIR, name='after_bg')
    make_rect(reqs, slide_id, px_r + 320, 220, 320, 40, fill=GREEN, name='after_hdr_bg')
    make_text(reqs, slide_id, px_r + 320, 230, 320, 28, 'SESUDAH SATUTIM',
              13, WHITE, bold=True, align='CENTER', name='after_hdr')
    for i, item in enumerate(['Board status terlihat\nsemua anggota',
                               'Laporan kontribusi otomatis',
                               'Portofolio kolaborasi\nuntuk UKM / magang']):
        make_text(reqs, slide_id, px_r + 336, 276 + i * 92, 288, 72,
                  '✓ ' + item, 13, INK, name='after_item')

    # Closing quote (full width bottom)
    make_rect(reqs, slide_id, 80, 648, 1760, 144, fill=SURF, name='quote_bg')
    make_text(reqs, slide_id, 112, 668, 1696, 96,
              '"Selama ini mahasiswa yang bekerja keras tidak punya cara untuk membuktikannya.\n'
              'SatuTim hadir untuk mengisi gap itu — dengan AI yang mendukung, bukan mengawasi."',
              22, INK, italic=True, align='CENTER', name='quote_txt')
    make_text(reqs, slide_id, 112, 772, 1696, 28,
              'Didukung: Johnson & Johnson (2009) · Deci & Ryan (2000) · Barrett (2007)',
              12, INKS, align='CENTER', name='quote_cite')

    build_footer(reqs, slide_id, 5)

# ════════════════════════════════════════════════════════════
# MAIN
# ════════════════════════════════════════════════════════════
def main():
    print('🔑  Authenticating with Google...')
    service = get_service()

    print('📄  Creating presentation...')
    pres = service.presentations().create(body={
        'title': 'SatuTim Proposal — Code the Future Tema 2'
    }).execute()
    pres_id = pres['presentationId']

    # Resize all future slides to 1920×1080px (in EMU)
    reqs = [{
        'updatePresentationProperties': {
            'presentationProperties': {
                'pageSize': {
                    'width':  {'magnitude': px(1920), 'unit': 'EMU'},
                    'height': {'magnitude': px(1080),  'unit': 'EMU'},
                }
            },
            'fields': 'pageSize',
        }
    }]
    service.presentations().batchUpdate(
        presentationId=pres_id, body={'requests': reqs}).execute()

    # Get default slide id (Google creates one empty slide)
    pres_data = service.presentations().get(presentationId=pres_id).execute()
    default_slide_id = pres_data['slides'][0]['objectId']

    slides_config = [
        ('S1 Problem',          build_s1),
        ('S2 Target Audience',  build_s2),
        ('S3 Innovation',       build_s3),
        ('S4 Bob Utilization',  build_s4),
        ('S5 Impact',           build_s5),
    ]

    slide_ids = []

    for i, (name, builder) in enumerate(slides_config):
        print(f'🏗   Building slide {i+1}/5: {name}...')
        reqs = []

        if i == 0:
            slide_id = default_slide_id
            # Rename default slide
            reqs.append({'updateSlideProperties': {
                'objectId': slide_id,
                'slideProperties': {},
                'fields': 'notesPage',
            }})
        else:
            slide_id = f'slide_{i+1}'
            reqs.append({
                'createSlide': {
                    'objectId': slide_id,
                    'insertionIndex': i,
                    'slideLayoutReference': {'predefinedLayout': 'BLANK'},
                }
            })

        slide_ids.append(slide_id)
        builder(reqs, slide_id)

        service.presentations().batchUpdate(
            presentationId=pres_id, body={'requests': reqs}).execute()

    # Rename slides
    print('✏️   Naming slides...')
    rename_reqs = []
    for sid, (name, _) in zip(slide_ids, slides_config):
        rename_reqs.append({
            'updateSlidesPosition': {
                'slideObjectIds': [sid],
                'insertionIndex': slides_config.index((name, _)),
            }
        })
    # (slide names in Google Slides are just for UI — not in the API directly)

    url = f'https://docs.google.com/presentation/d/{pres_id}/edit'
    print(f'\n✅  Done! Open your presentation:\n   {url}\n')

    # Save URL to file for reference
    with open(os.path.join(SCRIPT_DIR, 'presentation-url.txt'), 'w') as f:
        f.write(url + '\n')
    print(f'   URL also saved to: google-slides/presentation-url.txt')

if __name__ == '__main__':
    main()
