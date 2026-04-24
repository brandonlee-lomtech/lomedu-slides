import type { ReactNode } from "react";

type SlideShellProps = {
  children: ReactNode;
  footer?: ReactNode;
};

export function SlideShell({ children, footer }: SlideShellProps) {
  return (
    <section className="slide" aria-live="polite">
      <div className="slide-content">{children}</div>
      {footer ? <div className="slide-footer">{footer}</div> : null}
    </section>
  );
}
