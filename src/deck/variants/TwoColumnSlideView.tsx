import type { TwoColumnSlide } from "../slides/types";
import { SlideShell } from "../SlideShell";

type Props = { slide: TwoColumnSlide };

export function TwoColumnSlideView({ slide }: Props) {
  return (
    <SlideShell>
      <h2 className="slide-heading">{slide.title}</h2>
      <div className="slide-columns">
        <div className="slide-column">
          <h3 className="slide-column-title">{slide.leftTitle}</h3>
          <ul className="slide-bullets slide-bullets--compact">
            {slide.leftItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="slide-column">
          <h3 className="slide-column-title">{slide.rightTitle}</h3>
          <ul className="slide-bullets slide-bullets--compact">
            {slide.rightItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </SlideShell>
  );
}
