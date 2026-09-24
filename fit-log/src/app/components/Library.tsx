import { WorkoutDataType } from "../types/fitDataType";
import WorkoutData from "./WorkoutData";

const getFitData = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Data not found", error);
    return [];
  }
};
const Library = async () => {
  const workoutData = await getFitData();
  console.log(workoutData);
  return (
    <section id='library' className="w-full bg-[#0b0c0e] text-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto py-6 ">
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl tracking-tight uppercase">
          THE LIBRARY
        </h2>
        <p className="text-gray-400  ">
          Twelve lifts covering every major muscle group.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {
                workoutData.map((workout: WorkoutDataType) => (
                    <WorkoutData key={workout.id} workout={workout}></WorkoutData>
                ))
            }
        </div>
      </div>
      
    </section>
  );
};

export default Library;
