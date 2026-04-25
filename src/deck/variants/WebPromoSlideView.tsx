import { useCallback, useState } from "react";
import type { WebPromoSlide } from "../slides/types";
import { SlideShell } from "../SlideShell";

type Props = { slide: WebPromoSlide };

export function WebPromoSlideView({ slide }: Props) {
  const [videoPlaybackFailed, setVideoPlaybackFailed] = useState(false);
  const showVideo = Boolean(slide.videoSrc) && !videoPlaybackFailed;

  const onVideoError = useCallback(() => {
    setVideoPlaybackFailed(true);
  }, []);

  return (
    <SlideShell>
      <h2 className="slide-heading">{slide.title}</h2>
      {slide.intro ? <p className="slide-intro">{slide.intro}</p> : null}
      {showVideo ? (
        <div className="slide-promo-video-wrap">
          <video
            className="slide-promo-video"
            src={slide.videoSrc}
            controls
            playsInline
            preload="metadata"
            onError={onVideoError}
          />
        </div>
      ) : null}
      {slide.videoSrc && videoPlaybackFailed ? (
        <p className="slide-promo-video-hint">
          Promo file missing or unsupported — add <code>{slide.videoSrc}</code> under <code>public/</code>{" "}
          or clear <code>videoSrc</code> on this slide.
        </p>
      ) : null}
      <div className="slide-web-embed-wrap">
        <p className="slide-web-embed-toolbar">
          <span className="slide-web-embed-label">Live app</span>
          <a className="slide-web-embed-open" href={slide.embedUrl} target="_blank" rel="noopener noreferrer">
            Open in new tab
          </a>
        </p>
        <iframe
          className="slide-web-embed"
          src={slide.embedUrl}
          title={slide.embedTitle}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="clipboard-write; fullscreen"
        />
      </div>
    </SlideShell>
  );
}
