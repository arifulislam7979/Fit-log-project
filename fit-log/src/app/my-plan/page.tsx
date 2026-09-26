"use client";
import { useContext, useState } from "react";
import { workContext } from "../context/WorkoutDetaileProvider";
import TabData from "../components/TabData";
import { WorkoutDataType } from "../types/fitDataType";
import { toast } from "react-toastify";
import { FaChevronDown } from "react-icons/fa";


export default function MyPlanPage() {
  const {
    addCount,
    saveCount,
    addTotalMinutes,
    addTotalCalories,
    saveTotalMinutes,
    SaveTotalCalories,
  } = useContext(workContext);
  const [activeTab, setActiveTab] = useState<string>("tab1");
  const [sorting, setSorting] = useState<"rating" | "duration" | "calories">(
    "duration",
  );

  const { addPlan, setAddPlan, saveFor, setSaveFor } = useContext(workContext);
  const handleRemove = (id: number) => {
    const workRemove = addPlan.filter((plan) => plan.id !== id);
    setAddPlan(workRemove);
    toast.info("Plan remove successfull");
  };

  const handleRemoveSaved = (id: number) => {
    const workRemove = saveFor.filter((save) => save.id !== id);
    setSaveFor(workRemove);
    toast.info("Saved remove successfull");
  };
  const handleMarkAs = (id: number) => {
    const markAsRemove = addPlan.filter(plan => plan.id !== id)
    setAddPlan(markAsRemove)
    toast.success("Mark as Done");
  };
  const sortedData = (data: WorkoutDataType[]) => {
    const sortData = [...data];
    if (sorting === "duration") {
      sortData.sort((a, b) => a.duration - b.duration);
    } else if (sorting === "calories") {
      sortData.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
    } else if (sorting === "rating") {
      sortData.sort((a, b) => a.rating - b.rating);
    }
    return sortData;
  };

  const planSortedData = sortedData(addPlan);
  const saveSordedData = sortedData(saveFor);

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-white p-4 md:p-10 font-sans flex justify-center">
      <div className="w-full max-w-6xl space-y-6">
        
        <div className="space-y-1">
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
            MY PLAN
          </h1>

          <p className="text-zinc-400 text-xs sm:text-sm">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        
        <div className="bg-[#12141a] border border-zinc-800/80 rounded-2xl p-6 grid grid-cols-3 divide-x divide-zinc-800/80 shadow-xl">
         
          <div className="pr-4 sm:pr-8">
            <span className="text-zinc-400 text-xs font-semibold">
              Exercises
            </span>

            <div className="text-3xl sm:text-4xl font-black text-[#98C304] mt-1">
              {activeTab === "tab1" ? addCount : saveCount}
            </div>
          </div>

          
          <div className="px-4 sm:px-8">
            <span className="text-zinc-400 text-xs font-semibold">Minutes</span>

            <div className="text-3xl sm:text-4xl font-black text-white mt-1">
              {activeTab === "tab1" ? addTotalMinutes : saveTotalMinutes}
            </div>
          </div>

         
          <div className="pl-4 sm:pl-8">
            <span className="text-zinc-400 text-xs font-semibold">
              Calories
            </span>

            <div className="text-3xl sm:text-4xl font-black text-white mt-1">
              {activeTab === "tab1" ? addTotalCalories : SaveTotalCalories}
            </div>
          </div>
        </div>

        
        <div className="rounded-2xl p-2.5 flex items-center justify-between">
          {/* Tab Controls */}
          <div
            role="tablist"
            className="tabs tabs-box bg-[#151921] p-1 rounded-2xl border border-zinc-800/50"
          >
            
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
              <select
                value={sorting}
                onChange={(e) =>
                  setSorting(
                    e.target.value as "duration" | "calories" | "rating",
                  )
                }
                className="appearance-none bg-[#0b0c0e] border border-zinc-800 text-zinc-200 text-xs font-medium py-2 pl-3 pr-8 rounded-lg cursor-pointer focus:outline-none"
              >
                <option disabled>Select Option</option>
                <option value={"duration"}>Duration</option>
                <option value={"calories"}>Calories</option>
                <option value={"rating"}>Rating</option>
              </select>

              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 text-xs">
                <FaChevronDown />
              </div>
            </div>
          </div>
        </div>

        <TabData
          handleRemove={handleRemove}
          handleRemoveSaved={handleRemoveSaved}
          activeTab={activeTab}
          planSortedData={planSortedData}
          saveSordedData={saveSordedData}
          handleMarkAs={handleMarkAs}
        ></TabData>
      </div>
    </div>
  );
}
