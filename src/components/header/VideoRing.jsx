import React from "react";

export default function VideoRing({ src }) {
  return (
    <div className="relative w-80 h-80 rounded-full flex items-center justify-center group overflow-hidden">
      
      {/* Outer Ring */}
      <div
        className="absolute w-full h-full rounded-full border-8 
        border-[#ABDDD9]/10 group-hover:border-[#53AAA4] 
        transition-all duration-500"
      ></div>

      {/* Middle Ring */}
      <div
        className="absolute w-[88%] h-[88%] rounded-full border-4 
        border-[#ABDDD9]/5 group-hover:border-[#53AAA4]/60 
        transition-all duration-500"
      ></div>

      {/* Video */}
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-[82%] h-[82%] rounded-full object-cover border-4
        border-[#0C0C0C] group-hover:scale-[1.06]
        group-hover:shadow-[0_0_25px_#53AAA4]
        transition-all duration-500"
      ></video>
    </div>
  );
}
