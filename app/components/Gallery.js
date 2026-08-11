"use client";

import { useCallback, useEffect, useState } from "react";

export default function Gallery({ chapters }) {
  const photos = chapters.flatMap((c) => c.photos);
  const [open, setOpen] = useState(null);

  const step = useCallback(
    (dir) => setOpen((i) => (i + dir + photos.length) % photos.length),
    [photos.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, step]);

  let offset = 0;

  return (
    <>
      {chapters.map((chapter) => {
        const base = offset;
        offset += chapter.photos.length;
        return (
          <div className="gallery-chapter" key={chapter.title}>
            <div className="gallery-head">
              <h3>{chapter.title}</h3>
              <p>{chapter.note}</p>
            </div>
            <div className="gallery">
              {chapter.photos.map((photo, i) => (
                <button
                  type="button"
                  className="tile"
                  key={photo.src}
                  onClick={() => setOpen(base + i)}
                  aria-label={`View photo — ${chapter.title}`}
                >
                  <img
                    src={photo.src}
                    width={photo.width}
                    height={photo.height}
                    alt={`${chapter.title} — SLPA 2024 Atlanta conference`}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        );
      })}

      {open !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(null);
          }}
        >
          <button
            type="button"
            className="lb-close"
            aria-label="Close photo viewer"
            onClick={() => setOpen(null)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <img src={photos[open].src} alt="SLPA 2024 Atlanta conference" />
          <div className="lb-bar">
            <div className="slide-count">
              {String(open + 1).padStart(2, "0")} /{" "}
              {String(photos.length).padStart(2, "0")}
            </div>
            <div className="slide-nav">
              <button aria-label="Previous photo" onClick={() => step(-1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M11 6l-6 6 6 6" />
                </svg>
              </button>
              <button aria-label="Next photo" onClick={() => step(1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
