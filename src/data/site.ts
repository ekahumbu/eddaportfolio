// The single list of tracks. Everything (filters, /for/[track] pages, the "role"
// field in task files) is built from this array. To add a track back later,
// add one entry here.
// heroLine is the headline on that track's page, /for/<slug>.
export const tracks = [
  {
    slug: "executive-support",
    name: "Executive support",
    heroLine: "Calendars, inboxes and meeting packs that stay organized and checked.",
  },
  {
    slug: "operations",
    name: "Operations",
    heroLine: "Processes, trackers and handoffs that keep work moving.",
  },
  {
    slug: "analyst",
    name: "Analyst",
    heroLine: "Messy data turned into clean reports a team can act on.",
  },
] as const;

export type Track = (typeof tracks)[number];
export type TrackName = Track["name"];

// Personal details used by the hero, About and Contact sections.
// Anything still "TODO:" shows a visible marker in development and fails the
// production build, so nothing unfinished goes live.
export const profile = {
  name: "Eddah Dena",
  location: "Nairobi (EAT, UTC+3)",
  hours: "US and UK hours",
  // About section: intro paragraphs (the first is set large), then the
  // highlighted points. The Build log link is added after the points in
  // About.astro.
  about: {
    intro: [
      "For over a decade, I've worked with audit teams to analyze audit data and identify red flags, turning large, messy datasets into findings people could act on.",
      "Today, I also manage internal data and CRMs that help audit directors and leadership keep track of their clients, their teams, and workflow expectations. That work sits where analysis meets operations, and it's the bridge I'm building on as I move into operational analytics and executive support.",
      "My approach is context-first. Well-run teams don't need someone to tear down their systems. I start by understanding why things are done a certain way, then use the judgment I built in audit to suggest where they could run better.",
    ],
    points: [
      {
        title: "Rapid Integration",
        text: "I already work daily in Excel, Power BI, SharePoint, and Notion, and I'm building hands-on experience with HubSpot, Monday.com, and Make. I adapt to your tools and your team's communication style rather than asking you to adopt mine.",
      },
      {
        title: "Calibrated Recommendations",
        text: "Audit taught me to back every finding with evidence. When I spot friction or waste, I analyze it, propose a solution, and bring it to you for approval before anything changes. You make the call; I follow through.",
      },
      {
        title: "Uncompromising Quality",
        text: "I run every deliverable through a strict, 12-point pre-send QA checklist. You can trust that what I hand over is verified, accurate, and ready for immediate use.",
      },
      {
        title: "Proof of Work",
        text: "Because my day-to-day work is confidential, I've built realistic sample tasks with synthetic data to show how I would handle operations and executive-support work: how I structure it, apply judgment, and verify the output. Explore them at nrold.com.",
      },
    ],
  },
  // Hero: the headline (one array item per line) and the paragraphs under it.
  headline: ["Give me a loose brief.", "I'll hand back", "organized, checked work."],
  intro: [
    "Hi, I'm Eddah Dena. I'm based in Nairobi, work across US and UK time zones, and focus on operational analytics and executive support.",
    "For over a decade, I've analyzed audit data to spot red flags, and today I manage the internal data and CRMs that help audit leadership track clients, teams, and workflows. I'm now bringing that rigor to operations teams and the executives who lead them: learning your systems, spotting friction, and bringing clear, data-backed recommendations for your approval.",
  ],
  portrait: {
    src: "/media/eddah-portrait.webp",
    width: 640,
    height: 800,
    alt: "Eddah Dena, wearing glasses and a denim shirt, at a conference.",
  },
  // Contact: the invitation at the top of "Get in touch".
  contactInvite: "Have a messy brief, a chaotic calendar, or data that needs making sense of? Let's talk. I'm currently open to new opportunities and respond to emails within 24 hours.",
  email: "eddadena@nrold.com",
  linkedin: "https://www.linkedin.com/in/eddahdena",
};

// Tuple form that Zod's z.enum() needs.
export const trackNames = tracks.map((t) => t.name) as unknown as [TrackName, ...TrackName[]];
