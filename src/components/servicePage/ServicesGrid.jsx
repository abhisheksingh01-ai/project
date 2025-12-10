// components/services/ServicesGrid.jsx
import React, { useState } from "react";

/**
 * - Shows 3 cards by default (home page compact).
 * - Clicking "View more Services" reveals remaining cards with a staggered animation.
 * - Button color: #53AAA4 (as requested), premium hover + focus styles included.
 * - Cards preserve your existing styling and hover behavior.
 */

function ServiceCard({ svc, index }) {
  return (
    <article
      aria-labelledby={`svc-${svc.id}`}
      className="group relative overflow-hidden rounded-2xl bg-[#F4F4F4] hover:bg-[#0C0C0C] shadow-md hover:shadow-2xl p-8 transform"
      style={{
        // use staggered animation delay per card
        animation: `fadeUp 420ms ease-out both`,
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* decorative top-left radial */}
      <div
        className="absolute -left-10 -top-10 w-40 h-40 rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(83,170,164,0.12), transparent 40%)",
        }}
      />

      {/* Icon */}
      <div className="mb-6">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-xl
                     bg-white/90 group-hover:bg-[#53AAA4] transition-colors duration-400
                     border border-white/30 group-hover:border-[#53AAA4]"
          aria-hidden="true"
        >
          <span
            className="text-[#0C0C0C] group-hover:text-white text-lg"
            style={{ transition: "color .35s" }}
          >
            {svc.icon}
          </span>
        </div>
      </div>

      {/* Title & desc */}
      <h3
        id={`svc-${svc.id}`}
        className="text-lg font-semibold text-[#0C0C0C] group-hover:text-[#F3F3F3] mb-3 font-[Urbanist]"
      >
        {svc.title}
      </h3>

      <p className="text-sm text-[#4A4A4A] group-hover:text-[#DADADA] max-w-xl font-inter">
        {svc.desc}
      </p>

      {/* Keyword pills */}
      {svc.keywords?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {svc.keywords.map((kw, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-white/80 text-[#0C0C0C] group-hover:bg-white/10 group-hover:text-[#F3F3F3] transition-colors duration-300"
            >
              {kw}
            </span>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="mt-6">
        <span className="inline-flex items-center gap-2 text-sm font-medium
                         text-[#0C0C0C] group-hover:text-[#F3F3F3] transition-colors duration-300">
          Learn more
          <svg
            className="w-4 h-4 inline-block transform group-hover:translate-x-1 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M5 12h14M13 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      {/* bottom-right shine */}
      <div
        className="pointer-events-none absolute right-6 bottom-6 w-28 h-28 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(83,170,164,0.12), transparent 45%)",
        }}
      />
    </article>
  );
}

export default function ServicesGrid({ services = null }) {
  // full list (you already provided these services)
  const sample = [
    {
      id: 1,
      title: "Website Development & Maintenance",
      desc: "Custom, responsive websites built for performance and conversions. Continuous maintenance to keep your site secure, fast and up-to-date.",
      icon: "💻",
      keywords: ["Responsive", "Fast", "CMS", "Maintenance", "Performance"],
      href: "#",
    },
    {
      id: 2,
      title: "App Development",
      desc: "End-to-end mobile app development (iOS & Android) with modern UX, scalable architecture and app-store release support.",
      icon: "📱",
      keywords: ["iOS", "Android", "React Native", "Flutter", "API"],
      href: "#",
    },
    {
      id: 3,
      title: "Bug Fixing",
      desc: "Quick debugging and reliability fixes to restore functionality and improve user experience — fast turnaround for critical issues.",
      icon: "🔧",
      keywords: ["Hotfix", "Error tracking", "Stability", "Regression", "QA"],
      href: "#",
    },
    {
      id: 4,
      title: "Digital Marketing",
      desc: "Data-driven campaigns across paid and owned channels to increase traffic, leads, and revenue with measurable ROI.",
      icon: "📣",
      keywords: ["PPC", "Meta Ads", "Campaigns", "Analytics", "Conversion"],
      href: "#",
    },
    {
      id: 5,
      title: "Google Listing",
      desc: "Optimize and manage your Google Business Profile to boost local visibility, collect reviews and drive walk-ins or calls.",
      icon: "📍",
      keywords: ["GBP", "Local SEO", "Maps", "Reviews", "Listing"],
      href: "#",
    },
    {
      id: 6,
      title: "SEO Optimization",
      desc: "Technical SEO, content strategy and on-page optimization that improves rankings and organic traffic sustainably.",
      icon: "🔎",
      keywords: ["Keywords", "On-Page", "Technical", "Backlinks", "Content"],
      href: "#",
    },
    {
      id: 7,
      title: "Social Media Marketing",
      desc: "Creative content, posting strategy and community management to build brand awareness and meaningful engagement.",
      icon: "🤝",
      keywords: ["Content", "Engagement", "Growth", "Scheduling", "Creators"],
      href: "#",
    },
    {
      id: 8,
      title: "Short Video Editing",
      desc: "High-impact short-form videos (TikTok / Reels / Shorts) — edited for storytelling, engagement and shareability.",
      icon: "🎬",
      keywords: ["Reels", "TikTok", "Shorts", "Captions", "Punchy Edits"],
      href: "#",
    },
  ];

  const list = services ?? sample;

  const [showAll, setShowAll] = useState(false);

  // number to show on homepage
  const initialCount = 3;

  const visible = showAll ? list : list.slice(0, initialCount);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visible.map((s, i) => (
          <ServiceCard key={s.id} svc={s} index={i} />
        ))}
      </div>

      {/* View more / less button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => setShowAll((v) => !v)}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-white font-medium
                     shadow-lg transform transition-all duration-300
                     focus:outline-none focus:ring-4 focus:ring-[#53AAA4]/30
                     hover:scale-[1.03] active:scale-[0.99]
                     bg-[#53AAA4] hover:bg-[#4f9890]"
          aria-expanded={showAll}
        >
          <span>{showAll ? "View less" : "View more Services"}</span>

          {/* animated chevron */}
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

      {/* Scoped keyframes for card reveal animation */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(12px) scale(.995); }
          60% { opacity: 1; transform: translateY(-6px) scale(1.002); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Reduce motion preference */
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </div>
  );
}
