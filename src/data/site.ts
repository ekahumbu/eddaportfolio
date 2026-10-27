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
      "For over a decade, I've supported leaders and cross-functional teams by ensuring their operations, data, and schedules run smoothly, reliably, and efficiently. Today, I work as an Executive Assistant, Operations Coordinator, and Analyst, fully optimized for US and UK time zones.",
      "My approach is built on context-first optimization. I know that well-run teams don't need a \"savior\" to tear down their systems. They need a trusted operator who can step in, understand why things are done a certain way, and then apply sharp judgment to make them even better.",
    ],
    points: [
      {
        title: "Rapid Integration",
        text: "I quickly master your existing tools (Notion, Monday.com, Excel, etc.) and adapt to your team's communication style, ensuring a low-friction, high-trust onboarding.",
      },
      {
        title: "Calibrated Recommendations",
        text: "I don't implement blind changes. When I spot friction or waste, I analyze it, formulate a solution, and present a clear, data-backed recommendation for leadership approval. You make the call; I execute flawlessly.",
      },
      {
        title: "Uncompromising Quality",
        text: "I run every deliverable through a strict, 12-point pre-send QA checklist. You can trust that what I hand over is verified, accurate, and ready for immediate use.",
      },
      {
        title: "Proof of Work",
        text: "To demonstrate my methodology without breaching confidentiality, I've built realistic, synthetic sample tasks. They show exactly how I apply operational judgment, structure complex work, and verify outputs. Explore them at nrold.com.",
      },
    ],
  },
  // Hero: the headline (one array item per line) and the paragraphs under it.
  headline: ["Give me a loose brief.", "I'll hand back", "organized, checked work."],
  intro: [
    "Hi, I'm Eddah Dena. I'm an Executive Assistant, Operations Coordinator, and Analyst based in Nairobi, fully aligned with US and UK time zones.",
    "With over a decade of experience, I don't just execute tasks; I act as a strategic extension of your team. I quickly learn your existing systems and rhythms, identify hidden friction, and present clear, data-backed recommendations for your approval. Whether your operations are already well-oiled or rapidly scaling, I bring the judgment to optimize them and the discipline to execute flawlessly.",
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
