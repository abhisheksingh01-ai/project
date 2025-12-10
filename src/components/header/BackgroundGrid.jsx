import React from "react";

export default function BackgroundGrid() {
  return (
    <div
      aria-hidden="true"
      className="absolute left-0 top-0 h-full w-[280px] z-0 pointer-events-none"
    >
      <div className="absolute inset-y-0 left-0 w-full flex items-start">
        <div className="grid grid-cols-6 gap-3 mt-10 ml-6">
          {Array.from({ length: 72 }).map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-[#ABDDD9]/10 rounded-sm blur-[0.2px] shadow-[0_0_4px_rgba(171,221,217,0.03)]"
            />
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-0 h-full w-20 bg-linear-to-r from-transparent to-[#0C0C0C]" />
    </div>
  );
}
