import type { BulletsSlide } from "../slides/types";
import { SlideShell } from "../SlideShell";

type Props = { slide: BulletsSlide };

export function BulletsSlideView({ slide }: Props) {
  return (
    <SlideShell footer={slide.footer ? <p className="slide-footnote">{slide.footer}</p> : undefined}>
      <h2 className="slide-heading">{slide.title}</h2>
      {slide.intro ? <p className="slide-intro">{slide.intro}</p> : null}
      <ul className="slide-bullets">
        {slide.bullets.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </SlideShell>
  );
}
