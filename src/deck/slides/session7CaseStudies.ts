import type { Slide } from "./types";

/** Session 7 — Case studies: real-ish arcs from idea to shipped helper (~5–10 minutes; trim slides live if time is tight). */
export const session7CaseStudies: Slide[] = [
  {
    id: "s7-title",
    variant: "title",
    title: "LOMEdu",
    subtitle: "Session 7: Case Studies",
    tagline: "Two short stories — non‑technical founder and shop owner — then you choose what you would build",
  },
  {
    id: "s7-why-cases",
    variant: "section",
    title: "Why case studies here?",
    body: "You have heard principles all course long. Stories make the workflow concrete: who felt the pain, what got built first, where AI accelerated work, and what still required human judgment.",
  },
  {
    id: "s7-lens",
    variant: "bullets",
    title: "A simple lens for each story",
    intro: "As you listen, track these four beats (you can scribble one word per beat):",
    bullets: [
      "Problem — who hurts, how often, and what “done” looks like",
      "Smallest shippable version — the first screen or flow that actually helped",
      "AI’s job — drafting, structuring, or generating; your job — requirements, review, and ethics",
      "Proof — what convinced the user (or customer) that it was worth trusting",
    ],
    footer: "If you miss a detail, that is fine — catch the arc, not every bullet.",
  },
  {
    id: "s7-case1-section",
    variant: "section",
    title: "Case 1 — Preview AI",
    body: "Non‑technical founder → shipped a CV and interview‑prep helper using AI in the loop. Not magic — scoped product thinking plus relentless iteration.",
  },
  {
    id: "s7-case1-context",
    variant: "bullets",
    title: "Case 1 — the situation",
    intro: "Founder background: strong domain sense (hiring, career coaching, or HR-adjacent work) — not a professional engineer.",
    bullets: [
      "Users struggled to turn messy experience into a tight narrative employers skim in under 60 seconds",
      "Existing templates felt generic; feedback from friends was inconsistent and slow",
      "Goal: a guided flow — intake questions → structured CV sections → optional “interview card” summaries per role",
    ],
    footer: "Constraint that helped: one primary persona (e.g. early-career job seekers in one region or industry).",
  },
  {
    id: "s7-case1-how",
    variant: "twoColumn",
    title: "Case 1 — how AI was used (honestly)",
    leftTitle: "Where AI accelerated",
    leftItems: [
      "Drafting bullet rewrite variants from rough notes",
      "Suggesting section order and headline wording from job descriptions pasted in",
      "Generating copy for helper text, empty states, and onboarding prompts",
    ],
    rightTitle: "Where the founder stayed in charge",
    rightItems: [
      "Defining the step-by-step wizard and validation rules",
      "Choosing what never auto-publishes without explicit user confirmation",
      "Testing with real résumés and fixing confusing UX — not debating model names",
    ],
  },
  {
    id: "s7-case1-outcome",
    variant: "definition",
    title: "Case 1 — takeaway",
    definition:
      "The product worked because the founder treated AI as a fast drafting partner inside a narrow workflow — not as an oracle that replaces product judgment, privacy care, or user testing.",
    callout: "Pattern: painful, repeatable task + tight scope + visible output each session.",
  },
  {
    id: "s7-case2-section",
    variant: "section",
    title: "Case 2 — The shop owner",
    body: "Small retail operator → built an automation dashboard to see stock, sales, and alerts in one place instead of juggling chats, spreadsheets, and supplier portals.",
  },
  {
    id: "s7-case2-context",
    variant: "bullets",
    title: "Case 2 — the situation",
    intro: "Day-to-day pain was coordination, not lack of data. Numbers existed — they were just scattered and late.",
    bullets: [
      "Morning routine: check three messaging threads, a handwritten tally, and a supplier email for shortages",
      "Promotions and weather spikes were easy to miss until the shelf was already empty",
      "Goal: one morning screen — sales vs yesterday, low-stock flags, and “needs reply” supplier messages (even if v1 was manual refresh)",
    ],
    footer: "Success metric: fewer panicked mid-day runs to the cash desk to “guess” what to reorder.",
  },
  {
    id: "s7-case2-how",
    variant: "twoColumn",
    title: "Case 2 — how AI was used (honestly)",
    leftTitle: "Where AI accelerated",
    leftItems: [
      "Sketching database tables and API shapes from a verbal description of the shop flow",
      "Boilerplate for charts, tables, and auth scaffolding the owner could learn incrementally",
      "Explaining errors in plain language so the owner could paste logs and unblock quickly",
    ],
    rightTitle: "Where the owner stayed in charge",
    rightItems: [
      "Which integrations were worth money vs. which could wait (manual CSV upload v1)",
      "Thresholds for alerts — e.g. “low stock” is not the same for every SKU",
      "Trust: who can log in, what data leaves the shop, and backup before “clever” automation",
    ],
  },
  {
    id: "s7-case2-outcome",
    variant: "definition",
    title: "Case 2 — takeaway",
    definition:
      "The dashboard mattered because it respected an existing workflow — aggregate, alert, and reduce context switching — instead of forcing a perfect real-time system on day one.",
    callout: "Pattern: glue between systems + clear alerts beats a prettier chart nobody checks.",
  },
  {
    id: "s7-compare",
    variant: "contrast",
    title: "Same skill — different surface",
    leftPrompt:
      "Case 1 — mostly language and structure: turning stories into scannable documents and interview talking points.",
    rightPrompt:
      "Case 2 — mostly signals and timing: turning messy operations into a trustworthy control panel.",
  },
  {
    id: "s7-activity-choose",
    variant: "activity",
    title: "Which one would YOU build?",
    prompt:
      "Pick Case 1 (CV / career helper) or Case 2 (shop dashboard). In pairs or threes: 1) Say which you chose and one sentence why. 2) Name the smallest first version you would ship in two weeks. 3) Name one thing you would not let AI decide without you.",
    durationLabel: "3–4 minutes",
  },
  {
    id: "s7-poll-extensions",
    variant: "poll",
    title: "Stretch prompts (if you have another minute)",
    questions: [
      "Who leaned Case 1 — language and narrative tools?",
      "Who leaned Case 2 — operations, numbers, and alerts?",
      "Who thought of a third idea that combines both — e.g. hiring dashboard for small shops?",
    ],
  },
  {
    id: "s7-recap",
    variant: "recap",
    title: "Session 7 — recap",
    bullets: [
      "Non‑tech founder path: narrow persona, wizard UX, AI for drafts — you own structure and trust",
      "Shop owner path: aggregate scattered truth, start with simple alerts — you own thresholds and permissions",
      "Both paths reward small releases, real users, and explicit “human must approve” boundaries",
      "Your turn: pick a pain you understand better than the average startup — that is your unfair advantage",
    ],
    footer: "Next step: carry your chosen case into a one-page brief — problem, user, v1 scope, and first test.",
  },
];
