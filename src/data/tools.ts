// Every tool the site can mention. Task files must use these exact names.
//
// status (edit these yourself):
//   "daily"      used every day for years
//   "practicing" you have an account and are building something in it
//   "started"    first tutorial or free account only
//   "TODO:"      not confirmed yet. The production build fails until it is replaced.
//
// "used" is NOT set here. It is worked out at build time: a tool is "used" when a
// published task lists it. Writing "used" by hand fails the build.

export type ToolGroup = "Coordination" | "Operations" | "Analysis" | "AI";
export type HandStatus = "daily" | "practicing" | "started" | "TODO:";

export interface Tool {
  name: string;
  group: ToolGroup;
  status: HandStatus;
  note?: string; // one short line, e.g. "Team wiki and SOP pages"
}

export const tools: Tool[] = [
  // Coordination
  { name: "Notion", group: "Coordination", status: "daily" },
  { name: "Slack", group: "Coordination", status: "practicing" },
  { name: "Google Workspace", group: "Coordination", status: "practicing" },
  { name: "Microsoft 365", group: "Coordination", status: "daily" },
  { name: "Microsoft Teams", group: "Coordination", status: "daily" },
  { name: "Outlook", group: "Coordination", status: "daily" },
  { name: "OneDrive", group: "Coordination", status: "daily" },
  { name: "Word", group: "Coordination", status: "daily" },
  { name: "PowerPoint", group: "Coordination", status: "daily" },
  { name: "Calendly", group: "Coordination", status: "started" },
  { name: "Loom", group: "Coordination", status: "started" },

  // Operations
  { name: "Monday.com", group: "Operations", status: "started" },
  { name: "HubSpot", group: "Operations", status: "started" },
  { name: "Make", group: "Operations", status: "started" },
  { name: "Zapier", group: "Operations", status: "started" },
  { name: "n8n", group: "Operations", status: "practicing", note: "Social posting and task-move alerts by email and SMS" },
  { name: "Power Automate", group: "Operations", status: "practicing", note: "Daily Excel file backup" },
  { name: "SharePoint", group: "Operations", status: "daily" },
  { name: "Canva", group: "Operations", status: "daily" },
  { name: "Google Forms", group: "Operations", status: "practicing" },

  // Analysis
  { name: "Excel", group: "Analysis", status: "daily" },
  { name: "SQL", group: "Analysis", status: "practicing", note: "Querying large databases" },
  { name: "Power BI", group: "Analysis", status: "daily" },
  { name: "Python", group: "Analysis", status: "practicing", note: "Cleaning and splitting documents" },
  { name: "Google Sheets", group: "Analysis", status: "practicing" },

  // AI
  { name: "Claude", group: "AI", status: "daily" },
  { name: "ChatGPT", group: "AI", status: "daily" },
  { name: "Perplexity", group: "AI", status: "daily", note: "Research" },
  { name: "NotebookLM", group: "AI", status: "practicing", note: "Studying" },
  { name: "Leonardo.ai", group: "AI", status: "practicing", note: "Image generation" },
];

export const toolNames = new Set(tools.map((t) => t.name));
