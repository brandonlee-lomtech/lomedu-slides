import type { Slide } from "./types";
import { session1Fundamentals } from "./session1Fundamentals";
import { session2HandsOn } from "./session2HandsOn";
import { session3ProgrammingFundamentals } from "./session3ProgrammingFundamentals";
import { session4Quiz } from "./session4Quiz";
import { session5CaseStudies } from "./session5CaseStudies";
import { session6AILaborMarket } from "./session6AILaborMarket";

export type SessionDeck = {
  session: number;
  title: string;
  slides: Slide[];
};

export const SESSION_DECKS: SessionDeck[] = [
  { session: 1, title: "Session 1: Fundamentals", slides: session1Fundamentals },
  { session: 2, title: "Session 2: Old Way vs New Way", slides: session2HandsOn },
  {
    session: 3,
    title: "Session 3: Fundamentals of Programming",
    slides: session3ProgrammingFundamentals,
  },
  { session: 4, title: "Session 4: Quiz", slides: session4Quiz },
  {
    session: 5,
    title: "Session 5: AI coding adoption & the workforce",
    slides: session5CaseStudies,
  },
  {
    session: 6,
    title: "Session 6: AI coding adoption & labour-market evidence",
    slides: session6AILaborMarket,
  },
];

const SESSION_NUMBERS = new Set(SESSION_DECKS.map((d) => d.session));

export function resolveSessionDeck(session: number): SessionDeck {
  if (SESSION_NUMBERS.has(session)) {
    return SESSION_DECKS.find((d) => d.session === session)!;
  }
  return SESSION_DECKS[0];
}

/** Reads ?session=N from the URL; invalid or missing values default to session 1. */
export function readSessionFromSearch(search: string): number {
  const raw = new URLSearchParams(search).get("session");
  const parsed = raw !== null && raw !== "" ? Number.parseInt(raw, 10) : 1;
  if (!Number.isFinite(parsed) || parsed < 1) {
    return 1;
  }
  return SESSION_NUMBERS.has(parsed) ? parsed : 1;
}
