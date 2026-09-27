'use client'
import { useState } from "react";
import { WorkoutDataType } from "../types/fitDataType";
import WorkoutData from "./WorkoutData";

interface LibrarySearchProps {
  workoutData: WorkoutDataType[];
}
const LibrarySearch = ({ workoutData }: LibrarySearchProps) => {
  const [search, setSearch] = useState<string>("");
  const filteredSearch = workoutData.filter((workout) => {
    const seacrhText = search.toLowerCase();

    const matchName = workout.name.toLowerCase().includes(seacrhText);
    const matchTag = workout.muscleGroups.some((tag) =>
      tag.toLowerCase().includes(seacrhText),
    );
    return matchName || matchTag;
  });
  return (
    <div>
      <div className="my-8">
        <input
          type="text"
          placeholder="Search by workout name or tag..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 bg-[#181b22] border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none focus:border-[#a3e635] transition"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 cursor-pointer">
        {filteredSearch.map((workout: WorkoutDataType) => (
          <WorkoutData key={workout.id} workout={workout}></WorkoutData>
        ))}
      </div>
      
      {filteredSearch.length === 0 && (
        <div className="text-center py-16">
          <p className="text-zinc-500 text-lg">
            No workouts found.
          </p>
        </div>
      )}
    </div>
  );
};

export default LibrarySearch;
