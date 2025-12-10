import React from "react";

export default function CardMini({ work }) {
  return (
    <a href={work.href} className="block rounded-2xl overflow-hidden bg-white shadow-lg">
      <div className="w-full h-44 md:h-48 lg:h-56 bg-linear-to-br from-gray-100 to-gray-200">
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
          <svg className="w-4 h-4 text-[#888]" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </a>
  );
}
