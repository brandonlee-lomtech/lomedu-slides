import type { ReactNode } from "react";
import type { Slide } from "./slides/types";

/** Extra props for specific slide variants (e.g. session 4 quiz reveal). */
export type SlideRenderContext = {
  sessionNumber: number;
  /** For session 4 `quiz` slides only: false hides the keyed answer until Space. */
  quizAnswerRevealed: boolean;
};
import { ActivitySlideView } from "./variants/ActivitySlideView";
import { BulletsSlideView } from "./variants/BulletsSlideView";
import { ContrastSlideView } from "./variants/ContrastSlideView";
import { DefinitionSlideView } from "./variants/DefinitionSlideView";
import { ImageAppsSlideView } from "./variants/ImageAppsSlideView";
import { PollSlideView } from "./variants/PollSlideView";
import { QuizSlideView } from "./variants/QuizSlideView";
import { RecapSlideView } from "./variants/RecapSlideView";
import { SectionSlideView } from "./variants/SectionSlideView";
import { TitleSlideView } from "./variants/TitleSlideView";
import { TwoColumnSlideView } from "./variants/TwoColumnSlideView";

export function renderSlide(slide: Slide, context: SlideRenderContext): ReactNode {
  switch (slide.variant) {
    case "title":
      return <TitleSlideView slide={slide} />;
    case "section":
      return <SectionSlideView slide={slide} />;
    case "definition":
      return <DefinitionSlideView slide={slide} />;
    case "bullets":
      return <BulletsSlideView slide={slide} />;
    case "twoColumn":
      return <TwoColumnSlideView slide={slide} />;
    case "imageApps":
      return <ImageAppsSlideView slide={slide} />;
    case "poll":
      return <PollSlideView slide={slide} />;
    case "quiz": {
      const answerRevealed =
        context.sessionNumber !== 4 || context.quizAnswerRevealed;
      return <QuizSlideView slide={slide} answerRevealed={answerRevealed} />;
    }
    case "contrast":
      return <ContrastSlideView slide={slide} />;
    case "activity":
      return <ActivitySlideView slide={slide} />;
    case "recap":
      return <RecapSlideView slide={slide} />;
    default: {
      const _exhaustive: never = slide;
      return _exhaustive;
    }
  }
}
