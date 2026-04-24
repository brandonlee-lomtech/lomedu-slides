import type { TitleSlide } from "../slides/types";
import { SlideShell } from "../SlideShell";

type Props = { slide: TitleSlide };

export function TitleSlideView({ slide }: Props) {
  return (
    <SlideShell>
      <p className="slide-kicker">LOmedu · Student deck</p>
      <h1 className="slide-title">{slide.title}</h1>
      {slide.subtitle ? <h2 className="slide-subtitle">{slide.subtitle}</h2> : null}
      {slide.tagline ? <p className="slide-tagline">{slide.tagline}</p> : null}
    </SlideShell>
  );
}
