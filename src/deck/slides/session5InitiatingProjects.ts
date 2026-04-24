import type { Slide } from "./types";

/** Session 5 — Initiating projects in corporations: alignment, pitch, planning, handoff (~20 minutes). */
export const session5InitiatingProjects: Slide[] = [
  {
    id: "s5-title",
    variant: "title",
    title: "LOMEdu",
    subtitle: "Session 5: Initiating Projects in Corporations",
    tagline:
      "Alignment, consensus, the pitch, resourcing, prioritization, and the handoff to delivery — about 20 minutes",
  },
  {
    id: "s5-hook-poll",
    variant: "poll",
    title: "Interactive opening — why do projects fail?",
    questions: [
      "Call out answers: budget overruns, wrong technology, people leaving, unclear requirements…",
      "Which of those have you seen on a school project, internship, or job?",
    ],
  },
  {
    id: "s5-hook-twist",
    variant: "contrast",
    title: "The uncomfortable reframe",
    leftPrompt: "“We failed because of budget / tech / people.”",
    rightPrompt: "“We failed because leaders, builders, and customers never agreed on what ‘success’ meant.”",
  },
  {
    id: "s5-consensus-def",
    variant: "definition",
    title: "Key concept: consensus (not unanimity)",
    definition:
      "Consensus in a corporate project means enough shared clarity and commitment that engineering, product, finance, and leadership can all act without constant re-litigation — with explicit dissent recorded, not hidden.",
    callout:
      "Alignment is an ongoing activity: documents, reviews, and tradeoffs — not a one-time vote.",
  },
  {
    id: "s5-section-pitch",
    variant: "section",
    title: "The pitch — before Jira tickets exist",
    body: "You are selling clarity: why now, how this initiative fixes the problem, and what “winning” looks like in numbers and behavior — not only features.",
  },
  {
    id: "s5-pitch-why-how",
    variant: "bullets",
    title: "The pitch — lead with “why” and “how”",
    intro:
      "Executives and partner teams are busy. They fund narratives they can repeat and defend.",
    bullets: [
      "Why: pain today — customer impact, operational drag, compliance exposure, or strategic gap (be specific; avoid generic “efficiency”)",
      "How this project fixes it: mechanism — what changes in workflow, data, policy, or product behavior (not a feature laundry list)",
      "Scope boundary: what you are not doing in v1 — prevents silent scope creep and sets up phase 2 honestly",
      "Ask: what decision do you need from this room today? (Approve / fund / sequence / pause)",
    ],
    footer: "👉 Features support the story; they should not be the opening slide.",
  },
  {
    id: "s5-roi",
    variant: "bullets",
    title: "ROI — save money, make money, or reduce risk",
    intro: "Finance and risk teams translate your story into one of three buckets (often more than one):",
    bullets: [
      "Cost takeout — fewer hours, fewer incidents, less vendor spend, lower cloud waste (tie to baseline metrics)",
      "Revenue or growth — faster release cycles, higher conversion, new SKUs enabled, expansion revenue protected",
      "Risk mitigation — audit findings closed, SLA breaches avoided, security or regulatory exposure reduced",
      "If you cannot quantify yet: say what you will measure in 30 / 60 / 90 days to prove directionally",
    ],
    footer: "Weak pitches skip the baseline; strong ones name the “before” number.",
  },
  {
    id: "s5-success-metrics",
    variant: "bullets",
    title: "Success metrics — make “done” falsifiable",
    intro: "Define metrics in the PRD or business case so sprint demos have something to score against:",
    bullets: [
      "Outcome metrics — user adoption, error rate, cycle time, revenue, support tickets (lagging but credible)",
      "Leading indicators — API latency, funnel step completion, pilot cohort engagement (move earlier)",
      "SMART shape — specific, measurable, time-bound; owner per metric (not “the team”)",
      "Guardrails — what must not get worse (security, accessibility, cost per transaction)",
    ],
    footer: "If everything is “success,” nothing is — pick a small set of north stars.",
  },
  {
    id: "s5-stakeholders",
    variant: "twoColumn",
    title: "Stakeholder review & sign-off — who must agree?",
    leftTitle: "Typical core approvers",
    leftItems: [
      "Engineering / CTO — feasibility, architecture, security, staffing, technical debt tradeoffs",
      "Product owner / PM — scope, roadmap fit, user value, acceptance criteria",
      "Finance / FP&A — budget envelope, ROI assumptions, capitalization vs expense",
      "Legal / compliance / security — when data, contracts, or regulators are in play",
    ],
    rightTitle: "What “sign off” actually means",
    rightItems: [
      "Written approval on scope, budget, and timeline band — not hallway “sounds good”",
      "Explicit list of open questions and owners — no hidden veto later",
      "Change control path — how scope or date shifts get escalated after approval",
      "Comms plan — who tells customers or internal teams, and when",
    ],
  },
  {
    id: "s5-resource-budget",
    variant: "twoColumn",
    title: "Resource & budget mapping — labour vs infrastructure",
    leftTitle: "Labour (example framing)",
    leftItems: [
      "Engineering — N engineer-months by discipline (backend, frontend, mobile, SRE)",
      "Design & research — discovery, UX, content design, design QA",
      "QA / test — manual cycles, automation, performance, accessibility",
      "PM / TPM / data — coordination, analytics, vendor integration",
      "Buffer — unknowns; corporate projects underestimate integration and policy review",
    ],
    rightTitle: "Infrastructure & third parties",
    rightItems: [
      "Cloud — compute, storage, egress, environments (dev/stage/prod), reserved vs on-demand",
      "SaaS & APIs — per-seat tools, per-call AI/ML APIs, observability, support tiers",
      "Licences & one-offs — security scans, penetration tests, legal review",
      "Ongoing run rate — who pays after launch (often a different budget line)",
    ],
  },
  {
    id: "s5-rice",
    variant: "bullets",
    title: "Roadmap integration — why this over fifty other ideas?",
    intro:
      "Portfolio teams use scoring frameworks so prioritization is explainable. RICE is one common pattern (adjust names; some orgs use ICE, WSJF, etc.):",
    bullets: [
      "Reach — how many users / transactions / teams affected in the scoring period?",
      "Impact — how much does each unit of reach move the outcome (small / medium / large / massive)?",
      "Confidence — how sure are we (research, prototypes, similar past work vs pure intuition)?",
      "Effort — person-months or T-shirt size converted to a number for comparison",
      "Score ≈ (Reach × Impact × Confidence) ÷ Effort — use it to rank, then sanity-check politics and dependencies",
    ],
    footer: "A score is input to judgment — not a substitute for leadership tradeoffs.",
  },
  {
    id: "s5-dependencies",
    variant: "bullets",
    title: "Dependency check — other teams’ work is your schedule risk",
    intro: "Before approval, surface who else must move for you to succeed:",
    bullets: [
      "Platform / identity / data — new APIs, schemas, SSO, entitlements, data residency",
      "Procurement & vendor onboarding — security questionnaires, MSAs, PO lead time",
      "Brand / marketing / support — training, docs, launch windows, incident playbooks",
      "Hard dependencies — if Team B slips two months, your “MVP” date is fiction unless scope cuts",
    ],
    footer: "Put dependencies in the PRD and the kickoff deck — not only in engineers’ heads.",
  },
  {
    id: "s5-section-execution",
    variant: "section",
    title: "Transition to implementation",
    body: "When the PRD is signed off and budget is allocated, you move from planning artifacts to delivery rhythm — without losing intent in translation.",
  },
  {
    id: "s5-handoff-backlog",
    variant: "bullets",
    title: "Breakdown — from PRD to executable backlog",
    intro: "Planning produces shared intent; execution needs bite-sized units of work:",
    bullets: [
      "Epics — large outcomes that map to PRD sections or user journeys (still too big for one sprint)",
      "User stories — “As a … I want … so that …” with acceptance criteria testers can verify",
      "Tasks / spikes — technical investigations with time boxes when uncertainty is high",
      "Tooling — Jira, Linear, Azure DevOps, etc. — pick one source of truth; link docs to tickets",
    ],
    footer: "Traceability: each epic should link back to a PRD requirement or metric.",
  },
  {
    id: "s5-kickoff",
    variant: "bullets",
    title: "The kickoff — protect the “why”",
    intro: "Meet with the people who will actually build, test, and operate the system:",
    bullets: [
      "Walk the PRD — problem statement, non-goals, metrics, architecture sketch, risks",
      "Clarify decision rights — who can accept scope tradeoffs mid-flight?",
      "Agree working agreements — ceremonies, code review bar, definition of done, release cadence",
      "Surface dumb questions early — cheaper than discovering misunderstanding in UAT",
    ],
    footer: "👉 Intent travels in conversation + docs — not only in ticket titles.",
  },
  {
    id: "s5-sprints-feedback",
    variant: "bullets",
    title: "Feedback loop — sprints, reviews, and honest progress",
    intro: "Most product teams ship in short cycles (often two weeks) so feedback stays cheap:",
    bullets: [
      "Sprint planning — team pulls prioritized stories until capacity is full; clarify acceptance tests",
      "Daily sync (when useful) — unblockers, not status theatre",
      "Sprint review / demo — show working software to stakeholders; gather feedback on behavior, not slides",
      "Retro — what to start / stop / continue — psychological safety matters",
      "Re-ground on PRD success metrics — which moved, which are flat, what evidence do we need next sprint?",
    ],
    footer: "Demos that never reference metrics drift into feature factories.",
  },
  {
    id: "s5-recap",
    variant: "recap",
    title: "Recap",
    bullets: [
      "Symptoms (budget / tech / people) often trace back to misalignment — fix with consensus and clear docs",
      "Pitch with why + mechanism + ROI; define falsifiable success metrics and real sign-off",
      "Map labour + infra; score against other work (e.g. RICE); expose dependencies early",
      "After approval: decompose PRD → backlog, kick off with builders, sprint with demos tied to metrics",
    ],
    footer: "Next: apply this lens to a project you know — what would you fix first?",
  },
];
