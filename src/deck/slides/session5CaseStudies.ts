import type { Slide } from "./types";

/** Session 5 — AI coding adoption, restructuring, roles, vibe coding — visual-first, short on-slide copy. */
export const session5CaseStudies: Slide[] = [
  {
    id: "s5-title",
    variant: "title",
    title: "LOMEdu",
    subtitle: "Session 5: AI coding & the workforce",
    tagline: "~12 min · Cite the primary source before reusing any number.",
  },
  {
    id: "s5-global-stats",
    variant: "stats",
    title: "Four headline metrics",
    intro: "Stack Overflow (survey) · GitHub (Copilot productivity publications)",
    stats: [
      {
        value: "84%",
        label: "use or plan to use AI in development",
        source: "Stack Overflow — Developer Survey",
        bar: 84,
      },
      {
        value: "51%",
        label: "professional devs — daily AI use",
        source: "Stack Overflow — Developer Survey",
        bar: 51,
      },
      {
        value: "18%",
        label: "weekly (not daily)",
        source: "Stack Overflow — Developer Survey",
        bar: 18,
      },
      {
        value: "55.8%",
        label: "faster on bounded tasks (Copilot studies)",
        source: "GitHub — productivity research",
        bar: 56,
      },
    ],
  },
  {
    id: "s5-layoff-stats",
    variant: "stats",
    title: "Layoffs & AI framing",
    intro: "Press / HR analytics — verify geography & definitions before citing.",
    stats: [
      {
        value: "73K+",
        label: "tech layoffs, Q1 2026 (reported)",
        source: "Nikkei Asia & desk trackers",
      },
      {
        value: "≈48%",
        label: "recent cuts tagged “AI / automation” in some datasets",
        source: "Employer filing language — not forensic causality",
        bar: 48,
      },
      {
        value: "~10%",
        label: "Meta — signalled workforce reduction",
        source: "Public statements & press — confirm %",
        bar: 10,
      },
      {
        value: "30K",
        label: "Oracle — roles cited, global",
        source: "Company announcements — read exact wording",
      },
    ],
  },
  {
    id: "s5-firms-two-col",
    variant: "twoColumn",
    title: "Two megacap signals",
    leftTitle: "Meta",
    leftItems: [
      "~10% headcount reduction signal",
      "Pivot narrative: AI-integrated operations",
    ],
    rightTitle: "Oracle",
    rightItems: [
      "~30K roles (reported)",
      "Narrative: AI infra over legacy maintenance",
    ],
  },
  {
    id: "s5-junior-lane",
    variant: "bullets",
    title: "Junior & entry lanes",
    compact: true,
    bullets: [
      "More boilerplate & demos = more noise in the shallow end of the funnel.",
      "Differentiator shifts to shipped work, reviews, and judgment — not tutorial parity.",
    ],
  },
  {
    id: "s5-chapter-roles",
    variant: "section",
    title: "AI-native roles",
    body: "Fastest-growing clusters: ship models, wire infra, audit output.",
  },
  {
    id: "s5-new-roles",
    variant: "twoColumn",
    title: "Four job families to watch",
    leftTitle: "Build & ship",
    leftItems: [
      "AI/ML engineer — RAG, LangChain-style stacks, PyTorch",
      "AI architect — models, evals, vendor stack, risk",
      "LinkedIn 2026 lists: AI/ML near top — read methodology PDF",
    ],
    rightTitle: "Operate & trust",
    rightItems: [
      "GPU / DC technician — power, cooling, hardware",
      "AI reviewer / auditor — security, bias, licensing",
    ],
  },
  {
    id: "s5-vibe-tools",
    variant: "bullets",
    title: "Non-tech professionals & “vibe coding”",
    intro:
      "The most significant trend of 2026 is the democratization of software creation.",
    bullets: [
      "The “non-tech” coder: marketing, HR, and finance professionals building internal tools with Replit Agent and Claude Code.",
      "Vibe coding: building complex applications by describing the vibe and functionality — without writing traditional syntax line-by-line.",
      "Success metric (recent study): non-tech team members built 35+ AI apps in 4 weeks; nearly half entered production without assistance from the IT department.",
      "Skill shift: the hiring baseline is moving from “coding proficiency” to “prompt literacy” and “domain judgment.”",
    ],
  },
  {
    id: "s5-nondev-webapp-promo",
    variant: "webPromo",
    title: "Creating a web app as a non-developer (AI-assisted)",
    intro:
      "Case in point: “Seoul Persona” — a Korean name, K-Pop stage name, and K-Drama character quiz you can try in under a minute. Built with Cursor by someone without a traditional developer background; use the live embed or record your own walkthrough.",
    embedUrl: "https://name-generator-five-gray.vercel.app/",
    embedTitle: "Seoul Persona — Korean name and K-Pop persona quiz",
  },
];
