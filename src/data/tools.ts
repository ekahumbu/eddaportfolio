// Every tool the site can mention. Task files must use these exact names.
//
// status (edit these yourself):
//   "daily"      used every day for years
//   "practising" you have an account and are building something in it
//   "started"    first tutorial or free account only
//   "TODO:"      not confirmed yet. The production build fails until it is replaced.
//
// "used" is NOT set here. It is worked out at build time: a tool is "used" when a
// published task lists it. Writing "used" by hand fails the build.

export type ToolGroup = "Coordination" | "Operations" | "Analysis" | "AI";
export type HandStatus = "daily" | "practising" | "started" | "TODO:";

export interface Tool {
  name: string;
  group: ToolGroup;
  status: HandStatus;
  note?: string; // one short line, e.g. "Team wiki and SOP pages"
}

export const tools: Tool[] = [
  // Coordination
  { name: "Notion", group: "Coordination", status: "TODO:" },
  { name: "Slack", group: "Coordination", status: "TODO:" },
  { name: "Google Workspace", group: "Coordination", status: "TODO:" },
  { name: "Microsoft 365", group: "Coordination", status: "TODO:" },
  { name: "Calendly", group: "Coordination", status: "TODO:" },
  { name: "Loom", group: "Coordination", status: "TODO:" },

  // Operations
  { name: "Monday.com", group: "Operations", status: "TODO:" },
  { name: "HubSpot", group: "Operations", status: "TODO:" },
  { name: "Make", group: "Operations", status: "TODO:" },
  { name: "Zapier", group: "Operations", status: "TODO:" },
  { name: "Power Automate", group: "Operations", status: "TODO:" },
  { name: "SharePoint", group: "Operations", status: "TODO:" },
  { name: "Canva", group: "Operations", status: "TODO:" },

  // Analysis
  { name: "Excel", group: "Analysis", status: "TODO:" },
  { name: "SQL", group: "Analysis", status: "TODO:" },
  { name: "Power BI", group: "Analysis", status: "TODO:" },
  { name: "Python", group: "Analysis", status: "TODO:" },
  { name: "Google Sheets", group: "Analysis", status: "TODO:" },

  // AI
  { name: "Claude", group: "AI", status: "TODO:" },
  { name: "ChatGPT", group: "AI", status: "TODO:" },
  { name: "Perplexity", group: "AI", status: "TODO:" },
  { name: "NotebookLM", group: "AI", status: "TODO:" },
  { name: "Leonardo.ai", group: "AI", status: "TODO:" },
];

export const toolNames = new Set(tools.map((t) => t.name));
