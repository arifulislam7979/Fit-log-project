"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { workContext } from "../context/WorkoutDetaileProvider";
import Image from "next/image";

import { FaCheck, FaRegStar } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState<string>("tab1");

  const {
    addPlan,
    setAddPlan,
    saveFor,
    setSaveFor,
  } = useContext(workContext);

  // Today's Plan থেকে remove
  const handleRemove = (id: number) => {
    const workRemove = addPlan.filter((plan) => plan.id !== id);
    setAddPlan(workRemove);
  };

  // Saved থেকে remove
  const handleRemoveSaved = (id: number) => {
    const workRemove = saveFor.filter((plan) => plan.id !== id);
    setSaveFor(workRemove);
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-white p-4 md:p-10 font-sans flex justify-center">
      <div className="w-full max-w-6xl space-y-6">

        {/* HEADER SECTION */}
        <div className="space-y-1">
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
            MY PLAN
          </h1>

          <p className="text-zinc-400 text-xs sm:text-sm">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* STATS COUNTER CARD */}
        <div className="bg-[#12141a] border border-zinc-800/80 rounded-2xl p-6 grid grid-cols-3 divide-x divide-zinc-800/80 shadow-xl">

          {/* Exercises Count */}
          <div className="pr-4 sm:pr-8">
            <span className="text-zinc-400 text-xs font-semibold">
              Exercises
            </span>

            <div className="text-3xl sm:text-4xl font-black text-[#98C304] mt-1">
              0
            </div>
          </div>

          {/* Minutes Count */}
          <div className="px-4 sm:px-8">
            <span className="text-zinc-400 text-xs font-semibold">
              Minutes
            </span>

            <div className="text-3xl sm:text-4xl font-black text-white mt-1">
              0
            </div>
          </div>

          {/* Calories Count */}
          <div className="pl-4 sm:pl-8">
            <span className="text-zinc-400 text-xs font-semibold">
              Calories
            </span>

            <div className="text-3xl sm:text-4xl font-black text-white mt-1">
              0
            </div>
          </div>
        </div>

        {/* FILTER BAR & TABS */}
        <div className="rounded-2xl p-2.5 flex items-center justify-between">

          {/* Tab Controls */}
          <div
            role="tablist"
            className="tabs tabs-box bg-[#151921] p-1 rounded-2xl border border-zinc-800/50"
          >
            {/* TAB 1 */}
            <a
              role="tab"
              onClick={() => setActiveTab("tab1")}
              className={`tab font-bold text-xs transition-all duration-200 cursor-pointer rounded-2xl ${
                activeTab === "tab1"
                  ? "tab-active bg-[#2B303D] text-[#98C304] shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </a>

            {/* TAB 2 */}
            <a
              role="tab"
              onClick={() => setActiveTab("tab2")}
              className={`tab font-bold text-xs transition-all duration-200 cursor-pointer rounded-2xl ${
                activeTab === "tab2"
                  ? "tab-active bg-[#2B303D] text-[#98C304] shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Saved
            </a>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">

            <span className="text-zinc-400 text-xs hidden sm:inline-block">
              Sort By
            </span>

            <div className="relative">
              <select className="appearance-none bg-[#0b0c0e] border border-zinc-800 text-zinc-200 text-xs font-medium py-2 pl-3 pr-8 rounded-lg cursor-pointer focus:outline-none">
                <option disabled>Duration</option>
                <option>Exercises</option>
                <option>Duration</option>
                <option>Calories</option>
              </select>

              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 text-xs">
                ▼
              </div>
            </div>
          </div>
        </div>

        {/* ============================= */}
        {/* TAB CONTENT */}
        {/* ============================= */}

        {activeTab === "tab1" ? (

          addPlan.length === 0 ? (

            /* EMPTY TODAY'S PLAN */
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

            /* TODAY'S PLAN DATA */
            <div>
              {addPlan.map((plan) => (
                <div
                  key={plan.id}
                  className="bg-[#12141a] border border-zinc-800/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5 shadow-lg hover:border-zinc-700/80 transition-all duration-200"
                >

                  {/* Left Portion */}
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

                    <button className="bg-[#98C304] hover:bg-[#86efac] text-black font-bold text-xs px-4 py-2.5 rounded-full flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer active:scale-95 shadow-md shadow-[#a3e635]/10 whitespace-nowrap">
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

        ) : (
          saveFor.length === 0 ? (

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
              {saveFor.map((save) => (

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
          )
        )}

      </div>
    </div>
  );
}
