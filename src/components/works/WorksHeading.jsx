export default function WorksHeading() {
  return (
    <div className="w-full text-center mb-16 relative">
      {/* Eyebrow */}
      <div className="flex items-center justify-center gap-6 mb-6">
        <span className="hidden md:block h-0.5 w-24 bg-[#53AAA4] rounded-full animate-lineGrow origin-left" />
        <span
          className="inline-block text-sm md:text-base font-manrope font-semibold text-[#53AAA4] tracking-widest uppercase animate-slideUp"
          style={{ letterSpacing: "0.18em" }}
        >
          Our Recent Work
        </span>
        <span className="hidden md:block h-0.5 w-24 bg-[#53AAA4] rounded-full animate-lineGrow origin-right" />
      </div>

      {/* Main Heading */}
      <h2
        className="mx-auto text-3xl md:text-5xl lg:text-6xl xl:text-[72px]
                   font-[Urbanist] font-extrabold text-[#0C0C0C] leading-tight
                   max-w-[1200px] px-4 animate-slideUp relative"
        style={{ lineHeight: 0.98, textShadow: "0 6px 20px rgba(0,0,0,0.03)" }}
      >
        <span className="block">Selected client projects</span>
        <span className="block">that show our craft</span>

        {/* Glow underline */}
        <span className="absolute left-1/2 -bottom-5 w-[44%] md:w-[36%] h-2 -translate-x-1/2 bg-[#53AAA4]/25 blur-sm rounded-full" />
      </h2>

      {/* Subtitle */}
      <p className="mt-8 text-base md:text-lg text-[#4A4A4A] max-w-3xl mx-auto font-inter px-4">
        Premium projects across industries — interactive websites, apps and campaigns that drove measurable results.
      </p>

      {/* Scoped animations */}
      <style>{`
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(10px); }
          60% { opacity: 1; transform: translateY(-4px); }
          100% { transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 600ms cubic-bezier(.2,.9,.3,1) both;
        }

        @keyframes lineGrow {
          0% { transform: scaleX(0); opacity: 0; }
          60% { opacity: 1; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        .animate-lineGrow {
          transform-origin: center;
          animation: lineGrow 700ms ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-slideUp, .animate-lineGrow {
            animation: none !important; opacity: 1 !important; transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}
