import type { Slide } from "./types";

/** Session 2 — Old Way vs New Way (~10 minutes; trim slides live if time is tight). */
export const session2HandsOn: Slide[] = [
  {
    id: "s2-title",
    variant: "title",
    title: "LOMEdu",
    subtitle: "Session 2: Old Way vs New Way",
    tagline: "Interactive framing, definitions, AI coding trends, and visual checkpoints — about 10 minutes",
  },
  {
    id: "s2-hook-poll",
    variant: "poll",
    title: "Let’s be honest…",
    questions: [
      "Who thinks coding is hard? (Show of hands — no wrong answer.)",
      "Who has already used AI to help with code, homework, or a small project?",
    ],
  },
  {
    id: "s2-section-old",
    variant: "imageApps",
    title: "Software programming",
    imageSrc: "/images/session2-software-programming.png",
    imageAlt:
      "Flowchart titled Programming Languages Types: low-level (Binary Code, Machine Language), medium-level (C, C++, Assembly Language), and high-level (COBOL, Python, Pascal, Java) branching from a central node.",
  },
  {
    id: "s2-old-definition",
    variant: "definition",
    title: "Old way — definition",
    definition:
      "Traditional software development requires learning programming languages, writing code manually, and debugging errors step-by-step.",
    callout: "Strength: deep control and transferable fundamentals. Cost: long ramp before you ship something satisfying.",
  },
  {
    id: "s2-old-practices",
    variant: "bullets",
    title: "Old way — what it often felt like",
    intro: "Typical friction points (familiar to many learners):",
    bullets: [
      "Heavy upfront memorization: syntax, APIs, build tools, and error messages before the idea feels “real”",
      "Tight loop: write → compile/run → read cryptic errors → search docs or forums → repeat",
      "Progress gated by environment setup — one misconfigured path can burn a whole evening",
    ],
  },
  {
    id: "s2-section-new",
    variant: "section",
    title: "The shift",
    body: "Natural language can now sit beside traditional code: you describe intent, constraints, and examples — and tools generate or refactor implementation drafts for you to review.",
  },
  {
    id: "s2-new-definition",
    variant: "definition",
    title: "New way — definition",
    definition:
      "AI-assisted development allows users to create software using natural language while AI generates and improves the code.",
    callout: "You still own architecture, correctness, security, testing, and ethics — the AI accelerates drafting, not responsibility.",
  },
  {
    id: "s2-side-by-side",
    variant: "twoColumn",
    title: "Old way vs new way — at a glance",
    leftTitle: "Old way (manual-first)",
    leftItems: [
      "Fluency starts with syntax and tooling",
      "Progress often measured in lines typed and errors fixed",
      "Search and docs are your primary “assistant”",
    ],
    rightTitle: "New way (intent-first)",
    rightItems: [
      "Fluency starts with clear goals, constraints, and acceptance criteria",
      "Progress often measured in working behavior and reviewed diffs",
      "AI proposes edits; you verify, integrate, and explain the result",
    ],
  },
  {
    id: "s2-contrast-workflow",
    variant: "contrast",
    title: "Same project — different first move",
    leftPrompt: "“I’ll read three chapters, install five tools, then try Hello World.”",
    rightPrompt: "“I’ll describe the smallest working version, generate a scaffold, then tighten with tests.”",
  },
  {
    id: "s2-trends",
    variant: "bullets",
    title: "AI coding — trends worth naming",
    intro: "The landscape moves quickly; a few durable patterns show up in industry and classrooms:",
    bullets: [
      "Inline completion and chat inside editors (e.g. Copilot-style assist) became a baseline expectation for many devs",
      "Tools increasingly span files: refactors, tests, and “do this task across the repo” workflows",
      "Evaluation is shifting toward reading code, reasoning about tradeoffs, and proving correctness — not only typing speed",
      "Organizations pair AI speed with policies: secrets handling, license compliance, and human review for risky changes",
    ],
  },
  {
    id: "s2-still-human",
    variant: "bullets",
    title: "What does not go away?",
    intro: "AI-assisted does not mean “hands off.” Strong builders still:",
    bullets: [
      "Break problems into testable steps and define “done”",
      "Read diffs like documentation someone else wrote — because it did",
      "Debug with hypotheses, logs, and minimal reproducers when behavior is wrong",
      "Respect academic integrity, licensing, and user privacy — same as before",
    ],
  },
  {
    id: "s2-quick-activity",
    variant: "activity",
    title: "30-second pair turn",
    prompt: "Turn to a partner: name one task you’d happily delegate to AI today, and one task you would not delegate without strong human review.",
    durationLabel: "~1 minute",
  },
  {
    id: "s2-recap",
    variant: "recap",
    title: "Recap",
    bullets: [
      "Old way: languages, manual coding, and step-by-step debugging as the default path",
      "New way: natural language plus AI-generated drafts — with you responsible for quality and integrity",
      "Trends point toward multi-file assist and stronger verification skills, not away from thinking",
    ],
  },
];
