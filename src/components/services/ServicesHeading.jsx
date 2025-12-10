export default function ServicesHeading({ eyebrow="Our Services", titleLines=["High-impact services", "for your business"], subtitle="We craft tailored solutions..." }) {
  return (
    <div className="w-full text-center mb-16 relative">
      <div className="flex items-center justify-center gap-6 mb-6">
        <span className="hidden md:block h-0.5 w-24 bg-[#53AAA4] rounded-full animate-lineGrow origin-left" />
        <span className="inline-block text-sm md:text-base font-manrope font-semibold text-[#53AAA4] tracking-widest uppercase animate-slideUp">{eyebrow}</span>
        <span className="hidden md:block h-0.5 w-24 bg-[#53AAA4] rounded-full animate-lineGrow origin-right" />
      </div>
      <h2 className="mx-auto text-3xl md:text-5xl lg:text-6xl xl:text-[72px] font-[Urbanist] font-extrabold text-[#0C0C0C] leading-tight max-w-[1200px] px-4 animate-slideUp" style={{ lineHeight: 0.98, textShadow:"0 6px 20px rgba(0,0,0,0.03)" }}>
        {titleLines.map((line, idx) => <span key={idx} className="block">{line}</span>)}
        <span className="absolute left-1/2 -bottom-5 w-[44%] md:w-[36%] h-2 -translate-x-1/2 bg-[#53AAA4]/25 blur-sm rounded-full" />
      </h2>
      <p className="mt-8 text-base md:text-lg text-[#4A4A4A] max-w-3xl mx-auto font-inter px-4">{subtitle}</p>
    </div>
  );
}
