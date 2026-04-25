import type { ContrastSlide } from "../slides/types";
import { SlideShell } from "../SlideShell";

type Props = { slide: ContrastSlide };

export function ContrastSlideView({ slide }: Props) {
  return (
    <SlideShell>
      <h2 className="slide-heading">{slide.title}</h2>
      <div className="slide-contrast">
        <div className="slide-contrast-card">
          <p className="slide-contrast-label">{slide.leftLabel ?? "Prompt A"}</p>
          <p className="slide-contrast-text">{slide.leftPrompt}</p>
        </div>
        <div className="slide-contrast-card slide-contrast-card--accent">
          <p className="slide-contrast-label">{slide.rightLabel ?? "Prompt B"}</p>
          <p className="slide-contrast-text">{slide.rightPrompt}</p>
        </div>
      </div>
    </SlideShell>
  );
}
