import { useCallback, useState } from "react";
import { publicAssetUrl } from "../publicAssetUrl";
import type { ImageAppsSlide } from "../slides/types";
import { SlideShell } from "../SlideShell";

type Props = { slide: ImageAppsSlide };

export function ImageAppsSlideView({ slide }: Props) {
  const [showPlaceholder, setShowPlaceholder] = useState(!slide.imageSrc);

  const onError = useCallback(() => {
    setShowPlaceholder(true);
  }, []);

  return (
    <SlideShell>
      <h2 className="slide-heading">{slide.title}</h2>
      {slide.prompt?.trim() ? <p className="slide-prompt">{slide.prompt}</p> : null}
      <div className="slide-image-frame">
        {slide.imageSrc && !showPlaceholder ? (
          <img
            className="slide-image"
            src={publicAssetUrl(slide.imageSrc)}
            alt={slide.imageAlt}
            decoding="async"
            onError={onError}
          />
        ) : (
          <div className="slide-image-placeholder" role="img" aria-label={slide.imageAlt}>
            <span className="slide-image-placeholder-label">Illustration unavailable</span>
            <span className="slide-image-placeholder-hint">
              This slide expects an image asset configured for the deck.
            </span>
          </div>
        )}
      </div>
    </SlideShell>
  );
}
