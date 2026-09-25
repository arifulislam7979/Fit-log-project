import Image from "next/image";
import { WorkoutDataType } from "../types/fitDataType";
import { FaRegStar } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import Link from "next/link";

interface WorkoutProps {
  workout: WorkoutDataType;
}

const WorkoutData = ({ workout }: WorkoutProps) => {
  return (
    <Link href={`/${workout.id}`}>
      <div className="bg-[#12141a] border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 flex flex-col group">
        {/* Top Image Container */}
        <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-zinc-900">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Card Content Body */}
        <div className="p-5 flex flex-col justify-between flex-1">
          <div>
            {/* Muscle Group Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="bg-[#a3e635] text-black text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-white text-lg font-black uppercase tracking-wide mb-1 leading-snug">
              {workout.name}
            </h3>

            {/* Subtitle / Equipment */}
            <p className="text-zinc-500 text-xs font-medium mb-6">
              {workout.equipment}
            </p>
          </div>

          {/* Bottom Meta Stats (Duration, Calories, Rating) */}
          <div className="flex items-center gap-4 text-zinc-400 text-xs pt-2 border-t border-zinc-800/50">
            {/* Duration */}
            <div className="flex items-center gap-1.5">
              <MdAccessTime />
              <span>{workout.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1.5">
              <FaFireFlameCurved />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <FaRegStar />
              <span>{workout.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutData;
