import type { RecapSlide } from "../slides/types";
import { SlideShell } from "../SlideShell";

type Props = { slide: RecapSlide };

export function RecapSlideView({ slide }: Props) {
  return (
    <SlideShell footer={slide.footer ? <p className="slide-footnote">{slide.footer}</p> : undefined}>
      <h2 className="slide-heading">{slide.title}</h2>
      <ul className="slide-bullets slide-bullets--recap">
        {slide.bullets.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </SlideShell>
  );
}
