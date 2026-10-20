// The single list of tracks. Everything (filters, /for/[track] pages, the "role"
// field in task files) is built from this array. To add a track back later,
// add one entry here.
export const tracks = [
  { slug: "executive-support", name: "Executive support" },
  { slug: "operations", name: "Operations" },
  { slug: "analyst", name: "Analyst" },
] as const;

export type Track = (typeof tracks)[number];
export type TrackName = Track["name"];

// Tuple form that Zod's z.enum() needs.
export const trackNames = tracks.map((t) => t.name) as unknown as [TrackName, ...TrackName[]];
