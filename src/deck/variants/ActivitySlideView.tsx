import type { ActivitySlide } from "../slides/types";
import { SlideShell } from "../SlideShell";

type Props = { slide: ActivitySlide };

export function ActivitySlideView({ slide }: Props) {
  return (
    <SlideShell>
      <h2 className="slide-heading">{slide.title}</h2>
      <p className="slide-duration">{slide.durationLabel}</p>
      <p className="slide-activity-prompt">{slide.prompt}</p>
    </SlideShell>
  );
}
