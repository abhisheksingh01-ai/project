import { motion } from "framer-motion";
import useTilt from "./useTilt";
import { IconMap } from "./icons";

export default function ServiceCard({ svc, index, onOpen }) {
  const tiltRef = useTilt();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.995 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="relative"
    >
      <div
        ref={tiltRef}
        className="group relative overflow-hidden rounded-2xl bg-[#F4F4F4] hover:bg-[#0C0C0C] shadow-md hover:shadow-2xl p-8 cursor-pointer"
        role="button"
        tabIndex={0}
        onClick={() => onOpen(svc)}
        onKeyDown={(e) => e.key === "Enter" && onOpen(svc)}
        style={{ transformStyle: "preserve-3d", transition: "box-shadow 220ms ease" }}
      >
        <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle at 30% 30%, rgba(83,170,164,0.12), transparent 40%)" }} />
        <div className="mb-6 w-14 h-14 rounded-full flex items-center justify-center bg-white/90 group-hover:bg-[#53AAA4] transition-colors duration-400 border border-white/30 group-hover:border-[#53AAA4]">
          {IconMap[svc.key]({ className: "text-current" })}
        </div>
        <h3 className="text-lg font-semibold text-[#0C0C0C] group-hover:text-[#F3F3F3] mb-3 font-[Urbanist]">{svc.title}</h3>
        <p className="text-sm text-[#4A4A4A] group-hover:text-[#DADADA] max-w-xl font-inter">{svc.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {svc.keywords.map((k) => <span key={k} className="text-xs px-2 py-1 rounded-full bg-white/80 text-[#0C0C0C] group-hover:bg-white/10 group-hover:text-[#F3F3F3]">{k}</span>)}
        </div>
        <div className="mt-6">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-[#0C0C0C] group-hover:text-[#F3F3F3] transition-colors duration-300">
            Learn more
            <svg className="w-4 h-4 inline-block transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
