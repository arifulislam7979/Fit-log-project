import Link from "next/link";
import { FaDumbbell } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#0b0c0e] text-white flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-2xl bg-[#a3e635] text-black flex items-center justify-center shadow-lg shadow-lime-500/20">
            <FaDumbbell className="text-4xl" />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-black tracking-tight text-[#a3e635]">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mt-4">
          Workout Not Found
        </h2>

        {/* Description */}
        <p className="text-zinc-400 mt-3 leading-relaxed">
          Looks like this workout took a rest day. The page you&apos;re looking for
          doesn&apos;t exist or may have been moved.
        </p>

        {/* Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center
            bg-[#a3e635] text-black font-bold
            px-6 py-3 rounded-xl
            hover:bg-lime-300
            transition duration-300
            shadow-lg shadow-lime-500/10"
          >
            Back to Workouts
          </Link>
        </div>

        {/* Small text */}
        <p className="text-zinc-600 text-xs mt-8 uppercase tracking-widest">
          Keep training • Keep improving
        </p>
      </div>
    </div>
    
  );
};

export default NotFoundPage;
