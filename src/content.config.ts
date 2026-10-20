// Content collections: Astro reads every .md file in the folders below and checks
// its frontmatter (the YAML block at the top) against these Zod schemas.
// If a required field is missing or wrong, the build stops and says which file.
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { trackNames } from "./data/site";
import { toolNames } from "./data/tools";

// A tool name that must exist in src/data/tools.ts (catches "Monday" vs "Monday.com").
const toolName = z.string().refine((n) => toolNames.has(n), {
  message: "Tool name is not in src/data/tools.ts",
});

const tasks = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tasks" }),
  schema: z
    .object({
      title: z.string().min(1),
      role: z.enum(trackNames),
      alsoShows: z.array(z.enum(trackNames)).default([]),
      skills: z.array(z.string().min(1)).min(1).max(4),
      summary: z.string().min(1).max(160),
      brief: z.string().min(1),
      timeTaken: z.string().min(1),
      tools: z.array(toolName),
      aiTools: z.array(toolName), // [] if none
      aiNote: z.string().optional(),
      outcome: z.string().min(1),
      deliverables: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
      cover: z.string().optional(),
      coverAlt: z.string().optional(),
      // Pixel size of the cover image, so the page reserves its space and doesn't jump while loading.
      coverWidth: z.number().optional(),
      coverHeight: z.number().optional(),
      // "Quick look" images for readers who won't open the files. Same 80 KB WebP rule as the cover.
      previews: z
        .array(z.object({ src: z.string(), alt: z.string().min(1), caption: z.string(), width: z.number(), height: z.number() }))
        .default([]),
      dataSource: z.string().min(1),
      date: z.coerce.date(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    })
    .superRefine((t, ctx) => {
      if (t.aiTools.length > 0 && !t.aiNote) {
        ctx.addIssue({ code: "custom", path: ["aiNote"], message: "aiNote is required when aiTools is not empty" });
      }
      if (t.cover && !t.coverAlt) {
        ctx.addIssue({ code: "custom", path: ["coverAlt"], message: "coverAlt is required when cover is set" });
      }
    }),
});

const log = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/log" }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string().min(1).max(90),
    kind: z.enum(["Built", "Learned", "Broke & fixed", "Changed my mind"]),
    tools: z.array(toolName).default([]),
    task: z.string().optional(), // slug of a related sample task
  }),
});

export const collections = { tasks, log };
