#!/bin/sh
# Builds the web copies of the case-study screenshots.
#
#   source-assets/screenshots/<name>.<png|jpg|jpeg>   full-size originals (not shipped)
#   public/assets/shots/<name>-960.jpg                phones, 1x desktops
#   public/assets/shots/<name>-1920.jpg               retina / wide screens (never upscaled)
#
# Uses macOS `sips`. Run with `npm run images` after adding or replacing a screenshot.
# JPEG on purpose: sips' AVIF output renders fully transparent in Chromium at some sizes
# (1024px and 1920px wide, for example), so it isn't safe to ship.
set -eu

SRC=source-assets/screenshots
OUT=public/assets/shots
QUALITY=70

mkdir -p "$OUT"

for file in "$SRC"/*; do
  case "$file" in
    *.png | *.jpg | *.jpeg) ;;
    *) continue ;;
  esac
  name=$(basename "${file%.*}")
  original=$(sips -g pixelWidth "$file" | awk '/pixelWidth/ { print $2 }')
  for width in 960 1920; do
    target=$width
    [ "$original" -lt "$target" ] && target=$original
    sips -s format jpeg -s formatOptions "$QUALITY" --resampleWidth "$target" "$file" --out "$OUT/$name-$width.jpg" >/dev/null
  done
  echo "$name"
done
