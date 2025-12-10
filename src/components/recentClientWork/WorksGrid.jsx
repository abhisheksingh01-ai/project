// components/works/WorksGrid.jsx
import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------- Dummy Work Data ---------- */
const WORKS = [
  { id: 1, client: "Aurora Tech", location: "Pune, Maharashtra", image: "/images/project-aurora.jpg", href: "#" },
  { id: 2, client: "Bluewave Retail", location: "Jaipur, Rajasthan", image: "/images/project-bluewave.jpg", href: "#" },
  { id: 3, client: "Crest Logistics", location: "Guwahati, Assam", image: "/images/project-crest.jpg", href: "#" },
  { id: 4, client: "Dharma Foods", location: "Lucknow, Uttar Pradesh", image: "/images/project-dharma.jpg", href: "#" },
  { id: 5, client: "Elara Health", location: "Bengaluru, Karnataka", image: "/images/project-elara.jpg", href: "#" },
  { id: 6, client: "Fable Media", location: "Kolkata, West Bengal", image: "/images/project-fable.jpg", href: "#" },
  { id: 7, client: "Greenfield Farms", location: "Indore, Madhya Pradesh", image: "/images/project-greenfield.jpg", href: "#" },
  { id: 8, client: "Horizon Finance", location: "Mumbai, Maharashtra", image: "/images/project-horizon.jpg", href: "#" },
];

/* ---------- Card (used inside grid and marquee) ---------- */
function CardMini({ work }) {
  return (
    <a href={work.href} className="block rounded-2xl overflow-hidden bg-white shadow-lg">
      <div className="w-full h-44 md:h-48 lg:h-56 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="w-full h-full flex items-end p-4">
          <div className="bg-white/90 px-3 py-1 rounded-full text-xs shadow-sm">
            {work.client}
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start gap-3">
          <h4 className="text-lg md:text-xl font-[Urbanist] font-semibold text-[#0C0C0C]">{work.client}</h4>
          <div className="text-xs text-[#6D6D6D]">{work.location}</div>
        </div>

        <p className="mt-3 text-sm text-[#4A4A4A]">Delivered a modern, responsive site with improved performance.</p>

        <div className="mt-5 flex items-center gap-3">
          <span className="text-sm font-medium text-[#0C0C0C]">View project</span>
          <svg className="w-4 h-4 text-[#888]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </a>
  );
}

/* ---------- Marquee (horizontal auto-scroll) ---------- */
/* Duplicates items for seamless loop. Pauses on hover. */
function Marquee({ items, speed = 26 }) {
  // respect reduced motion
  const reduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="marquee-track flex gap-6 will-change-transform"
        style={{ ["--marquee-duration"]: `${speed}s` }}
        aria-hidden={reduced}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="w-[320px] flex-shrink-0">
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
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); } /* move half (duplicate length) */
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

/* ---------- Main component: only marquee + view more grid ---------- */
export default function WorksGrid({ works = null }) {
  const list = works ?? WORKS;
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      {/* DEFAULT: marquee only */}
      {!showAll && (
        <div className="mb-8">
          {!showAll && (
            <div className="mb-8">
              <Marquee items={list} speed={10} />  {/* faster marquee */}
            </div>
          )}

        </div>
      )}

      {/* ON "VIEW MORE": show responsive grid of all cards */}
      {showAll && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <AnimatePresence>
            {list.map((w, i) => (
              <motion.div
                key={w.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
              >
                <CardMini work={w} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* View more / Show less button */}
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setShowAll((s) => !s)}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-white font-medium
                     shadow-lg transform transition-all duration-300
                     focus:outline-none focus:ring-4 focus:ring-[#53AAA4]/30
                     hover:scale-[1.03] active:scale-[0.99]
                     bg-[#53AAA4] hover:bg-[#4f9890]"
          aria-expanded={showAll}
        >
          <span>{showAll ? "Show less" : "View more work"}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : "rotate-0"}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* accessibility */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </>
  );
}
