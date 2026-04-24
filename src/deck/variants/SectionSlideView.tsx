import type { SectionSlide } from "../slides/types";
import { SlideShell } from "../SlideShell";

type Props = { slide: SectionSlide };

export function SectionSlideView({ slide }: Props) {
  return (
    <SlideShell>
      <h2 className="slide-heading">{slide.title}</h2>
      <p className="slide-body">{slide.body}</p>
    </SlideShell>
  );
}
