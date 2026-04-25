import type { StatsSlide } from "../slides/types";
import { SlideShell } from "../SlideShell";

type Props = { slide: StatsSlide };

export function StatsSlideView({ slide }: Props) {
  return (
    <SlideShell>
      <h2 className="slide-heading">{slide.title}</h2>
      {slide.intro ? <p className="slide-intro">{slide.intro}</p> : null}
      <div className="slide-stats-grid">
        {slide.stats.map((s, i) => {
          const width = typeof s.bar === "number" ? Math.min(100, Math.max(0, s.bar)) : null;
          return (
            <article key={i} className="slide-stat-card">
              {width !== null ? (
                <div className="slide-stat-meter" aria-hidden>
                  <span className="slide-stat-meter-fill" style={{ width: `${width}%` }} />
                </div>
              ) : null}
              <p className="slide-stat-value">{s.value}</p>
              <p className="slide-stat-label">{s.label}</p>
              {s.detail ? <p className="slide-stat-detail">{s.detail}</p> : null}
              <p className="slide-stat-source">{s.source}</p>
            </article>
          );
        })}
      </div>
    </SlideShell>
  );
}
