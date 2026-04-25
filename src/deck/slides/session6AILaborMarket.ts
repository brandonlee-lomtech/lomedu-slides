import type { Slide } from "./types";

/**
 * Session 6 — AI-assisted coding in numbers: adoption, official vendor telemetry where published,
 * and labour-market evidence from international organisations and national statistics.
 * Every on-slide statistic is tied to a named primary document (survey report, OECD/ILO paper, BLS release, GitHub editorial data story).
 */
export const session6AILaborMarket: Slide[] = [
  {
    id: "s6-title",
    variant: "title",
    title: "LOMEdu",
    subtitle: "Session 6: Who uses AI coding tools — and what trusted sources say about jobs",
    tagline:
      "Presentation track: Stack Overflow’s annual developer survey, GitHub’s Octoverse data story, OECD & ILO labour-market analysis, and U.S. BLS payroll statistics — about 18–22 minutes",
  },
  {
    id: "s6-sources-rule",
    variant: "section",
    title: "Ground rules for evidence in this session",
    body: "We cite primary publications: the survey instrument and results pages for Stack Overflow; GitHub’s Octoverse narrative backed by its stated sample window; peer-reviewed-style OECD Artificial Intelligence Papers and ILO working papers / WESO updates; and official statistical releases (U.S. BLS CES). Social posts, vendor tweets, and unattributed infographics do not count as sources here.",
  },
  {
    id: "s6-so-adoption",
    variant: "stats",
    title: "Developers and AI tools — Stack Overflow Developer Survey 2024",
    intro:
      "Stack Overflow publishes methodology, question text, and breakdowns at survey.stackoverflow.co. Figures below are taken from the public AI results page and companion analysis, not from third-party summaries alone.",
    stats: [
      {
        value: "62%",
        label: "respondents who say they are currently using AI tools in development",
        detail: "Up from 44% in the prior year’s survey wave — Stack Overflow reports both figures on the 2024 AI results page.",
        source: "Stack Overflow — 2024 Developer Survey, “AI” results (survey.stackoverflow.co/2024/ai/)",
        bar: 62,
      },
      {
        value: "76%",
        label: "currently using or planning to use AI tools this year",
        detail: "Stack Overflow’s headline adoption band for the full respondent pool in 2024.",
        source: "Same Stack Overflow 2024 AI results page",
        bar: 76,
      },
      {
        value: "~82–85%",
        label: "current users who lean on AI tools for writing code",
        detail: "Stack Overflow’s deeper AI/ML insights note ~85% of professional developers and ~77% of those learning to code report writing-code use — ranges depend on population slice.",
        source: "Stack Overflow Labs — “2024 Developer Survey Insights for AI/ML” (stackoverflow.co/labs/2024-developer-survey-insights-for-ai-ml)",
        bar: 84,
      },
      {
        value: "70%",
        label: "professional developers who do not see AI as a threat to their job",
        detail: "From Stack Overflow’s January 2025 synthesis of the 2024 survey — still interpret alongside trust and complexity questions on the same wave.",
        source: "Stack Overflow Blog — “Developers want more, more, more…” (1 Jan 2025)",
        bar: 70,
      },
    ],
  },
  {
    id: "s6-so-tools",
    variant: "bullets",
    title: "Which AI tools show up in the same survey evidence base?",
    intro:
      "Stack Overflow’s “admired vs desired” tables are preference metrics among respondents, not market share of revenue. They are still useful for classroom discussion because the methodology is transparent.",
    bullets: [
      "ChatGPT is the most widely used AI search/tool in the 2024 survey tables, with a large majority of users saying they want to keep using it next year — see the main 2024 results narrative.",
      "GitHub Copilot appears alongside other assistants in the same tables; many ChatGPT users report interest in also trying Copilot in the next year — again, self-reported intention, not billing data.",
      "Interpretation drill: distinguish “most used in this sample” from “official subscriber counts” — vendors publish the latter in annual reports or product blogs with different coverage.",
    ],
  },
  {
    id: "s6-github-official",
    variant: "stats",
    title: "GitHub’s own public data stories (Octoverse + product announcements)",
    intro:
      "Octoverse 2024 states it draws on anonymised GitHub product usage from 1 Oct 2023 through 30 Sep 2024. The 150M developer milestone is announced separately on GitHub’s product news blog — treat each claim with the footnote GitHub attaches.",
    stats: [
      {
        value: "150M+",
        label: "developer accounts on GitHub (milestone announced with Copilot Free)",
        detail: "GitHub’s December 2024 product news post ties the milestone to global accounts, not to daily active use.",
        source: "GitHub Blog — “Announcing 150M developers and a new free tier for GitHub Copilot in VS Code” (Dec 2024)",
        bar: 100,
      },
      {
        value: "7M+",
        label: "verified participants in GitHub Education (lifetime programme scale)",
        detail: "Reported in Octoverse 2024 as context for student and classroom adoption of GitHub tooling.",
        source: "GitHub Blog — “Octoverse: AI leads Python to top language…” (2024 Octoverse)",
        bar: 70,
      },
      {
        value: "100% YoY",
        label: "growth in students, teachers, and open source maintainers using complimentary Copilot access",
        detail: "GitHub’s wording in Octoverse 2024 — relative growth on a complimentary programme base; read the original paragraph before extrapolating to paid seats.",
        source: "Same Octoverse 2024 article",
        bar: 100,
      },
      {
        value: "450k+",
        label: "GitHub Education users who were first-time contributors in the year referenced by Octoverse",
        detail: "Octoverse 2024 positions this as evidence that AI-enabled tooling coincides with broader onboarding to collaborative development — correlation, not a controlled experiment.",
        source: "Same Octoverse 2024 article",
        bar: 45,
      },
    ],
  },
  {
    id: "s6-docs-not-hype",
    variant: "definition",
    title: "“Official documentation” for tools — what lecturers should assign students to read",
    definition:
      "Vendor documentation pages describe capabilities, limits, data handling, and IDE integration — they are the right place to verify product behaviour. Adoption statistics, by contrast, live in survey reports (Stack Overflow), platform data stories (Octoverse), regulatory filings, or independent research — never confuse marketing hero numbers with API reference accuracy.",
    callout: "Assignment idea: pick one tool and pair its docs index with one primary statistical source from this session.",
  },
  {
    id: "s6-oecd-workplace",
    variant: "stats",
    title: "OECD — “Using AI in the Workplace” (Artificial Intelligence Paper No. 11, March 2024)",
    intro:
      "OECD synthesises employer/employee surveys and economic evidence. The headline percentages below are worker-reported attitudes and modelled automation-risk shares, not counts of layoffs.",
    stats: [
      {
        value: "3 in 5",
        label: "workers in surveyed countries who worry about losing their job to AI within ten years",
        detail: "OECD AI policy survey evidence summarised in the March 2024 workplace AI paper — exact country coverage is in the PDF annex.",
        source: "OECD — Using AI in the Workplace (doi.org/10.1787/73d417f9-en)",
        bar: 60,
      },
      {
        value: "2 in 5",
        label: "workers who expect AI to reduce wages in their sector",
        detail: "Same OECD paper — attitudinal, forward-looking expectation rather than realised wage path.",
        source: "Same OECD publication",
        bar: 40,
      },
      {
        value: "~27%",
        label: "share of employment in occupations OECD classifies at the highest automation-risk band",
        detail: "OECD stresses automation risk is not the same as observed displacement; the paper notes limited evidence so far of net job loss from AI at the aggregate level while calling for active transition policy.",
        source: "Same OECD publication",
        bar: 27,
      },
    ],
  },
  {
    id: "s6-ilo-exposure",
    variant: "twoColumn",
    title: "ILO evidence — exposure, augmentation, and who is named as high-skill",
    leftTitle: "ILO Working Paper 96 (2023) — global GPT-style exposure model",
    leftItems: [
      "Clerical occupations concentrate the highest task-level exposure in the paper’s GPT-4 scoring exercise (24% of clerical tasks scored highly exposed; a further 58% medium).",
      "Automation potential from generative models is estimated at up to about 5.5% of employment in high-income countries versus about 0.4% in low-income countries — driven by occupational structure, not destiny.",
      "Augmentation (AI reshaping tasks while jobs persist) is estimated to matter for roughly 10–13% of employment depending on country income group — larger than the automation-only band in their framing.",
    ],
    rightTitle: "ILO WESO update (May 2025) — refined GenAI exposure index",
    rightItems: [
      "About 23.8% of global employment sits in occupations with medium or high generative-AI exposure (16.3% medium; 7.5% high) under the refined index described in the update.",
      "High-skill occupations still contain most minimally exposed jobs, but also the largest high-exposure tail — software developers and accountants are named as examples in the narrative.",
      "ILO repeats that exposure scores are potential, not forecasts of realised job loss — infrastructure, cost, and governance friction matter on the ground.",
    ],
  },
  {
    id: "s6-ilo-primary-docs",
    variant: "bullets",
    title: "ILO — primary documents (bookmark these for essays)",
    bullets: [
      "https://www.ilo.org/publications/generative-ai-and-jobs-global-analysis-potential-effects-job-quantity",
      "https://www.ilo.org/sites/default/files/2025-05/WESOUpdate_May2025_1.pdf",
    ],
  },
  {
    id: "s6-bls-information",
    variant: "bullets",
    title: "Official payroll statistics — U.S. “Information” sector employment (BLS CES)",
    intro:
      "The U.S. Bureau of Labor Statistics publishes monthly establishment counts. The “Information” supersector is broader than “software layoffs” headlines, but it is an internationally respected official series for tracking publishing, telecom, data, and motion-picture employment together.",
    bullets: [
      "December 2024 CES highlights state that U.S. Information payroll employment changed little over 2024 (‑8,000 seasonally adjusted over the year) after a larger net decline of ‑83,000 in 2023.",
      "BLS emphasises month-to-month volatility is normal — always read the full release footnotes before linking any single corporate announcement to the national series.",
      "Classroom takeaway: headline “tech layoff trackers” are not the same measurement concept as BLS industry employment — compare definitions before debating causality with AI capex.",
    ],
  },
  {
    id: "s6-new-roles",
    variant: "bullets",
    title: "Where international organisations discuss new and changing roles",
    intro:
      "None of the bodies above publishes a tidy table titled “brand-new AI job titles.” Instead, they describe occupational transformation, policy gaps, and skill demand — which is what serious labour-market analysis still looks like in 2024–2025.",
    bullets: [
      "OECD’s October 2024 paper “Who will be the workers most affected by AI?” highlights that generative AI reaches non-routine cognitive tasks — expanding disruption risk into tertiary-educated “white-collar” roles (including ICT professionals and managers) while stressing empirical employment impacts have been heterogeneous, not a single downward shock.",
      "The OECD’s Job Creation and Local Economic Development 2024 volume discusses generative AI alongside regional productivity and shortages — useful for “new work in places” arguments rather than Silicon Valley headline counts.",
      "ILO’s May 2025 WESO update explicitly links GenAI exposure statistics to the need for social dialogue and redeployment — the policy object is transitioning tasks inside occupations, not only hiring a thin AI-research elite.",
    ],
  },
  {
    id: "s6-non-tech",
    variant: "bullets",
    title: "Non-specialists entering coding workflows — what the same sources already imply",
    intro:
      "Evidence is indirect but reputable: education-scale programmes, survey responses from “learning to code” cohorts, and OECD’s workplace-access equity themes.",
    bullets: [
      "GitHub Education’s verified participant count and the Octoverse 2024 first-time contributor statistic show large populations outside traditional CS departments touching Git-backed workflows — a structural widening of the funnel.",
      "Stack Overflow’s 2024 AI/ML insights slice shows people learning to code report very high rates of using or planning to use AI tools (about 83% in their published table) — compare with professional slices in the same PDF.",
      "OECD’s workplace AI paper warns that workers without access to trustworthy AI tools miss productivity gains — the inequality story is as important as “more people prompting Copilot.”",
    ],
  },
  {
    id: "s6-recap",
    variant: "recap",
    title: "Session 6 recap — keep the measurement labels straight",
    bullets: [
      "Survey adoption (Stack Overflow) measures self-reported developer behaviour with a published methodology — great for trends, not for revenue.",
      "Platform telemetry stories (GitHub Octoverse) describe GitHub’s own universe with explicit sample windows — cite those windows in essays.",
      "OECD and ILO quantify exposure, attitudes, and inequality risk — they do not replace firm-level layoff announcements with a single magic number.",
      "National statistical offices (example: U.S. BLS CES) anchor macro employment; compare industry definitions before you blame AI alone for any one month’s move.",
    ],
  },
];
