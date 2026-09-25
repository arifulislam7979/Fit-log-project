import Image from "next/image";
import { WorkoutDataType } from "../types/fitDataType";
import { FaCalendarPlus, FaRegBookmark } from "react-icons/fa";

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

const WorkoutDetailPage = async ({ params }: DetailPageProps) => {
  const { id } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  const data: WorkoutDataType = await res.json();

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-white p-4 md:p-10 flex items-center justify-center font-sans">
      {/* Main Outer Container */}
      <div className="w-full max-w-6xl bg-[#12141a] border border-zinc-800/80 rounded-3xl p-6 md:p-8 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Side: Exercise Image */}
          <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] rounded-2xl overflow-hidden bg-zinc-900">
            <Image
              src={data.image}
              alt={data.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Side: Details Content */}
          <div className="flex flex-col justify-between h-full space-y-6">
            <div>
              {/* Title & Description */}
              <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-2">
                {data.name}
              </h1>
              <p className="text-zinc-400 text-xs sm:text-sm mb-4 leading-relaxed font-normal">
                {data.description}
              </p>

              {/* Muscle Groups */}
              <div className="flex flex-wrap gap-2 mb-6">
                {data.muscleGroups?.map((group) => (
                  <span
                    key={group}
                    className="bg-[#a3e635] text-black font-bold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider"
                  >
                    {group}
                  </span>
                ))}
              </div>

              {/* Details List (Card Table) */}
              <div className="bg-[#181b22] rounded-xl p-4 sm:p-5 space-y-3 mb-6 border border-zinc-800/60">
                <div className="flex justify-between items-center text-xs sm:text-sm border-b border-zinc-800/80 pb-2.5">
                  <span className="text-zinc-500 font-bold uppercase tracking-wider text-[11px]">
                    EQUIPMENT
                  </span>
                  <span className="font-semibold text-zinc-200">
                    {data.equipment}
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs sm:text-sm border-b border-zinc-800/80 pb-2.5">
                  <span className="text-zinc-500 font-bold uppercase tracking-wider text-[11px]">
                    DIFFICULTY
                  </span>
                  <span className="font-semibold text-zinc-200">
                    {data.difficulty}
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs sm:text-sm border-b border-zinc-800/80 pb-2.5">
                  <span className="text-zinc-500 font-bold uppercase tracking-wider text-[11px]">
                    SETS
                  </span>
                  <span className="font-semibold text-zinc-200">
                    {data.sets}
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs sm:text-sm border-b border-zinc-800/80 pb-2.5">
                  <span className="text-zinc-500 font-bold uppercase tracking-wider text-[11px]">
                    REPS
                  </span>
                  <span className="font-semibold text-zinc-200">
                    {data.reps}
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs sm:text-sm border-b border-zinc-800/80 pb-2.5">
                  <span className="text-zinc-500 font-bold uppercase tracking-wider text-[11px]">
                    DURATION
                  </span>
                  <span className="font-semibold text-zinc-200">
                    {data.duration} min
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs sm:text-sm border-b border-zinc-800/80 pb-2.5">
                  <span className="text-zinc-500 font-bold uppercase tracking-wider text-[11px]">
                    CALORIES
                  </span>
                  <span className="font-semibold text-zinc-200">
                    {data.caloriesBurned} kcal
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-zinc-500 font-bold uppercase tracking-wider text-[11px]">
                    RATING
                  </span>
                  <span className="font-semibold text-zinc-200">
                    {data.rating}
                  </span>
                </div>
              </div>

              {/* Instructions */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-200 mb-3">
                  Instructions
                </h2>
                <ol className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
                  {data.instructions?.map((step, idx) => (
                    <li key={idx} className="flex gap-2.5 leading-relaxed">
                      <span className="font-bold text-zinc-500">
                        {idx + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Bottom Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3 pt-4">
              <button className="bg-[#a3e635] hover:bg-[#86efac] text-black font-bold py-3 px-5 rounded-lg text-xs tracking-wide uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95">
                <FaCalendarPlus className="w-4 h-4 stroke-[3]" />
                <span>Add to today&apos;s plan</span>
              </button>

              <button className="border border-zinc-800 hover:border-zinc-600 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-300 font-semibold py-3 px-5 rounded-lg text-xs tracking-wide uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95">
                <FaRegBookmark className="w-4 h-4 text-zinc-400" />
                <span>Save for later</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailPage;