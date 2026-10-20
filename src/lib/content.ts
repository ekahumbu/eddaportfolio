// Loads tasks, log entries and tools, runs the checks a single-file schema can't do,
// and works out each tool's "used" status. Pages import from here, so a broken
// content set stops the build instead of reaching the live site.
import { getCollection } from "astro:content";
import { tools, type HandStatus, type Tool } from "../data/tools";

export type ToolStatus = HandStatus | "used";
export interface ToolView extends Omit<Tool, "status"> {
  status: ToolStatus;
  taskSlugs: string[]; // published tasks that use this tool
}

const MAX_FEATURED = 3;
// Strongest first. "TODO:" sorts last.
const statusOrder: ToolStatus[] = ["used", "daily", "practising", "started", "TODO:"];

// Drafts show while developing (npm run dev) but never in the production build.
const showDrafts = import.meta.env.DEV;

export async function getTasks() {
  const all = await getCollection("tasks");
  const published = all.filter((t) => !t.data.draft);

  if (published.filter((t) => t.data.featured).length > MAX_FEATURED) {
    throw new Error(`More than ${MAX_FEATURED} tasks have featured: true.`);
  }

  const tasks = (showDrafts ? all : published).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
  return tasks;
}

export async function getLog() {
  const [entries, all] = await Promise.all([getCollection("log"), getCollection("tasks")]);
  const slugs = new Set(all.map((t) => t.id));
  for (const e of entries) {
    if (e.data.task && !slugs.has(e.data.task)) {
      throw new Error(`Log entry "${e.id}" points to a task that doesn't exist: ${e.data.task}`);
    }
  }
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

// Tools with their status. "used" is computed from published tasks, never typed by hand.
export async function getTools(): Promise<ToolView[]> {
  const published = (await getCollection("tasks")).filter((t) => !t.data.draft);

  const views = tools.map((tool): ToolView => {
    if ((tool.status as string) === "used") {
      throw new Error(`Tool "${tool.name}" has status "used" set by hand in tools.ts. Remove it; it is computed.`);
    }
    const taskSlugs = published
      .filter((t) => t.data.tools.includes(tool.name) || t.data.aiTools.includes(tool.name))
      .map((t) => t.id);
    return { ...tool, status: taskSlugs.length > 0 ? "used" : tool.status, taskSlugs };
  });

  return views.sort((a, b) => statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status));
}
