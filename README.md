# Eddah Dena: portfolio

A static Astro site of sample tasks (executive support, operations, analysis). Each one is a fictional scenario built on synthetic data.

## Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Local site at `localhost:4321` (drafts visible) |
| `npm run build` | Build to `dist/`, then fail if any `TODO:` is left in it |
| `npm run preview` | Preview the built site |
| `node scripts/make-og-image.mjs` | Redraw the link-preview image, `public/og.png` |

## Where things live

- `src/content/tasks/`: one Markdown file per sample task. `draft: true` hides it from the live site.
- `src/content/log/`: Build log entries.
- `src/data/site.ts`: name, About text, contact details and tracks.
- `src/data/tools.ts`: tool stack and statuses. "Used" is worked out from published tasks.
- `src/data/ai.ts`: the "How I use AI" section.
- `public/samples/`: deliverables and preview images. Strip personal metadata before adding files.
- `astro.config.mjs`: the site address for link previews. On Vercel it is read from the production domain automatically; for a local build run `SITE_URL=https://your-domain npm run build`.

## Deploying on Vercel

Import the GitHub repo in Vercel. It detects Astro and uses `vercel.json` (build `npm run build`, output `dist`). Add the custom domain under Project → Settings → Domains, then redeploy so link previews use it.
