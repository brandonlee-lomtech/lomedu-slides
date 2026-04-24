import type { Slide } from "./types";

/** Session 3 — Fundamentals of Programming: how pieces connect (~20 minutes). */
export const session3ProgrammingFundamentals: Slide[] = [
  {
    id: "s3-title",
    variant: "title",
    title: "LOMEdu",
    subtitle: "Session 3: Fundamentals of Programming",
    tagline:
      "Servers, databases, deployment, and GitHub — one mental model so AI-generated code still makes sense — about 20 minutes",
  },
  {
    id: "s3-setup",
    variant: "bullets",
    title: "Even if AI helps…",
    intro:
      "Tools can draft code, explain errors, and scaffold projects. That only stays safe when you understand how the pieces connect.",
    bullets: [
      "AI is strong at local edits and patterns — weaker at your exact runtime, data, and permissions",
      "When something breaks in production, you trace a path: browser → network → server → database → back",
      "Today we build one shared picture so every later lab has somewhere to “snap in”",
    ],
    footer: "👉 You still need to understand HOW things connect.",
  },
  {
    id: "s3-restaurant-hook",
    variant: "poll",
    title: "Restaurant analogy — warm-up",
    questions: [
      "Who here likes food? (Show of hands — bonus points if you can name a comfort dish.)",
      "Have you ever wondered what happens between “I ordered” and “food arrives”?",
    ],
  },
  {
    id: "s3-restaurant-map",
    variant: "twoColumn",
    title: "One restaurant, four roles you will hear all year",
    leftTitle: "Front of house (what users feel)",
    leftItems: [
      "Dining room = the website or app in the browser / on the phone",
      "Menu and orders = buttons, forms, and API requests",
      "“Is my order ready?” = loading states, errors, success messages",
    ],
    rightTitle: "Back of house (what builders maintain)",
    rightItems: [
      "Kitchen = server — rules, calculations, permission checks",
      "Pantry = database — durable facts you can query later",
      "Recipe binder + history = GitHub — how the kitchen instructions evolve safely",
    ],
  },
  {
    id: "s3-section-server",
    variant: "section",
    title: "Server",
    body: "A server is where business logic runs: it receives requests, applies rules, talks to other services, and returns responses.",
  },
  {
    id: "s3-server-def",
    variant: "definition",
    title: "Server — reliable definition",
    definition:
      "A server is a system that processes requests, runs logic, and delivers responses to users (or to other programs acting on their behalf).",
    callout: "🎨 Visual aid: Kitchen — where the work happens.",
  },
  {
    id: "s3-server-deeper",
    variant: "bullets",
    title: "Server — what actually happens in one round trip?",
    intro: "Typical web request (simplified):",
    bullets: [
      "Client sends an HTTP request — URL, method (GET/POST/…), headers, sometimes a JSON body",
      "Server authenticates / authorizes — “who is this?” and “are they allowed?”",
      "Server runs your code path — validation, business rules, calls to database or other APIs",
      "Server responds — status code, JSON or HTML, cookies or tokens for the next visit",
    ],
    footer: "If the kitchen is closed, every dish fails — same idea when the server is down.",
  },
  {
    id: "s3-section-db",
    variant: "section",
    title: "Database",
    body: "A database is structured storage: fast lookups, constraints so data stays consistent, and a query language instead of ad-hoc files everywhere.",
  },
  {
    id: "s3-db-def",
    variant: "definition",
    title: "Database — reliable definition",
    definition:
      "A database is a system that stores, organizes, and retrieves data efficiently, usually with rules that keep records consistent over time.",
    callout: "🎨 Visual aid: Pantry — labeled shelves, inventory counts, expiry dates. Example stack: Supabase.",
  },
  {
    id: "s3-db-deeper",
    variant: "bullets",
    title: "Database — why not only “files on disk”?",
    intro: "Learners sometimes ask: “Couldn’t we just save JSON files?” You could — until:",
    bullets: [
      "Many users write at once — you need transactions so two orders do not corrupt the same row",
      "You need fast filters — “all orders since Tuesday for user X” should not scan the whole drive",
      "You need integrity — foreign keys, unique emails, non-null prices",
    ],
    footer: "Empty pantry ≠ broken kitchen — but the menu better handle “out of stock” gracefully.",
  },
  {
    id: "s3-section-deploy",
    variant: "section",
    title: "Deployment",
    body: "Deployment is how you publish a running version of your app so people on the internet can reach it — not only when it lives on your laptop.",
  },
  {
    id: "s3-deploy-def",
    variant: "definition",
    title: "Deployment — reliable definition",
    definition:
      "Deployment is the process of making an application available on the internet (or on a private network) so users can access a stable, versioned build.",
    callout: "🎨 Visual aid: Opening night for the restaurant — signage, hours, and a front door URL. Tool example: Vercel.",
  },
  {
    id: "s3-deploy-deeper",
    variant: "bullets",
    title: "Deployment — what moves when you ship?",
    intro: "At a high level, a deploy usually bundles:",
    bullets: [
      "Built assets — optimized HTML, JS, CSS, images",
      "Configuration — environment variables (API keys, database URLs) injected safely, not pasted into source",
      "Routing and HTTPS — a public hostname, TLS certificates, redirects",
      "Optional serverless or API routes — the “kitchen” endpoints that run on the host’s infrastructure",
    ],
    footer: "Bad deploy symptom: old UI, new API, or missing env var — we debug that by tracing versions.",
  },
  {
    id: "s3-section-github",
    variant: "section",
    title: "GitHub",
    body: "GitHub hosts Git repositories: every saved change has context, history, and a path to review before it becomes the “official” version.",
  },
  {
    id: "s3-github-def",
    variant: "definition",
    title: "GitHub — reliable definition",
    definition:
      "GitHub is a platform for storing code, tracking changes, and collaborating on software projects using version control (Git).",
    callout: "🎨 Visual aid: Recipe book with dated revisions — who changed what, when, and why.",
  },
  {
    id: "s3-github-deeper",
    variant: "bullets",
    title: "GitHub — why it matters in an AI-heavy workflow",
    intro: "When AI edits many files quickly, Git history becomes your safety net:",
    bullets: [
      "Diffs show exactly what changed line-by-line — read them like proofreading a co-author",
      "Branches let you experiment without risking the class’s main copy",
      "CI (optional) can run tests on every push — automated “taste tests” before merge",
    ],
    footer: "GitHub does not replace testing or design — it organizes how humans agree on truth.",
  },
  {
    id: "s3-full-picture",
    variant: "twoColumn",
    title: "Putting it together — one happy path",
    leftTitle: "Builder workflow (simplified)",
    leftItems: [
      "Write / generate code locally — iterate with AI, run dev server",
      "Commit and push to GitHub — snapshot with message",
      "Deploy from repo or CI — Vercel (or similar) builds and publishes",
    ],
    rightTitle: "User workflow (simplified)",
    rightItems: [
      "Open deployed site — HTTPS URL",
      "App calls your server / serverless routes — kitchen work",
      "Server reads or writes Supabase — pantry queries",
      "Response renders UI — plates leave the pass",
    ],
  },
  {
    id: "s3-interactive-poll",
    variant: "poll",
    title: "Interactive check — predict the failure",
    questions: [
      "If the database is empty (no rows yet)… what should users see? What could go wrong if the UI assumes data always exists?",
      "If the server stops (crashes, wrong deploy, or outage)… what breaks first from the diner’s point of view?",
    ],
  },
  {
    id: "s3-interactive",
    variant: "activity",
    title: "60-second think–pair–share",
    prompt:
      "With a partner: pick one layer (server, database, deploy, GitHub) and describe a realistic bug or change that only touches that layer.",
    durationLabel: "~2 minutes",
  },
  {
    id: "s3-recap",
    variant: "recap",
    title: "Recap",
    bullets: [
      "Server: request in, rules + integrations, response out — the kitchen",
      "Database: durable, queryable, consistent data — the pantry (e.g. Supabase)",
      "Deployment: published build users can reach — opening night (e.g. Vercel)",
      "GitHub: versioned collaboration on source — the recipe book with history",
    ],
    footer: "Next: we apply this map while building — when in doubt, trace the request path.",
  },
];
