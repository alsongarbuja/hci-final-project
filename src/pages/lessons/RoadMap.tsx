import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const lessons = [
  {
    id: "intro",
    name: "Landmarks",
    icon: "🏛️",
    color: "bg-emerald-500",
    shadow: "shadow-[0_6px_0_0_rgba(5,150,105,1)]",
    unlocked: true,
  },
  {
    id: "nepal",
    name: "Nepal",
    icon: "🏔️",
    color: "bg-sky-500",
    shadow: "shadow-[0_6px_0_0_rgba(14,165,233,1)]",
    unlocked: true,
  },
  {
    id: "culture",
    name: "Festivals",
    icon: "🏮",
    color: "bg-orange-400",
    shadow: "shadow-[0_6px_0_0_rgba(251,146,60,1)]",
    unlocked: false,
  },
  {
    id: "flags",
    name: "Flags",
    icon: "🚩",
    color: "bg-rose-500",
    shadow: "shadow-[0_6px_0_0_rgba(225,29,72,1)]",
    unlocked: false,
  },
];

const RoadMap: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-slate-200 px-6 py-4">
        <div className="max-w-2xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-slate-400 hover:text-slate-600 font-bold"
            >
              ← BACK
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-orange-500 font-black">🔥 7</span>
              <span className="text-rose-500 font-black">❤️ 5</span>
              <span className="text-sky-500 font-black">💎 120</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-md mx-auto pt-12 flex flex-col items-center gap-12">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-black text-slate-700 uppercase tracking-wide">
            Unit 1: Asia & Peaks
          </h1>
          <p className="text-slate-500 font-bold">
            Discover the roof of the world
          </p>
        </div>

        {lessons.map((lesson, index) => (
          <motion.div
            key={lesson.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative ${index % 2 === 0 ? "right-8" : "left-8"}`}
          >
            {lesson.unlocked ? (
              <Link
                to={`/lesson/${lesson.id}`}
                className="flex flex-col items-center group"
              >
                <div
                  className={`w-24 h-24 ${lesson.color} ${lesson.shadow} rounded-full flex items-center justify-center text-4xl group-active:shadow-none group-active:translate-y-1 transition-all`}
                >
                  {lesson.icon}
                </div>
                <span className="mt-4 font-black text-slate-700 uppercase tracking-tighter">
                  {lesson.name}
                </span>
              </Link>
            ) : (
              <div className="flex flex-col items-center opacity-40 grayscale cursor-not-allowed">
                <div className="w-24 h-24 bg-slate-300 shadow-[0_6px_0_0_rgba(203,213,225,1)] rounded-full flex items-center justify-center text-4xl">
                  🔒
                </div>
                <span className="mt-4 font-black text-slate-700 uppercase tracking-tighter">
                  {lesson.name}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RoadMap;
