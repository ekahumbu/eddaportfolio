// Runs automatically after `npm run build`. Fails the build if any "TODO:" marker
// made it into the finished site (dist/), so unfinished content can't go live.
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
