import type { DefinitionSlide } from "../slides/types";
import { SlideShell } from "../SlideShell";

type Props = { slide: DefinitionSlide };

export function DefinitionSlideView({ slide }: Props) {
  return (
    <SlideShell>
      <h2 className="slide-heading">{slide.title}</h2>
      <blockquote className="slide-definition">{slide.definition}</blockquote>
      {slide.callout ? <p className="slide-callout">{slide.callout}</p> : null}
    </SlideShell>
  );
}
