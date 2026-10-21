// "How I got here": the turns from financial reporting to remote support work.
// Each turn has the question I was asking and the line that changed my mind.
// The last one is still open. Starting wording for Eddah to confirm or rewrite.
export interface Turn {
  period: string;
  title: string;
  question: string;
  turn: string;
  link?: { label: string; href: string };
  open?: boolean; // still being written
}

export const journey: Turn[] = [
  {
    period: "10+ years",
    title: "Making sense of financial data",
    question: "What makes a report something people trust?",
    turn: "Clear, checked numbers are what let people decide with confidence. Everything else is decoration.",
  },
  {
    period: "2026",
    title: "Choosing remote support work",
    question: "Where else do those skills matter?",
    turn: "Executives and operations teams need what I've always done: messy inputs turned into organized, checked work.",
  },
  {
    period: "Sep 2026",
    title: "Practicing on simulations",
    question: "How do I show my work when my day-to-day work is confidential?",
    turn: "I practice on realistic, fictional briefs with synthetic data, so I can show every file without exposing anyone's information.",
    link: { label: "The first one: a CEO's week", href: "/tasks/ceo-week-scheduling" },
  },
  {
    period: "Oct 2026",
    title: "Turning mistakes into a checklist",
    question: "Why do small errors still reach the first review?",
    turn: "Six errors in my first three samples became 12 checks I now run before anything is sent.",
    link: { label: "The pre-send checklist", href: "/tasks/pre-send-qa-checklist" },
  },
  {
    period: "Next",
    title: "Still being written",
    question: "What do remote teams need from me next?",
    turn: "More operations and analysis samples, built in the tools those teams use: HubSpot, Monday.com and Make.",
    open: true,
  },
];
