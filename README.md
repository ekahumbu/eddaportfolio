# Eddah Dena: portfolio

A static Astro site of sample tasks (executive support, operations, analysis), each built on a fictional scenario with synthetic data.

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
- `astro.config.mjs`: set `site` to the live web address. Link previews need it, and the build fails until it is set.
