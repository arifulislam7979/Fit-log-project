import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaRegStar } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { WorkoutDataType } from "../types/fitDataType";
import { toast } from "react-toastify";

interface TabDataProps {
    planSortedData: WorkoutDataType[]
    activeTab: string
    saveSordedData: WorkoutDataType[]
    handleRemove: (id: number) => void
    handleRemoveSaved: (id: number) => void
}

const TabData = ({planSortedData, activeTab,saveSordedData,handleRemove,handleRemoveSaved}:TabDataProps) => {
    const handleMarkAs = () => {
        toast.success('Mark as Done')
    }
  return (
    <div>
      {activeTab === "tab1" ? (
        planSortedData.length === 0 ? (
          
          <div className="border border-zinc-800/80 rounded-2xl min-h-[500px] p-6 flex flex-col justify-center items-center">
            <div className="text-center space-y-4 py-12">
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                NOTHING HERE YET
              </h2>

              <p className="text-zinc-400 text-xs sm:text-sm max-w-sm mx-auto">
                Browse the library and add a lift to get today moving.
              </p>

              <div className="pt-2">
                <Link
                  href="/"
                  className="inline-block bg-[#98C304] hover:bg-[#86efac] text-black font-bold py-3 px-6 rounded-full text-xs tracking-wide uppercase transition-all duration-200 shadow-lg shadow-[#a3e635]/10"
                >
                  Go to workouts
                </Link>
              </div>
            </div>
          </div>
        ) : (
          
          <div>
            {planSortedData.map((plan, index) => (
              <div
                key={`${plan.id}-${index}`}
                className="bg-[#12141a] border border-zinc-800/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5 shadow-lg hover:border-zinc-700/80 transition-all duration-200"
              >
                
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  {/* Image */}
                  <div className="relative w-28 h-20 sm:w-32 sm:h-20 rounded-xl overflow-hidden bg-zinc-900 flex-shrink-0 border border-zinc-800/50">
                    <Image
                      src={plan.image}
                      alt={plan.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>

                  {/* Text Details */}
                  <div className="space-y-1">
                    <h2 className="font-black text-white text-base sm:text-lg tracking-wider uppercase">
                      {plan.name}
                    </h2>

                    <p className="text-zinc-400 text-xs sm:text-sm font-normal">
                      {plan.equipment}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-3 text-xs text-zinc-300 pt-1 font-medium">
                      <span className="flex items-center gap-1.5">
                        <MdOutlineAccessTime className="w-3.5 h-3.5 text-[#a3e635] fill-[#98C304]" />
                        {plan.duration} min
                      </span>

                      <span className="flex items-center gap-1.5">
                        <FaFireFlameCurved className="w-3.5 h-3.5 text-[#a3e635] fill-[#98C304]" />
                        {plan.caloriesBurned} kcal
                      </span>

                      <span className="flex items-center gap-1.5">
                        <FaRegStar className="w-3.5 h-3.5 text-[#98C304] fill-[#a3e635]" />
                        {plan.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Portion */}
                <div className="flex items-center justify-end gap-2.5 w-full sm:w-auto pt-2 sm:pt-0">
                  <Link
                    href={`${plan.id}`}
                    className="border border-zinc-800 hover:border-zinc-600 bg-[#12141a] hover:bg-zinc-800/50 text-zinc-300 font-semibold text-xs px-4 py-2.5 rounded-full transition-all duration-200 text-center whitespace-nowrap"
                  >
                    View Details
                  </Link>

                  <button onClick={handleMarkAs} className="bg-[#98C304] hover:bg-[#86efac] text-black font-bold text-xs px-4 py-2.5 rounded-full flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer active:scale-95 shadow-md shadow-[#a3e635]/10 whitespace-nowrap">
                    <FaCheck className="w-4 h-4 stroke-[3]" />
                    <span>Mark as Done</span>
                  </button>

                  <button
                    onClick={() => handleRemove(plan.id)}
                    className="p-2 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 rounded-full transition-all duration-200 cursor-pointer"
                  >
                    <RxCross1 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )
      ) : saveSordedData.length === 0 ? (
        <div className="border border-zinc-800/80 rounded-2xl min-h-[500px] p-6 flex flex-col justify-center items-center">
          <div className="text-center space-y-4 py-12">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
              NOTHING HERE YET
            </h2>

            <p className="text-zinc-400 text-xs sm:text-sm max-w-sm mx-auto">
              Browse the library and add a lift to get today moving.
            </p>

            <div className="pt-2">
              <Link
                href="/"
                className="inline-block bg-[#98C304] hover:bg-[#86efac] text-black font-bold py-3 px-6 rounded-full text-xs tracking-wide uppercase transition-all duration-200 shadow-lg shadow-[#a3e635]/10"
              >
                Go to workouts
              </Link>
            </div>
          </div>
        </div>
      ) : (
        /* SAVED DATA */
        <div>
          {saveSordedData.map((save) => (
            <div
              key={save.id}
              className="bg-[#12141a] border border-zinc-800/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5 shadow-lg hover:border-zinc-700/80 transition-all duration-200"
            >
              {/* Left Portion */}
              <div className="flex items-center gap-4 w-full sm:w-auto">
                {/* Image */}
                <div className="relative w-28 h-20 sm:w-32 sm:h-20 rounded-xl overflow-hidden bg-zinc-900 flex-shrink-0 border border-zinc-800/50">
                  <Image
                    src={save.image}
                    alt={save.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>

                {/* Text Details */}
                <div className="space-y-1">
                  <h2 className="font-black text-white text-base sm:text-lg tracking-wider uppercase">
                    {save.name}
                  </h2>

                  <p className="text-zinc-400 text-xs sm:text-sm font-normal">
                    {save.equipment}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-3 text-xs text-zinc-300 pt-1 font-medium">
                    <span className="flex items-center gap-1.5">
                      <MdOutlineAccessTime className="w-3.5 h-3.5 text-[#a3e635] fill-[#98C304]" />
                      {save.duration} min
                    </span>

                    <span className="flex items-center gap-1.5">
                      <FaFireFlameCurved className="w-3.5 h-3.5 text-[#a3e635] fill-[#98C304]" />
                      {save.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1.5">
                      <FaRegStar className="w-3.5 h-3.5 text-[#98C304] fill-[#98C304]" />
                      {save.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Portion */}
              <div className="flex items-center justify-end gap-2.5 w-full sm:w-auto pt-2 sm:pt-0">
                <Link
                  href={`${save.id}`}
                  className="border border-zinc-800 hover:border-zinc-600 bg-[#12141a] hover:bg-zinc-800/50 text-zinc-300 font-semibold text-xs px-4 py-2.5 rounded-full transition-all duration-200 text-center whitespace-nowrap"
                >
                  View Details
                </Link>

                <button
                  onClick={() => handleRemoveSaved(save.id)}
                  className="p-2 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 rounded-full transition-all duration-200 cursor-pointer"
                >
                  <RxCross1 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TabData;
