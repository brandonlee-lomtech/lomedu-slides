import type { PollSlide } from "../slides/types";
import { SlideShell } from "../SlideShell";

type Props = { slide: PollSlide };

export function PollSlideView({ slide }: Props) {
  return (
    <SlideShell>
      <h2 className="slide-heading">{slide.title}</h2>
      <ul className="slide-poll-questions">
        {slide.questions.map((q, i) => (
          <li key={i}>{q}</li>
        ))}
      </ul>
    </SlideShell>
  );
}
