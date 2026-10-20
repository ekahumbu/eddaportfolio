// The single list of tracks. Everything (filters, /for/[track] pages, the "role"
// field in task files) is built from this array. To add a track back later,
// add one entry here.
// heroLine is the headline on that track's page, /for/<slug>.
export const tracks = [
  {
    slug: "executive-support",
    name: "Executive support",
    heroLine: "Calendars, inboxes and meeting packs that stay organised and checked.",
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
  name: "Edda",
  location: "Nairobi (EAT, UTC+3)",
  hours: "US and UK hours",
  // The one place background is mentioned, phrased as a transferable skill.
  // Default wording, to be confirmed by Edda.
  background: "Over a decade of turning messy financial data into clear reports and decisions.",
  aboutSentences: "TODO: 2-3 sentences about how you work and what you are building here.",
  email: "TODO:",
  linkedin: "TODO:",
  github: "https://github.com/ekahumbu",
};

// Tuple form that Zod's z.enum() needs.
export const trackNames = tracks.map((t) => t.name) as unknown as [TrackName, ...TrackName[]];
