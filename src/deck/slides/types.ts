export type Slide =
  | TitleSlide
  | SectionSlide
  | DefinitionSlide
  | BulletsSlide
  | TwoColumnSlide
  | ImageAppsSlide
  | WebPromoSlide
  | StatsSlide
  | PollSlide
  | QuizSlide
  | ContrastSlide
  | ActivitySlide
  | RecapSlide;

export interface SlideBase {
  id: string;
}

export interface TitleSlide extends SlideBase {
  variant: "title";
  title: string;
  subtitle?: string;
  tagline?: string;
}

export interface SectionSlide extends SlideBase {
  variant: "section";
  title: string;
  body: string;
}

export interface DefinitionSlide extends SlideBase {
  variant: "definition";
  title: string;
  definition: string;
  callout?: string;
}

export interface BulletsSlide extends SlideBase {
  variant: "bullets";
  title: string;
  intro?: string;
  bullets: string[];
  /** Tighter spacing and slightly smaller gaps — use for scannable one-liners. */
  compact?: boolean;
}

export interface TwoColumnSlide extends SlideBase {
  variant: "twoColumn";
  title: string;
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
}

export interface ImageAppsSlide extends SlideBase {
  variant: "imageApps";
  title: string;
  /** Optional facilitator line above the image; omit for title + image only. */
  prompt?: string;
  /** e.g. /images/gen-vs-agentic-apps.png — if missing, placeholder shows */
  imageSrc?: string;
  imageAlt: string;
}

/** Live site embed + optional local promo video (MP4/WebM under `public/`). */
export interface WebPromoSlide extends SlideBase {
  variant: "webPromo";
  title: string;
  intro?: string;
  /** Shown in an iframe (may be empty if the host sets X-Frame-Options). */
  embedUrl: string;
  /** Optional screen recording, e.g. `/videos/session5-seoul-persona-promo.mp4`. */
  videoSrc?: string;
  /** Accessible label for the embed region. */
  embedTitle: string;
}

/** Big-number cards with optional meter bars; cite sources on each card. */
export interface StatsSlideStat {
  value: string;
  label: string;
  detail?: string;
  source: string;
  /** 0–100 width for decorative meter (optional). */
  bar?: number;
}

export interface StatsSlide extends SlideBase {
  variant: "stats";
  title: string;
  intro?: string;
  stats: StatsSlideStat[];
}

export interface PollSlide extends SlideBase {
  variant: "poll";
  title: string;
  questions: string[];
}

export type QuizCorrectLetter = "A" | "B" | "C" | "D";

export interface QuizSlide extends SlideBase {
  variant: "quiz";
  /** Shown as the main heading, e.g. "Question 1" */
  title: string;
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctLetter: QuizCorrectLetter;
}

export interface ContrastSlide extends SlideBase {
  variant: "contrast";
  title: string;
  leftPrompt: string;
  rightPrompt: string;
  /** Short column headers (defaults to neutral labels in the view). */
  leftLabel?: string;
  rightLabel?: string;
}

export interface ActivitySlide extends SlideBase {
  variant: "activity";
  title: string;
  prompt: string;
  durationLabel: string;
}

export interface RecapSlide extends SlideBase {
  variant: "recap";
  title: string;
  bullets: string[];
}
