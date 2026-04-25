import type { Slide } from "./types";

/** Session 3 — Four backstage parts of every app; plain language, accurate meanings (~20 minutes). */
export const session3ProgrammingFundamentals: Slide[] = [
  {
    id: "s3-title",
    variant: "title",
    title: "LOMEdu",
    subtitle: "Session 3: The four backstage parts of every app",
    tagline:
      "No coding required — just a clear picture so bugs, meetings, and AI make sense. About 20 minutes.",
  },
  {
    id: "s3-start-here",
    variant: "bullets",
    title: "Start here",
    intro:
      "When you use an app, you see the screen. Behind it, other computers store facts, apply rules, and send answers back. Today we name those parts so nothing sounds like magic.",
    bullets: [
      "You will not learn to program — you will learn what people mean when they say server, database, deploy, or GitHub",
      "Same ideas power a food app, a bank, or a school portal — only the details change",
      "If you use AI to build things, this picture helps you ask better questions and spot risky answers",
    ],
  },
  {
    id: "s3-restaurant-hook",
    variant: "poll",
    title: "One picture for the whole year",
    questions: [
      "Think of your favorite app that takes orders or bookings. You tap a button — then what has to happen before the next screen appears?",
    ],
  },
  {
    id: "s3-restaurant-map",
    variant: "twoColumn",
    title: "A restaurant is a good memory hook",
    leftTitle: "What you see (front)",
    leftItems: [
      "Tables and menus = the app or website on your phone",
      "You order = you tap; the screen sends that order outward",
      "Plates arriving = new screen, message, or receipt",
    ],
    rightTitle: "What you do not see (back)",
    rightItems: [
      "Kitchen cooks the order = a server: it reads the request, checks rules, does the work",
      "Labeled shelves with ingredients = a database: stored facts, looked up and updated carefully",
      "Opening night + recipe binder = deploy (guests can visit) and GitHub (how recipes change with history)",
    ],
  },
  {
    id: "s3-four-labels",
    variant: "bullets",
    title: "Four words — true meanings in one glance",
    intro: "Each line is the same idea twice: everyday words, then the word you will hear at work.",
    bullets: [
      "Kitchen work = server — answers requests; checks “allowed?”; runs rules and math",
      "Stored facts = database — the system of record; many users, one organized set of data",
      "Go live = deploy — the version on the internet at a real link, not only on one laptop",
      "History of the product’s instructions = GitHub (with Git) — every change saved, reviewable, undoable",
    ],
  },
  {
    id: "s3-section-server",
    variant: "section",
    title: "Server",
    body: "Computers (often in a data center) that wait for requests, run logic, and send responses back.",
  },
  {
    id: "s3-server-def",
    variant: "definition",
    title: "Server",
    definition:
      "A server is software (running on a computer) that receives a request, runs the right steps—checks, rules, talking to other systems—and sends back a response.",
    callout: "🎨 Memory hook: the kitchen. The dining room is your app; the kitchen does the real work.",
  },
  {
    id: "s3-server-deeper",
    variant: "bullets",
    title: "Server — what happens in one tap?",
    intro: "Example: you confirm a booking.",
    bullets: [
      "Your app sends a small message: who you are, what you want, and proof you are logged in",
      "The server checks rules: still available? right price? allowed for this account?",
      "It answers with a clear result—yes, no, or “try again”—and the app shows the next screen",
    ],
  },
  {
    id: "s3-section-db",
    variant: "section",
    title: "Database",
    body: "Organized storage built for many readers and writers at once, with rules so data stays trustworthy.",
  },
  {
    id: "s3-db-def",
    variant: "definition",
    title: "Database",
    definition:
      "A database stores records in a structured way, finds them quickly, and enforces rules so the same fact is not contradicted by accident.",
    callout: "🎨 Memory hook: the pantry with labels. Example you may hear: Supabase.",
  },
  {
    id: "s3-db-deeper",
    variant: "bullets",
    title: "Database — why not only Excel on someone’s laptop?",
    intro: "Spreadsheets are fine until the product grows. Then teams need a database because:",
    bullets: [
      "Many people hit Save at the same time — the system must not corrupt one row with another",
      "You need fast answers like “all orders last week in this city” without opening fifty files",
      "You need rules: one login per email, no blank prices, every order tied to a real customer",
    ],
  },
  {
    id: "s3-section-deploy",
    variant: "section",
    title: "Deployment",
    body: "Putting the built app on the network so users open a real URL—not the private copy on a builder’s machine.",
  },
  {
    id: "s3-deploy-def",
    variant: "definition",
    title: "Deployment",
    definition:
      "Deployment publishes a chosen build of the application so it is reachable at an address on the internet (or a private network), usually over HTTPS.",
    callout: "🎨 Memory hook: opening night. Example host you may hear: Vercel.",
  },
  {
    id: "s3-deploy-deeper",
    variant: "bullets",
    title: "Deployment — what actually goes live?",
    intro: "Roughly three bundles of work:",
    bullets: [
      "The guest-facing pieces — pages, images, scripts — optimized for speed",
      "Safe settings for that environment — keys and database addresses supplied by the host, not pasted into source code",
      "A public name and secure connection — your site address, HTTPS, redirects if links change",
    ],
  },
  {
    id: "s3-contrast-symptom",
    variant: "contrast",
    title: "“It’s broken” can mean different things",
    leftLabel: "What it feels like",
    rightLabel: "What the team checks",
    leftPrompt: "Spinner forever, cannot pay, blank screen — the app feels useless.",
    rightPrompt:
      "They split the problem: phone or Wi‑Fi? deploy mistake? server crash? database empty or wrong query? Same feeling, different fix.",
  },
  {
    id: "s3-section-github",
    variant: "section",
    title: "GitHub",
    body: "A website (and tools) for storing project files and every change to them—team-visible history, not one mystery file.",
  },
  {
    id: "s3-github-def",
    variant: "definition",
    title: "GitHub",
    definition:
      "GitHub hosts Git repositories: it stores code and related files, records each change with author and message, and supports review before those changes become the shared official version.",
    callout: "🎨 Memory hook: recipe binder with dates — not “final_v2_really_final.”",
  },
  {
    id: "s3-github-deeper",
    variant: "bullets",
    title: "GitHub — why history matters",
    intro: "Especially when AI edits lots of files at once:",
    bullets: [
      "You can see exactly what changed, line by line — like Track Changes in a document",
      "You can try ideas in a side copy without breaking the main class or product version",
      "Teams often add automatic checks before accepting a change — quick safety pass",
    ],
  },
  {
    id: "s3-meeting-phrases",
    variant: "bullets",
    title: "Phrases you might hear — simple translations",
    intro: "Now that you know the four parts, these map cleanly:",
    bullets: [
      "“The API is down” → the part that should answer the app’s request is not responding (usually server or path to it)",
      "“Bad migration” → a planned change to how data is stored went wrong; the database layout and the data do not match",
      "“Works on my machine” → it ran on one developer’s laptop but the deployed environment is missing a setting or version",
      "“Open a PR” → put your proposed file changes in GitHub for review before they merge into the official branch",
    ],
    compact: true,
  },
  {
    id: "s3-quiz-layer",
    variant: "quiz",
    title: "Quick check",
    question:
      "You log in and the app looks fine, but your old orders never appear. Where do teams usually look first?",
    optionA: "Only the colors and fonts on the screen",
    optionB: "The database (stored rows) or the server logic that loads them",
    optionC: "The user’s phone wallpaper",
    optionD: "The projector in this room",
    correctLetter: "B",
  },
  {
    id: "s3-full-picture",
    variant: "twoColumn",
    title: "One simple loop",
    leftTitle: "How builders ship",
    leftItems: [
      "Change the project on a computer you control",
      "Save history to GitHub so others can review",
      "Deploy so the world gets that version at a public link",
    ],
    rightTitle: "How a visitor uses it",
    rightItems: [
      "Open the link — the app loads from the deployed build",
      "The app asks the server questions; the server may read or write the database",
      "The answer comes back; the screen updates — that is the loop",
    ],
  },
  {
    id: "s3-interactive-poll",
    variant: "poll",
    title: "One scenario",
    questions: [
      "Checkout always says “try again later” but the home page looks perfect. Is the problem more likely in the database, the deploy, or “we cannot tell yet from the home page alone”? Why?",
    ],
  },
  {
    id: "s3-interactive",
    variant: "activity",
    title: "Try this with a partner",
    prompt:
      "Pick any app you both use. Name one thing that could go wrong in only the server, only the database, only deploy, or only GitHub. Keep each example to one sentence.",
    durationLabel: "~2 minutes",
  },
  {
    id: "s3-recap",
    variant: "recap",
    title: "Recap",
    bullets: [
      "Server: receives requests, applies rules, returns answers — the kitchen",
      "Database: organized, shared, rule-backed storage — the pantry (e.g. Supabase)",
      "Deploy: the live build at a real URL — opening night (e.g. Vercel)",
      "GitHub: saved, reviewable history of the project files — the recipe binder (Git)",
    ],
  },
];
