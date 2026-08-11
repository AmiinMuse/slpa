"use client";

import { useEffect, useRef, useState } from "react";

const SLIDES = [
  { src: "/conference-slides/slide-01.jpg", alt: "Attendees filling the conference hall in Atlanta" },
  { src: "/conference-slides/slide-02.jpg", alt: "Panel discussion on the main stage" },
  { src: "/conference-slides/slide-03.jpg", alt: "Speaker at the podium beside the American and Somaliland flags" },
  { src: "/conference-slides/slide-04.jpg", alt: "Speakers sharing a light moment during a session" },
  { src: "/conference-slides/slide-05.jpg", alt: "A full audience following a conference session" },
  { src: "/conference-slides/slide-06.jpg", alt: "Guests in traditional dress at the SLPA photo backdrop" },
  { src: "/conference-slides/slide-07.jpg", alt: "Attendee smiling with the Somaliland flag at the gala" },
  { src: "/conference-slides/slide-08.jpg", alt: "Celebration on the dance floor at the black tie gala" },
  { src: "/conference-slides/slide-09.jpg", alt: "Members catching up at the outdoor BBQ" },
  { src: "/conference-slides/slide-10.jpg", alt: "Conversations under the trees at the closing BBQ" },
];

const DELAY = 5000;

export default function ConferenceSlideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), DELAY);
    return () => clearInterval(t);
  }, [paused]);

  const step = (dir) =>
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);

  return (
    <div
      className="slideshow"
      aria-roledescription="carousel"
      aria-label="Photos from the 2024 Atlanta conference"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="frame">
        <div className="stage">
          {SLIDES.map((slide, i) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className={i === index ? "on" : undefined}
              aria-hidden={i !== index}
            />
          ))}
        </div>
      </div>
      <div className="slide-bar">
        <div className="cap">
          Scenes from Empowering Tomorrow &mdash; Atlanta, May 2024.
        </div>
        <div className="slide-meta">
          <div className="slide-count">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(SLIDES.length).padStart(2, "0")}
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
    </div>
  );
}
