import React from "react";
import heroImg from '../../assest/1.png'
export default function HeroHeader() {
    return (
        <section className="relative w-full bg-[#0C0C0C] text-[#F3F3F3] overflow-hidden py-24 px-6">
            {/* LEFT BACKGROUND SQUARE GRID (Behind Content) */}
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
                {/* subtle gradient fade so pattern doesn't look harsh near content */}
                <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-r from-transparent to-[#0C0C0C]"></div>
            </div>

            {/* MAIN CONTENT (moved right with padding so it never overlaps pattern) */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 pl-6 md:pl-[130px]">


                {/* LEFT CONTENT */}
                <div className="flex-1">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight font-[Urbanist]">
                        Ready to take your <br />
                        <span className="text-[#53aaa4]">Business Growth</span> <br />
                        to the next level?
                    </h1>

                    <p className="text-[#F3F3F3]/80 max-w-md mt-4 text-[15px] font-inter">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                        gravida libero cursus nulla eu pulvinar.
                    </p>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex-1 flex justify-center relative z-10">
                    <div className="relative w-80 h-80 rounded-full flex items-center justify-center group">

                        {/* Outer Ring */}
                        <div className="absolute w-full h-full rounded-full border-[8px] 
            border-[#ABDDD9]/10 group-hover:border-[#53AAA4] 
            transition-all duration-500"></div>

                        {/* Inner Ring */}
                        <div className="absolute w-[88%] h-[88%] rounded-full border-[4px] 
            border-[#ABDDD9]/5 group-hover:border-[#53AAA4]/60 
            transition-all duration-500"></div>

                        {/* IMAGE */}
                        <img
                            src={heroImg}
                            alt="Team"
                            className="w-[82%] h-[82%] rounded-full object-cover border-4 
            border-[#0C0C0C] group-hover:scale-[1.06] 
            group-hover:shadow-[0_0_25px_#53AAA4] 
            transition-all duration-500"
                        />
                    </div>
                </div>

            </div>
        </section>


    );
}
