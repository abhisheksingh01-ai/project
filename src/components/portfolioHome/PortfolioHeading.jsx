// components/portfolio/PortfolioHeading.jsx
import React from "react";

/**
 * PortfolioHeading.jsx
 * - Matches the animated, premium style used in ServicesHeading.jsx
 * - Eyebrow with symmetric animated lines, large multi-line heading,
 *   soft glow underline and subtitle.
 *
 * Usage:
 * <PortfolioHeading
 *   eyebrow="Portfolio"
 *   titleLines={["Selected Projects", "— Premium Work"]}
 *   subtitle="Showcasing selected case studies and projects that highlight our craft and impact."
 * />
 */

export default function PortfolioHeading({
  eyebrow = "Portfolio",
  titleLines = ["Selected Projects", "— Premium Work"],
  subtitle = "Showcasing selected case studies and projects that highlight our craft and impact.",
}) {
  return (
    <div className="w-full text-center mb-16 relative">
      {/* Eyebrow with symmetric lines */}
      <div className="flex items-center justify-center gap-6 mb-6">
        <span
          className="hidden md:block h-[2px] w-24 bg-[#53AAA4] rounded-full animate-lineGrow origin-left"
          aria-hidden="true"
        />
        <span
          className="inline-block text-sm md:text-base font-manrope font-semibold text-[#53AAA4] tracking-widest uppercase animate-slideUp"
          style={{ letterSpacing: "0.18em" }}
        >
          {eyebrow}
        </span>
        <span
          className="hidden md:block h-[2px] w-24 bg-[#53AAA4] rounded-full animate-lineGrow origin-right"
          aria-hidden="true"
        />
      </div>

      {/* Main heading (large, premium) */}
      <h2
        className="mx-auto text-3xl md:text-5xl lg:text-6xl xl:text-[56px] font-[Urbanist] font-extrabold text-[#0C0C0C] leading-tight
                   max-w-[1200px] px-4 animate-slideUp"
        style={{ lineHeight: 0.98, textShadow: "0 6px 20px rgba(0,0,0,0.03)" }}
      >
        {titleLines.map((line, idx) => (
          <span key={idx} className="block">
            {line}
          </span>
        ))}

        {/* soft glow underline */}
        <span className="absolute left-1/2 -bottom-5 w-[44%] md:w-[36%] h-2 -translate-x-1/2 bg-[#53AAA4]/25 blur-sm rounded-full" />
      </h2>

      {/* Subtitle */}
      <p className="mt-8 text-base md:text-lg text-[#4A4A4A] max-w-3xl mx-auto font-inter px-4">
        {subtitle}
      </p>

      {/* Scoped animation styles */}
      <style>{`
        /* slideUp: subtle pop from below */
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(10px); }
          60% { opacity: 1; transform: translateY(-4px); }
          100% { transform: translateY(0); }
        }
        .animate-slideUp { animation: slideUp 600ms cubic-bezier(.2,.9,.3,1) both; }

        /* lineGrow: scale X from center -> edges */
        @keyframes lineGrow {
          0% { transform: scaleX(0); opacity: 0; }
          60% { opacity: 1; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        .animate-lineGrow { transform-origin: center; animation: lineGrow 700ms ease-out both; }

        /* reduce motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-slideUp, .animate-lineGrow { animation: none; opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}
