import type { BulletsSlide } from "../slides/types";
import { SlideShell } from "../SlideShell";

type Props = { slide: BulletsSlide };

export function BulletsSlideView({ slide }: Props) {
  const listClass =
    "slide-bullets" + (slide.compact ? " slide-bullets--compact" : "");
  return (
    <SlideShell>
      <h2 className="slide-heading">{slide.title}</h2>
      {slide.intro ? <p className="slide-intro">{slide.intro}</p> : null}
      <ul className={listClass}>
        {slide.bullets.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </SlideShell>
  );
}
