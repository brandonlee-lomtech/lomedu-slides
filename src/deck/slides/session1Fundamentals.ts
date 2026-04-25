import type { Slide } from "./types";

export const session1Fundamentals: Slide[] = [
  {
    id: "title",
    variant: "title",
    title: "LOMEdu",
    subtitle: "Session 1: Fundamentals",
    tagline: "AI, generative vs agentic systems, and AI-assisted coding — about 15–20 minutes",
  },
  {
    id: "hook",
    variant: "bullets",
    title: "The world is changing with AI",
    intro:
      "You have almost certainly used something labeled “AI” this week. Today we align on a few clear terms so the rest of the course stays consistent.",
    bullets: [
      "“AI” shows up everywhere — not every use means the same technology or capability",
      "We map AI, generative tools, agent-style systems, and AI-assisted coding — then go hands-on later",
    ],
  },
  {
    id: "what-is-ai",
    variant: "definition",
    title: "What is AI?",
    definition:
      "Artificial Intelligence (AI) is a system that can perform tasks that normally require human intelligence — such as understanding language, solving problems, and supporting decisions.",
    callout: "Reliable definition you can reuse in essays and interviews.",
  },
  {
    id: "simple-model",
    variant: "bullets",
    title: "A simple mental model",
    intro: "AI is not only “answering a question.” At a high level, useful AI systems help you:",
    bullets: [
      "Think — reason, compare options, structure messy information",
      "Create — draft text, images, code, or designs from your intent",
      "Help you do — accelerate workflows when paired with your judgment",
    ],
  },
  {
    id: "apps-visual",
    variant: "imageApps",
    title: "Tools you may already know",
    prompt: "Which apps in this visual have you already used?",
    imageSrc: "/images/gen-vs-agentic-apps.svg",
    imageAlt:
      "Collage of popular AI applications illustrating generative tools (chat and image apps) and more agentic workflows (coding agents and assistants).",
  },
  {
    id: "poll-chatgpt",
    variant: "poll",
    title: "Quick check-in",
    questions: [
      "Who has used ChatGPT (or a similar chat assistant) before?",
      "Did it do things by itself — or mostly after you asked each time?",
    ],
  },
  {
    id: "generative-def",
    variant: "definition",
    title: "Generative AI",
    definition:
      "Generative AI creates new content — text, images, code, audio, or designs — from your input (a prompt, example, or constraints).",
    callout: "Metaphor: the Creator (artist). You ask → it produces an artifact.",
  },
  {
    id: "generative-examples",
    variant: "bullets",
    title: "Generative AI — examples",
    bullets: [
      "Text and chat: ChatGPT, Gemini, Claude — drafts, summaries, brainstorming, code snippets",
      "Images and design: Midjourney, DALL·E 3, Stable Diffusion — visuals from descriptions",
      "Coding assist: GitHub Copilot, ChatGPT — suggest, explain, and refactor code with you in the loop",
    ],
  },
  {
    id: "agentic-def",
    variant: "definition",
    title: "Agentic AI",
    definition:
      "Agentic AI plans and carries out multi-step work toward a goal — choosing actions, using tools, and adapting until the objective is met (within limits you set).",
    callout: "Metaphor: the Manager / assistant. You give a goal → it sequences work.",
  },
  {
    id: "agentic-examples",
    variant: "bullets",
    title: "Agentic AI — examples",
    bullets: [
      "Coding agents (e.g. Cursor, Google Jules): plan tasks, edit files, run tests, iterate across a codebase",
      "Voice and commerce assistants moving toward “do it for me” flows that chain lookups and actions",
      "Hiring assistants (e.g. LinkedIn): orchestrate sourcing, ranking, and outreach steps",
    ],
  },
  {
    id: "contrast-prompts",
    variant: "contrast",
    title: "Same words — different depth",
    leftPrompt: "“Write a website”",
    rightPrompt: "“Build, test, and launch a website”",
  },
  {
    id: "contrast-takeaway",
    variant: "bullets",
    title: "What usually changes?",
    intro: "Typical pattern (not a law of nature):",
    bullets: [
      "Generative: one prompt → one main output you review",
      "Agentic: one goal → many steps, tool use, and checkpoints toward completion",
    ],
  },
  {
    id: "ai-coding-def",
    variant: "definition",
    title: "What is AI coding?",
    definition:
      "AI coding is building software using natural-language instructions and AI-generated or AI-assisted code — with you directing intent, structure, and quality.",
  },
  {
    id: "python-java-comparison",
    variant: "imageApps",
    title: "Python vs Java code comparison",
    imageSrc: "/images/session1-python-java-comparison.png",
    imageAlt:
      "Infographic comparing Python and Java: side-by-side DevTools-style windows showing a short Python script for name and age input versus a longer Java class with Scanner and main for the same task.",
  },
  {
    id: "vibe-coding",
    variant: "bullets",
    title: "“Vibe coding” (the useful part)",
    intro: "Students often describe it like this:",
    bullets: [
      "You focus less on memorizing syntax and more on clear intention",
      "You describe outcomes, constraints, and edge cases in plain language",
      "The AI handles much of the mechanical typing — you still review and integrate",
    ],
  },
  {
    id: "activity",
    variant: "activity",
    title: "Pair or small-group activity",
    prompt:
      "What app would you build if coding felt “free” — time and help were abundant? Be ready to share one sentence with the group: who is the user and what is the core problem?",
    durationLabel: "~2 minutes",
  },
  {
    id: "recap",
    variant: "recap",
    title: "Recap",
    bullets: [
      "AI: systems that support language, reasoning, and decision-oriented tasks",
      "Generative vs agentic: artifact from a prompt vs multi-step pursuit of a goal",
      "AI coding: you steer with language; AI accelerates implementation — verify everything",
    ],
  },
];
