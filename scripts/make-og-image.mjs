// Draws the link-preview image (public/og.png, 1200x630) that LinkedIn, Slack and
// email apps show when someone shares the site. Run it again after changing the
// name, headline or portrait:  node scripts/make-og-image.mjs
import sharp from "sharp";
import { profile } from "../src/data/site.ts";

// Same colors as the light theme in src/styles/global.css.
const paper = "#f7f2e3";
const ink = "#1c1a17";
const muted = "#6f6a5d";
const rule = "#ddd7c5";
const accent = "#b0301a";

const escape = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

// Portrait on the right, 320x400, with a thin border.
const photo = { x: 800, y: 115, w: 320, h: 400 };
const portrait = await sharp(`public${profile.portrait.src}`).resize(photo.w, photo.h).toBuffer();

const lines = profile.headline
  .map((l, i) => `<tspan x="80" y="${268 + i * 66}"${i === profile.headline.length - 1 ? ` fill="${accent}"` : ""}>${escape(l)}</tspan>`)
  .join("");

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${paper}"/>
  <text x="80" y="130" font-family="Consolas, monospace" font-size="22" letter-spacing="3" fill="${muted}">${escape(`${profile.name.toUpperCase()} · NAIROBI · ${profile.hours.toUpperCase()}`)}</text>
  <text font-family="Segoe UI Semibold, Segoe UI, Arial, sans-serif" font-weight="600" font-size="54" letter-spacing="-1" fill="${ink}">${lines}</text>
  <text x="80" y="540" font-family="Segoe UI, Arial, sans-serif" font-size="26" fill="${muted}">Executive support · Operations · Analysis</text>
  <rect x="${photo.x - 1}" y="${photo.y - 1}" width="${photo.w + 2}" height="${photo.h + 2}" fill="${rule}"/>
</svg>`;

await sharp(Buffer.from(svg))
  .composite([{ input: portrait, left: photo.x, top: photo.y }])
  .png()
  .toFile("public/og.png");
console.log("Wrote public/og.png");
