// components/services/ServicesGrid.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ServicesGrid.jsx
 * - Framer Motion animations
 * - 3D hover tilt per card (mouse-driven, rAF)
 * - Animated modal for service details
 * - Inline SVG icons (replace with real brand svgs when ready)
 *
 * NOTE: install framer-motion before using: npm i framer-motion
 */

/* -------------------------- SVG ICONS -------------------------- */
const IconMap = {
  website: (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" {...props}>
      <path d="M3 7h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 11h.01M11 11h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  app: (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" {...props}>
      <rect x="6" y="3" width="12" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="18" r="0.8" fill="currentColor" />
    </svg>
  ),
  bug: (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" {...props}>
      <path d="M12 7v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 9l-3-1M16 9l3-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 18c1-2.5 5-2.5 6 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  marketing: (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" {...props}>
      <path d="M3 12h4l5-6v12l-5-6H3z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 9a3 3 0 010 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  map: (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" {...props}>
      <path d="M12 2v6l2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M20 6v12l-4-2-4 2-4-2V4l4 2 4-2 4 2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  seo: (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" {...props}>
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  social: (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" {...props}>
      <path d="M8 12h8M8 8h8M8 16h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  video: (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" {...props}>
      <rect x="3" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M17 10l4-2v8l-4-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

/* -------------------------- SERVICE DATA -------------------------- */
const ALL_SERVICES = [
  {
    id: 1,
    title: "Website Development & Maintenance",
    key: "website",
    desc:
      "Custom, responsive websites built for performance and conversions. Continuous maintenance keeps your site secure, fast and up-to-date.",
    details:
      "We build SEO-friendly, fast-loading websites using modern frameworks. Maintenance includes updates, backups, security hardening, and performance optimization.",
    keywords: ["Responsive", "CMS", "Performance", "Maintenance"],
  },
  {
    id: 2,
    title: "App Development",
    key: "app",
    desc:
      "End-to-end mobile apps (iOS & Android) with modern UX, scalable architecture, and app-store release support.",
    details:
      "Native or cross-platform apps built with React Native or Flutter, complete with API integration, analytics, and deployment support.",
    keywords: ["iOS", "Android", "React Native", "Flutter"],
  },
  {
    id: 3,
    title: "Digital Marketing",
    key: "marketing",
    desc:
      "Data-driven campaigns across paid and organic channels to increase traffic, leads and revenue with measurable ROI.",
    details:
      "Strategy, creatives, campaign management (PPC, Meta), tracking and reporting. Conversion optimization and CRM integration for long-term growth.",
    keywords: ["PPC", "Meta Ads", "Analytics", "Conversion"],
  },
  {
    id: 4,
    title: "Bug Fixing",
    key: "bug",
    desc:
      "Fast debugging and reliability fixes to restore functionality and improve user experience with quick turnaround times.",
    details:
      "Immediate triage, patching, regression testing and QA. SLA options for high-priority issues and ongoing maintenance support.",
    keywords: ["Hotfix", "Stability", "QA", "Error tracking"],
  },
  {
    id: 5,
    title: "Google Listing",
    key: "map",
    desc:
      "Optimize and manage your Google Business Profile to boost local visibility, collect reviews and drive calls or walk-ins.",
    details:
      "Profile optimization, citation management, review strategy, and weekly reporting to improve local search presence.",
    keywords: ["GBP", "Local SEO", "Maps", "Reviews"],
  },
  {
    id: 6,
    title: "SEO Optimization",
    key: "seo",
    desc:
      "Technical SEO, content strategy and on-page optimization to improve rankings and sustainable organic traffic.",
    details:
      "Comprehensive audits, content planning, on-page fixes and backlink strategy with performance tracking.",
    keywords: ["Keywords", "Technical", "On-Page", "Backlinks"],
  },
  {
    id: 7,
    title: "Social Media Marketing",
    key: "social",
    desc:
      "Creative content, posting strategy and community management to build brand awareness and engagement.",
    details:
      "Platform strategy, content calendars, creator partnerships and community moderation to amplify brand voice.",
    keywords: ["Content", "Engagement", "Growth", "Creators"],
  },
  {
    id: 8,
    title: "Short Video Editing",
    key: "video",
    desc:
      "High-impact short-form videos (TikTok / Reels / Shorts) edited for storytelling, engagement and shareability.",
    details:
      "Fast-turnaround edits, captions, hooks and sound design to maximize watch time and organic reach.",
    keywords: ["Reels", "TikTok", "Shorts", "Captions"],
  },
];

/* -------------------------- Modal -------------------------- */
function ServiceModal({ open, svc, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && svc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          aria-modal="true"
          role="dialog"
        >
          {/* backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="absolute inset-0 bg-black"
            onClick={onClose}
          />

          {/* modal panel */}
          <motion.div
            initial={{ y: 18, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 18, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="relative z-10 max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#F4F4F4] flex items-center justify-center">
                <span className="text-[#0C0C0C]">{IconMap[svc.key]({ className: "text-[#0C0C0C]" })}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-[Urbanist] font-bold text-[#0C0C0C]">{svc.title}</h3>
                <p className="mt-3 text-sm text-[#4A4A4A]">{svc.details}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {svc.keywords.map((k) => (
                    <span key={k} className="text-xs px-2 py-1 rounded-full bg-[#F3F3F3] text-[#0C0C0C]">
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-md bg-white border border-gray-200 hover:bg-gray-50"
              >
                Close
              </button>
              <a
                href="#contact"
                className="px-5 py-2 rounded-md bg-[#53AAA4] text-white font-medium hover:bg-[#4f9890]"
              >
                Get this service
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* -------------------------- 3D Hover Tilt Hook -------------------------- */
/** Small hook that computes transform on mousemove with rAF */
function useTilt() {
  const ref = useRef(null);
  const state = useRef({ raf: null, mx: 0, my: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function handleMove(e) {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      state.current.mx = px;
      state.current.my = py;
      if (!state.current.raf) {
        state.current.raf = requestAnimationFrame(update);
      }
    }
    function update() {
      const { mx, my } = state.current;
      const rx = (my - 0.5) * -12; // rotateX
      const ry = (mx - 0.5) * 12; // rotateY
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      state.current.raf = null;
    }
    function reset() {
      if (state.current.raf) cancelAnimationFrame(state.current.raf);
      el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)`;
      state.current.raf = null;
    }

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);
    el.addEventListener("mouseenter", () => (el.style.transition = "transform 250ms ease"));

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
      el.removeEventListener("mouseenter", () => {});
      if (state.current.raf) cancelAnimationFrame(state.current.raf);
    };
  }, []);

  return ref;
}

/* -------------------------- Card (with tilt & motion) -------------------------- */
function Card({ svc, index, onOpen }) {
  const tiltRef = useTilt();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.995 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.2, 0.9, 0.3, 1] }}
      className="relative"
    >
      <div
        ref={tiltRef}
        className="group relative overflow-hidden rounded-2xl bg-[#F4F4F4] hover:bg-[#0C0C0C]
                   shadow-md hover:shadow-2xl p-8 cursor-pointer"
        role="button"
        tabIndex={0}
        onClick={() => onOpen(svc)}
        onKeyDown={(e) => (e.key === "Enter" ? onOpen(svc) : null)}
        aria-labelledby={`svc-${svc.id}`}
        style={{ transformStyle: "preserve-3d", transition: "box-shadow 220ms ease" }}
      >
        {/* decorative radial */}
        <div
          className="absolute -left-10 -top-10 w-40 h-40 rounded-full opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(83,170,164,0.12), transparent 40%)",
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
            <span className="text-[#0C0C0C] group-hover:text-white text-lg">
              {IconMap[svc.key]({ className: "text-current" })}
            </span>
          </div>
        </div>

        {/* Title & desc */}
        <h3 id={`svc-${svc.id}`} className="text-lg font-semibold text-[#0C0C0C] group-hover:text-[#F3F3F3] mb-3 font-[Urbanist]">
          {svc.title}
        </h3>

        <p className="text-sm text-[#4A4A4A] group-hover:text-[#DADADA] max-w-xl font-inter">
          {svc.desc}
        </p>

        {/* keywords */}
        <div className="mt-4 flex flex-wrap gap-2">
          {svc.keywords.map((k) => (
            <span
              key={k}
              className="text-xs px-2 py-1 rounded-full bg-white/80 text-[#0C0C0C] group-hover:bg-white/10 group-hover:text-[#F3F3F3]"
            >
              {k}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6">
          <span
            className="inline-flex items-center gap-2 text-sm font-medium
                         text-[#0C0C0C] group-hover:text-[#F3F3F3] transition-colors duration-300"
          >
            Learn more
            <svg
              className="w-4 h-4 inline-block transform group-hover:translate-x-1 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        {/* shine */}
        <div
          className="pointer-events-none absolute right-6 bottom-6 w-28 h-28 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle at 40% 40%, rgba(83,170,164,0.12), transparent 45%)",
          }}
        />
      </div>
    </motion.div>
  );
}

/* -------------------------- Services Grid (main export) -------------------------- */
export default function ServicesGrid({ services = null }) {
  const list = services ?? ALL_SERVICES;
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState(null);

  const visible = showAll ? list : list.slice(0, 3);

  function openModal(svc) {
    setActive(svc);
    document.body.style.overflow = "hidden"; // simple lock
  }
  function closeModal() {
    setActive(null);
    document.body.style.overflow = "";
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visible.map((s, i) => (
          <Card key={s.id} svc={s} index={i} onOpen={openModal} />
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

      <ServiceModal open={!!active} svc={active} onClose={closeModal} />

      {/* small CSS for accessibility and fallback */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(12px) scale(.995); }
          60% { opacity: 1; transform: translateY(-6px) scale(1.002); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </div>
  );
}
