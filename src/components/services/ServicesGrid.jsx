import { useState } from "react";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";
import { ALL_SERVICES } from "./serviceData";

export default function ServicesGrid({ services = null }) {
  const list = services ?? ALL_SERVICES;
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState(null);
  const visible = showAll ? list : list.slice(0, 3);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visible.map((s, i) => <ServiceCard key={s.id} svc={s} index={i} onOpen={setActive} />)}
      </div>
      <div className="mt-10 flex justify-center">
        <button onClick={() => setShowAll(v => !v)} className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-white font-medium shadow-lg transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#53AAA4]/30 hover:scale-[1.03] active:scale-[0.99] bg-[#53AAA4] hover:bg-[#4f9890]" aria-expanded={showAll}>
          <span>{showAll ? "View less" : "View more Services"}</span>
          <svg className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : "rotate-0"}`} viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <ServiceModal open={!!active} svc={active} onClose={() => setActive(null)} />
    </div>
  );
}
