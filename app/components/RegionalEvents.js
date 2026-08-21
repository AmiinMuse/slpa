"use client";

import { useCallback, useEffect, useState } from "react";

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function RegionalEvents({ events }) {
  // lightbox state: { e: eventIndex, p: photoIndex } or null
  const [lb, setLb] = useState(null);
  const cur = lb ? events[lb.e] : null;

  const step = useCallback(
    (dir) =>
      setLb((s) =>
        s
          ? {
              e: s.e,
              p:
                (s.p + dir + events[s.e].photos.length) %
                events[s.e].photos.length,
            }
          : s
      ),
    [events]
  );

  useEffect(() => {
    if (!lb) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLb(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lb, step]);

  return (
    <>
      <ol className="tour">
        {events.map((e, i) => {
          const ci = Math.min((e.cover || 1) - 1, e.photos.length - 1);
          const hero = e.photos[ci];
          const portrait = hero.height > hero.width;
          const rest = e.photos
            .map((p, idx) => ({ p, idx }))
            .filter((o) => o.idx !== ci);
          const thumbs = rest.slice(0, 3);
          const extra = rest.length - thumbs.length;
          return (
            <li className="tour-stop" key={e.slug}>
              <div className={`tour-media${portrait ? " is-portrait" : ""}`}>
                <button
                  type="button"
                  className="tour-hero"
                  onClick={() => setLb({ e: i, p: ci })}
                  aria-label={`View photos from ${e.city}`}
                >
                  <img
                    src={hero.src}
                    width={hero.width}
                    height={hero.height}
                    alt={`SLPA regional event — ${e.city}`}
                    loading="lazy"
                  />
                  <span className="tour-tag">
                    <span className="k">{e.date}</span>
                    <span className="t">{e.city}</span>
                  </span>
                </button>
                {thumbs.length > 0 && (
                  <div className="tour-thumbs">
                    {thumbs.map((o) => (
                      <button
                        type="button"
                        key={o.p.src}
                        onClick={() => setLb({ e: i, p: o.idx })}
                        aria-label={`View a photo from ${e.city}`}
                      >
                        <img src={o.p.src} alt="" loading="lazy" />
                      </button>
                    ))}
                    {extra > 0 && (
                      <button
                        type="button"
                        className="tour-more-thumb"
                        onClick={() => setLb({ e: i, p: rest[3].idx })}
                        aria-label={`View all ${e.photos.length} photos from ${e.city}`}
                      >
                        +{extra}
                      </button>
                    )}
                  </div>
                )}
              </div>

              <div className="tour-copy">
                <div className="tour-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="tour-kicker">{e.n} Stop</div>
                <h3>{e.city}</h3>
                <div className="tour-meta">
                  {e.date}
                  {e.venue ? ` · ${e.venue}` : ""}
                </div>
                <p>{e.blurb}</p>
                <button
                  type="button"
                  className="tour-view"
                  onClick={() => setLb({ e: i, p: 0 })}
                >
                  View all {e.photos.length} photos <Arrow />
                </button>
              </div>
            </li>
          );
        })}
      </ol>

      {cur && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={(ev) => {
            if (ev.target === ev.currentTarget) setLb(null);
          }}
        >
          <button
            type="button"
            className="lb-close"
            aria-label="Close photo viewer"
            onClick={() => setLb(null)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <img
            src={cur.photos[lb.p].src}
            alt={`SLPA regional event — ${cur.city}`}
          />
          <div className="lb-bar">
            <div className="slide-count">
              {cur.city} &middot; {String(lb.p + 1).padStart(2, "0")} /{" "}
              {String(cur.photos.length).padStart(2, "0")}
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
