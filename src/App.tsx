import { useEffect, useMemo, useState } from "react";
import { SlideDeck } from "./deck/SlideDeck";
import {
  listSessionNumbers,
  readSessionFromSearch,
  resolveSessionDeck,
} from "./deck/slides/sessionRegistry";

export function App() {
  const [session, setSession] = useState(() =>
    typeof window !== "undefined" ? readSessionFromSearch(window.location.search) : 1,
  );

  useEffect(() => {
    const syncSession = () => setSession(readSessionFromSearch(window.location.search));
    window.addEventListener("popstate", syncSession);
    return () => window.removeEventListener("popstate", syncSession);
  }, []);

  const deck = useMemo(() => resolveSessionDeck(session), [session]);
  const availableSessions = useMemo(() => listSessionNumbers(), []);

  return (
    <SlideDeck
      key={deck.session}
      slides={deck.slides}
      sessionTitle={deck.title}
      sessionNumber={deck.session}
      availableSessionNumbers={availableSessions}
    />
  );
}
