export type Slide =
  | TitleSlide
  | SectionSlide
  | DefinitionSlide
  | BulletsSlide
  | TwoColumnSlide
  | ImageAppsSlide
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
  footer?: string;
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
  prompt: string;
  /** e.g. /images/gen-vs-agentic-apps.png — if missing, placeholder shows */
  imageSrc?: string;
  imageAlt: string;
}

export interface PollSlide extends SlideBase {
  variant: "poll";
  title: string;
  questions: string[];
  bridge?: string;
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
  /** Shown in the footer after the answer is revealed */
  footer?: string;
}

export interface ContrastSlide extends SlideBase {
  variant: "contrast";
  title: string;
  leftPrompt: string;
  rightPrompt: string;
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
  footer?: string;
}
