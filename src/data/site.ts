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
  // About section, one string per paragraph. The Build log link is added after
  // the last paragraph in About.astro.
  about: [
    "Hi, I'm Eddah! I'm based in Nairobi and work flexibly across US and UK time zones.",
    "For over a decade, I've helped teams make sense of messy financial data by turning it into clear reports and confident decisions.",
    "Today, I bring that same clarity to my work as an Executive Assistant, Operations Coordinator, and Analyst. Give me a loose brief, and I'll hand back organized, thoroughly checked, and ready-to-use results.",
    "To protect privacy, every sample here is a fictional scenario built on synthetic data.",
  ],
  // Hero: the headline (one array item per line) and the line under it.
  headline: ["Give me a loose brief.", "I'll hand back", "organized, checked work."],
  tagline: "Executive Assistant, Operations Coordinator and Analyst in Nairobi, with over a decade of turning messy financial data into clear reports.",
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
