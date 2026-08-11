"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ as: Tag = "div", className = "", style, children }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={style}
      className={`${className ? `${className} ` : ""}reveal${inView ? " in" : ""}`}
    >
      {children}
    </Tag>
  );
}
