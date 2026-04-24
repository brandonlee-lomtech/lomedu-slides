import { useCallback, useEffect, useRef, useState } from "react";
import type { Slide } from "./slides/types";
import { renderSlide } from "./SlideRenderer";

type SlideDeckProps = {
  slides: Slide[];
  sessionTitle: string;
  sessionNumber: number;
  availableSessionNumbers: number[];
};

export function SlideDeck({
  slides,
  sessionTitle,
  sessionNumber,
  availableSessionNumbers,
}: SlideDeckProps) {
  const sessionSwitcherHint =
    availableSessionNumbers.length > 0
      ? `Switch deck: ${availableSessionNumbers.map((n) => `?session=${n}`).join(" · ")}`
      : null;
  const [index, setIndex] = useState(0);
  /** Session 4 quiz only: Space first reveals answer; reset when changing slides. */
  const [s4QuizAnswerRevealed, setS4QuizAnswerRevealed] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const total = slides.length;
  const current = slides[index];
  const progress = total > 0 ? ((index + 1) / total) * 100 : 0;
  const isSession4Quiz = sessionNumber === 4 && current?.variant === "quiz";
  const quizRevealForRender =
    sessionNumber === 4 && current?.variant === "quiz" ? s4QuizAnswerRevealed : true;

  const go = useCallback(
    (next: number) => {
      if (total === 0) return;
      const clamped = Math.max(0, Math.min(total - 1, next));
      setIndex(clamped);
    },
    [total],
  );

  useEffect(() => {
    setS4QuizAnswerRevealed(false);
  }, [index]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === " ") {
        if (isSession4Quiz && !s4QuizAnswerRevealed) {
          e.preventDefault();
          setS4QuizAnswerRevealed(true);
          return;
        }
      }

      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(index + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(index - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        go(0);
      } else if (e.key === "End") {
        e.preventDefault();
        go(total - 1);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [go, index, total, isSession4Quiz, s4QuizAnswerRevealed]);

  useEffect(() => {
    rootRef.current?.focus();
  }, [index]);

  if (total === 0) {
    return <p className="deck-empty">No slides configured.</p>;
  }

  return (
    <div
      className="deck-root"
      ref={rootRef}
      tabIndex={-1}
      role="application"
      aria-roledescription="slide deck"
      aria-label={`Presentation — ${sessionTitle}`}
    >
      <div className="deck-chrome" aria-hidden="true">
        <div className="deck-progress">
          <div className="deck-progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <div className="deck-session" title={sessionTitle}>
          Session {sessionNumber}
        </div>
        <div className="deck-counter">
          {index + 1} / {total}
        </div>
      </div>

      <div className="deck-stage">
        {renderSlide(current, {
          sessionNumber,
          quizAnswerRevealed: quizRevealForRender,
        })}
      </div>

      <div className="deck-hint" aria-hidden="true">
        {sessionNumber === 4
          ? "Session 4 quiz: space reveals answer, then space advances · arrows always change slides"
          : "Use arrow keys or space to move · Home / End for first / last slide"}
        {sessionSwitcherHint ? ` · ${sessionSwitcherHint}` : null}
      </div>
    </div>
  );
}
