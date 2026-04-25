import type { QuizCorrectLetter, QuizSlide } from "../slides/types";
import { SlideShell } from "../SlideShell";

type Props = {
  slide: QuizSlide;
  /** When false, correct row and answer line stay hidden (session 4 + Space to reveal). */
  answerRevealed?: boolean;
};

const LETTERS: QuizCorrectLetter[] = ["A", "B", "C", "D"];

const OPTION_KEY: Record<QuizCorrectLetter, "optionA" | "optionB" | "optionC" | "optionD"> = {
  A: "optionA",
  B: "optionB",
  C: "optionC",
  D: "optionD",
};

export function QuizSlideView({ slide, answerRevealed = true }: Props) {
  return (
    <SlideShell>
      <h2 className="slide-heading">{slide.title}</h2>
      <p className="slide-quiz-question">{slide.question}</p>
      <ul className="slide-quiz-options" aria-label="Choices">
        {LETTERS.map((letter) => {
          const text = slide[OPTION_KEY[letter]];
          const isCorrect = letter === slide.correctLetter;
          const showCorrect = answerRevealed && isCorrect;
          return (
            <li
              key={letter}
              className={showCorrect ? "slide-quiz-option slide-quiz-option--correct" : "slide-quiz-option"}
            >
              <span className="slide-quiz-letter">{letter}.</span>
              <span className="slide-quiz-text">{text}</span>
              {showCorrect ? (
                <span className="slide-quiz-check" aria-label="Correct answer">
                  ✓
                </span>
              ) : null}
            </li>
          );
        })}
      </ul>
      {!answerRevealed ? (
        <p className="slide-footnote slide-quiz-footer slide-quiz-footer--pending slide-quiz-meta">
          <span className="slide-bridge-label">Reveal:</span> Press space to show the answer
        </p>
      ) : (
        <p className="slide-footnote slide-quiz-footer slide-quiz-meta">
          <span className="slide-bridge-label">Answer:</span> {slide.correctLetter}
        </p>
      )}
    </SlideShell>
  );
}
