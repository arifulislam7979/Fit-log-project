import Image from "next/image";
import heroimage from "@/assets/banner.png";

const Hero = () => {
  return (
    <section className="bg-[#0b0c0e] px-4 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto bg-[#12141a] border border-zinc-800/80 rounded-2xl p-6 sm:p-10 md:p-14  overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="flex-1 max-w-xl z-10">
          {/* Subtitle */}
          <span className="text-[#98C304] text-xs font-bold tracking-widest mb-3 block">
            WORKOUT LIBRARY
          </span>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl  font-black text-white tracking-tight uppercase leading-[1.05] mb-4">
            TRAIN WITH INTENT. LOG  EVERY SET.
          </h1>

          {/* Description */}
          <p className="text-zinc-400 text-sm sm:text-base font-normal leading-relaxed mb-8 max-w-md">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* CTA Button */}
          <a href='#library' className="bg-[#98C304] hover:bg-[#86efac] text-black font-bold text-xs sm:text-sm tracking-wider  px-6 py-3.5 rounded-lg transition-all duration-200 shadow-md active:scale-95">
            BROWSE WORKOUTS
          </a>
        </div>

        {/* Right Image Container */}
        <div className="flex-1 w-full flex justify-center md:justify-end items-center z-10">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px]">
            <Image
              src={heroimage}
              alt="Gym training workout equipment"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
