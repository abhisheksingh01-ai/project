import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardMini from "./CardMini";
import Marquee from "./Marquee";

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

export default function WorksGrid({ works = null }) {
  const list = works ?? WORKS;
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      {!showAll && <Marquee items={list} speed={10} />}

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

      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setShowAll((s) => !s)}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-white font-medium
                     shadow-lg transform transition-all duration-300
                     focus:outline-none focus:ring-4 focus:ring-[#53AAA4]/30
                     hover:scale-[1.03] active:scale-[0.99]
                     bg-[#53AAA4] hover:bg-[#4f9890]"
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

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </>
  );
}
