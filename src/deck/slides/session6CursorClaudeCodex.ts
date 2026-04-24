import type { Slide } from "./types";

/** Session 6 — Cursor vs Claude vs Codex (~5–10 minutes; trim paired slides if time is tight). */
export const session6CursorClaudeCodex: Slide[] = [
  {
    id: "s6-title",
    variant: "title",
    title: "LOMEdu",
    subtitle: "Session 6: Cursor vs Claude vs Codex",
    tagline: "Same goal — different jobs: workspace, reasoning, and code generation — interactive, about 5–10 minutes",
  },
  {
    id: "s6-team-metaphor",
    variant: "section",
    title: "Think of building like a team",
    body: "No single button “writes your whole product.” Useful systems combine a place to work, models that understand language and code, and engines tuned to turn intent into executable structure — with you as the accountable lead.",
  },
  {
    id: "s6-three-roles",
    variant: "bullets",
    title: "Three roles — one workflow",
    intro: "Today’s shorthand (you will see these metaphors in blogs and tutorials):",
    bullets: [
      "Cursor → Workspace — where files, terminal, git, previews, and AI panels live together",
      "Claude → Brain — a large language model family strong at reasoning, long context, and careful drafting",
      "OpenAI Codex → Engine — OpenAI’s code-focused models and tooling that map instructions to runnable code",
    ],
    footer: "Names and UIs change; the separation of “where / who thinks / what executes” tends to stay useful.",
  },
  {
    id: "s6-cursor-def",
    variant: "definition",
    title: "Cursor",
    definition:
      "Cursor is an AI-powered code editor (built on a familiar VS Code–style foundation) that helps you write, edit, refactor, and navigate a real codebase using natural language alongside traditional programming.",
    callout: "Metaphor: the Workshop — benches, tools, materials, and safety rails for shipping software.",
  },
  {
    id: "s6-cursor-details",
    variant: "bullets",
    title: "Cursor — what you actually get",
    intro: "Beyond “an editor with a chat box,” students often care about these capabilities:",
    bullets: [
      "Repo-aware suggestions: the tool can read multiple files when you ask for refactors or explanations",
      "Inline and panel workflows: quick completions, scoped edits, or multi-step tasks with checkpoints",
      "Human-in-the-loop by design: proposed patches appear as diffs you accept, reject, or revise",
    ],
    footer: "Cursor does not replace fundamentals — it changes where typing happens and how fast you iterate.",
  },
  {
    id: "s6-claude-def",
    variant: "definition",
    title: "Claude",
    definition:
      "Claude is a family of large language models from Anthropic that reads and writes human-like text and code — useful for explanation, drafting, analysis, and structured reasoning over long inputs.",
    callout: "Metaphor: the Brain — pattern recognition, language, and step-by-step thinking — not a filesystem by itself.",
  },
  {
    id: "s6-claude-details",
    variant: "bullets",
    title: "Claude — where it shines",
    intro: "Typical strengths (any model has limits — always verify outputs):",
    bullets: [
      "Long documents and nuanced instructions: specs, rubrics, error logs, or lecture notes in one thread",
      "Careful rewriting: clarify tone, simplify explanations, or translate intent into a structured plan",
      "Coding as text: snippets, tests, or refactors when you supply enough context and constraints",
    ],
    footer: "Without a workspace, the “brain” cannot safely apply changes across your whole project unless another tool connects it.",
  },
  {
    id: "s6-codex-def",
    variant: "definition",
    title: "OpenAI Codex",
    definition:
      "OpenAI Codex refers to OpenAI’s code-capable models and related developer products — systems trained to translate natural language and partial programs into executable code and tool-directed actions.",
    callout: "Metaphor: the Engine — tuned torque for turning prompts and context into code-shaped output.",
  },
  {
    id: "s6-codex-details",
    variant: "bullets",
    title: "Codex — how people use it in practice",
    intro: "In courses and industry you will hear overlaps with “GPT for code.” Useful generalizations:",
    bullets: [
      "IDE integrations and agents: suggest implementations, run terminal steps, or iterate when wired to your environment",
      "APIs and cloud workflows: generate or transform code as part of a larger automated pipeline",
      "Same discipline as any model: read output, run tests, watch for hallucinated APIs or insecure patterns",
    ],
    footer: "The engine needs fuel: clear specs, examples, and tests you actually run.",
  },
  {
    id: "s6-how-they-stack",
    variant: "twoColumn",
    title: "How the pieces stack (conceptually)",
    leftTitle: "Model layer (Claude, Codex / GPT…)",
    leftItems: [
      "Turns language + context into proposed text or code",
      "Knows nothing about your disk until a host sends it context",
      "Quality depends on prompt, examples, and verification you provide",
    ],
    rightTitle: "Workspace layer (e.g. Cursor)",
    rightItems: [
      "Owns files, version control, run/debug, and project layout",
      "Orchestrates when the model sees which slices of the repo",
      "Surfaces diffs so you can review before anything becomes “truth”",
    ],
  },
  {
    id: "s6-confusion-vs-clear",
    variant: "contrast",
    title: "A common confusion — then a clearer question",
    leftPrompt: "“Which AI should I use — Cursor or Claude?”",
    rightPrompt: "“Which combination of editor + model + review habit fits this assignment?”",
  },
  {
    id: "s6-poll-brain-workspace",
    variant: "poll",
    title: "Fun question — no trap",
    questions: [
      "In one word: do you lean toward caring more about the Brain (the model) or the Workspace (the editor) right now?",
      "Who thinks one of those could fully replace the other for serious projects?",
    ],
  },
  {
    id: "s6-activity",
    variant: "activity",
    title: "20-second think–pair",
    prompt: "With a partner: name one task you would route through the Workspace (files, tests, git) and one task you would first explore in open conversation with a model before touching code.",
    durationLabel: "~1 minute",
  },
  {
    id: "s6-recap",
    variant: "recap",
    title: "Recap",
    bullets: [
      "Cursor ≈ Workspace — project home, tools, diffs, and orchestration of AI on real files",
      "Claude ≈ Brain — strong language and reasoning model family you may meet in many shells",
      "Codex ≈ Engine — OpenAI’s code-oriented models and tooling; same verification habits as any LLM",
      "Brain and Workspace together beat either alone; you remain responsible for correctness and integrity",
    ],
    footer: "Next: apply this stack to a concrete task in your environment — keep notes on what broke and what sped up.",
  },
];
