import type { ReactNode } from "react";

type SlideShellProps = {
  children: ReactNode;
};

export function SlideShell({ children }: SlideShellProps) {
  return (
    <section className="slide" aria-live="polite">
      <div className="slide-content">{children}</div>
    </section>
  );
}
