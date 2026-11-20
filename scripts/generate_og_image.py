import os
import urllib.request
from PIL import Image, ImageDraw, ImageFont, ImageFilter

# Target OG image dimensions: 1200 x 630 (standard 1.91:1 social card)
W, H = 1200, 630
SCALE = 2  # 2x supersampling for razor-sharp antialiasing
SW, SH = W * SCALE, H * SCALE

cache_dir = os.path.join(os.path.dirname(__file__), ".cache_fonts")
os.makedirs(cache_dir, exist_ok=True)

font_900_path = os.path.join(cache_dir, "Inter-Black.ttf")
font_500_path = os.path.join(cache_dir, "Inter-Medium.ttf")

if not os.path.exists(font_900_path):
    print("Downloading Inter Black 900...")
    urllib.request.urlretrieve(
        "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuBWYMZg.ttf",
        font_900_path
    )

if not os.path.exists(font_500_path):
    print("Downloading Inter Medium 500...")
    urllib.request.urlretrieve(
        "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fMZg.ttf",
        font_500_path
    )

# Base canvas with deep dark studio background
img = Image.new("RGBA", (SW, SH), (3, 4, 6, 255))

# Soft radial depth glow behind typography
aura = Image.new("RGBA", (SW, SH), (0, 0, 0, 0))
aura_draw = ImageDraw.Draw(aura)
cx, cy = SW // 2, SH // 2 - 25 * SCALE

for r in range(int(460 * SCALE), 0, -int(5 * SCALE)):
    pct = 1.0 - (r / (460 * SCALE))
    alpha = int(32 * (pct ** 1.7))
    aura_draw.ellipse(
        [cx - r * 1.55, cy - r * 0.95, cx + r * 1.55, cy + r * 0.95],
        fill=(22, 36, 62, alpha)
    )

img = Image.alpha_composite(img, aura)
draw = ImageDraw.Draw(img)

# Matrix dot grid
step = 36 * SCALE
for x in range(step, SW, step):
    for y in range(step, SH, step):
        dx = abs(x - cx) / (SW / 2)
        dy = abs(y - cy) / (SH / 2)
        dist = (dx**2 + dy**2)**0.5
        alpha = int(max(4, 15 * (1.0 - dist * 0.5)))
        draw.ellipse(
            [x - 1*SCALE, y - 1*SCALE, x + 1*SCALE, y + 1*SCALE],
            fill=(255, 255, 255, alpha)
        )

# Framing border with slight inset
pad = 36 * SCALE
draw.rectangle(
    [pad, pad, SW - pad, SH - pad],
    outline=(255, 255, 255, 18),
    width=1 * SCALE
)

# Corner HUD crosshairs
cross = 12 * SCALE
for (x, y) in [(pad, pad), (SW - pad, pad), (pad, SH - pad), (SW - pad, SH - pad)]:
    draw.line([x - cross, y, x + cross, y], fill=(255, 255, 255, 65), width=1 * SCALE)
    draw.line([x, y - cross, x, y + cross], fill=(255, 255, 255, 65), width=1 * SCALE)

# Load fonts
font_black = ImageFont.truetype(font_900_path, 134 * SCALE)
font_copy = ImageFont.truetype(font_900_path, 26 * SCALE)
font_sub = ImageFont.truetype(font_500_path, 34 * SCALE)
font_mono = ImageFont.truetype("C:/Windows/Fonts/consola.ttf", 13 * SCALE)

# Top technical labels
draw.text((pad + 24 * SCALE, pad + 20 * SCALE), "SYS.ID // MK_CORE", font=font_mono, fill=(120, 120, 130, 210))
draw.text((SW - pad - 220 * SCALE, pad + 20 * SCALE), "ARCHITECTING SCALABLE SYSTEMS", font=font_mono, fill=(120, 120, 130, 210))

# Calculate MRIDHUL and copyright symbol sizes
title_text = "MRIDHUL"
title_bbox = draw.textbbox((0, 0), title_text, font=font_black)
title_w = title_bbox[2] - title_bbox[0]
title_h = title_bbox[3] - title_bbox[1]

copy_text = "©"
copy_bbox = draw.textbbox((0, 0), copy_text, font=font_copy)
copy_w = copy_bbox[2] - copy_bbox[0]
copy_gap = 6 * SCALE

total_w = title_w + copy_gap + copy_w
tx = (SW - total_w) // 2
ty = cy - title_h // 2 - 25 * SCALE

# Subtle soft text glow for that modern screen effect
glow = Image.new("RGBA", (SW, SH), (0, 0, 0, 0))
glow_draw = ImageDraw.Draw(glow)
glow_draw.text((tx, ty), title_text, font=font_black, fill=(255, 255, 255, 45))
glow = glow.filter(ImageFilter.GaussianBlur(8 * SCALE))
img = Image.alpha_composite(img, glow)
draw = ImageDraw.Draw(img)

# Crisp main MRIDHUL typography
draw.text((tx, ty), title_text, font=font_black, fill=(255, 255, 255, 255))

# Copyright symbol placed naturally at top right of MRIDHUL
copy_x = tx + title_w + copy_gap
copy_y = ty + 10 * SCALE
draw.text((copy_x, copy_y), copy_text, font=font_copy, fill=(212, 212, 216, 230))

# Subtitle: Full Stack Developer
sub_text = "Full Stack Developer"
sub_bbox = draw.textbbox((0, 0), sub_text, font=font_sub)
sub_w = sub_bbox[2] - sub_bbox[0]
sub_h = sub_bbox[3] - sub_bbox[1]

sub_x = (SW - sub_w) // 2
sub_y = ty + title_h + 38 * SCALE
draw.text((sub_x, sub_y), sub_text, font=font_sub, fill=(185, 190, 200, 245))

# Domain tag at bottom
tag_text = "mridhulkrishna.in"
tag_bbox = draw.textbbox((0, 0), tag_text, font=font_mono)
tag_w = tag_bbox[2] - tag_bbox[0]
tag_h = tag_bbox[3] - tag_bbox[1]

pill_x = (SW - tag_w) // 2
pill_y = SH - pad - 42 * SCALE
pill_pad_x = 24 * SCALE
pill_pad_y = 10 * SCALE

# Pill box
draw.rounded_rectangle(
    [pill_x - pill_pad_x, pill_y - pill_pad_y, pill_x + tag_w + pill_pad_x, pill_y + tag_h + pill_pad_y],
    radius=18 * SCALE,
    fill=(12, 14, 20, 230),
    outline=(255, 255, 255, 25),
    width=1 * SCALE
)

# Cyan status dot inside pill
dot_r = 3.5 * SCALE
draw.ellipse(
    [pill_x - pill_pad_x + 12 * SCALE - dot_r, pill_y + tag_h // 2 - dot_r, pill_x - pill_pad_x + 12 * SCALE + dot_r, pill_y + tag_h // 2 + dot_r],
    fill=(6, 182, 212, 255)
)

draw.text((pill_x + 8 * SCALE, pill_y), tag_text, font=font_mono, fill=(228, 228, 231, 230))

# Downsample to 1200x630
final_img = img.resize((W, H), Image.Resampling.LANCZOS)
final_rgb = final_img.convert("RGB")

# Save outputs
public_dir = os.path.join(os.path.dirname(__file__), "..", "public")
png_out = os.path.join(public_dir, "og-image.png")
webp_out = os.path.join(public_dir, "og-image.webp")

final_rgb.save(png_out, format="PNG", optimize=True)
final_rgb.save(webp_out, format="WEBP", quality=95)
print(f"Generated {png_out} and {webp_out} successfully!")
