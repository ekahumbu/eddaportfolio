// Draws the link-preview image (public/og.png, 1200x630) that LinkedIn, Slack and
// email apps show when someone shares the site. Run it again after changing the
// name, location or headline:  node scripts/make-og-image.mjs
import sharp from "sharp";
import { profile } from "../src/data/site.ts";

// Same colors as the light theme in src/styles/global.css.
const paper = "#f5f6f3";
const ink = "#1c1f24";
const muted = "#5d636c";
const accent = "#2a44c9";

const escape = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${paper}"/>
  <rect x="80" y="80" width="12" height="470" fill="${accent}"/>
  <text x="130" y="140" font-family="Consolas, monospace" font-size="28" fill="${muted}">${escape(`${profile.name} · Nairobi · ${profile.hours}`)}</text>
  <text font-family="Georgia, serif" font-size="76" fill="${ink}">
    <tspan x="130" y="290">Work that keeps moving,</tspan>
    <tspan x="130" y="380">organized and checked.</tspan>
  </text>
  <text x="130" y="520" font-family="Segoe UI, Arial, sans-serif" font-size="32" fill="${muted}">Sample tasks: executive support, operations, analysis</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og.png");
console.log("Wrote public/og.png");
