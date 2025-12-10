import React from "react";
import CardMini from "./CardMini";

export default function Marquee({ items, speed = 26 }) {
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className="relative overflow-hidden w-full mb-8">
      <div
        className="marquee-track flex gap-6 will-change-transform"
        style={{ ["--marquee-duration"]: `${speed}s` }}
        aria-hidden={reduced}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="w-[320px] shrink-0">
            <CardMini work={item} />
          </div>
        ))}
      </div>

      <style>{`
        .marquee-track {
          display:flex;
          gap:24px;
          transform: translateX(0);
          animation: marquee var(--marquee-duration) linear infinite;
        }
        .marquee-track:hover, .marquee-track:active { animation-play-state: paused; }
        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none !important; } }
      `}</style>
    </div>
  );
}
