// Runs automatically after `npm run build`. Fails the build if any "TODO:" marker
// made it into the finished site (dist/), so unfinished content can't go live,
// or if an Upwork-safe /p/ page contains contact details.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const textFiles = /\.(html|css|js|json|xml|txt|svg|md)$/i;
const hits = [];

function scan(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) scan(path);
    else if (textFiles.test(name) && readFileSync(path, "utf8").includes("TODO:")) hits.push(path);
  }
}

scan("dist");

if (hits.length > 0) {
  console.error("\nBuild failed: 'TODO:' found in the finished site:");
  for (const h of hits) console.error("  " + h);
  console.error("Fill in or remove these values (statuses in src/data/tools.ts, task and log files, site in astro.config.mjs).\n");
  process.exit(1);
}
console.log("postbuild: no TODO: markers in dist/.");

// The /p/ pages are linked from Upwork, which bans off-platform contact details.
// Each page's HTML must not contain any of these. "linkedin" is lowercase on
// purpose: it catches linkedin.com links, while a task that names LinkedIn as a
// vendor (vendor-spend-review) is still allowed.
const banned = ["@", "linkedin", "#contact"];
const upworkHits = [];
const pDir = join("dist", "p");
const pPages = readdirSync(pDir).map((slug) => join(pDir, slug, "index.html"));

if (pPages.length === 0) {
  console.error("\nBuild failed: no pages found in dist/p/.\n");
  process.exit(1);
}

for (const page of pPages) {
  const html = readFileSync(page, "utf8");
  for (const word of banned) {
    if (html.includes(word)) upworkHits.push(`${page}: "${word}"`);
  }
}

if (upworkHits.length > 0) {
  console.error("\nBuild failed: an Upwork-safe /p/ page contains contact details:");
  for (const h of upworkHits) console.error("  " + h);
  console.error("Remove them from the task file, TaskArticle.astro or the bare layout in Base.astro.\n");
  process.exit(1);
}
console.log(`postbuild: ${pPages.length} /p/ pages are free of "@", "linkedin" and "#contact".`);
