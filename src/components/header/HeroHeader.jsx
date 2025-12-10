import BackgroundGrid from "./BackgroundGrid";
import VideoRing from "./VideoRing";

export default function HeroHeader() {
  return (
    <section className="relative w-full bg-[#0C0C0C] text-[#F3F3F3] overflow-hidden py-24 px-6">
      <BackgroundGrid />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 pl-6 md:pl-[150px]">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight font-[Urbanist] tracking-tight">
            Ready to take your <br />
            <span className="text-[#53aaa4]">Business Growth</span> <br />
            to the next level?
          </h1>
          <p className="text-[#F3F3F3]/80 max-w-md mt-5 text-[15px] leading-relaxed font-inter">
            From strategy to execution, we help businesses scale faster with powerful 
            websites and campaigns built for performance and profitability.
          </p>
        </div>
        <div className="flex-1 flex justify-center z-10">
          <VideoRing src="/Hero-06.mp4" />
        </div>
      </div>
    </section>
  );
}
