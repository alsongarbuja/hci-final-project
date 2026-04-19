import React from "react";
import { Link, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { countries } from "../../utils/lesson";
import { useStore } from "../../store/useStore";

const CourseMap: React.FC = () => {
  const { countryId } = useParams();
  const country = countries.find((v) => v.id === countryId);
  const { unlockedLessons, xp, hearts, streak } = useStore();

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-100 pb-24">
      <header className="sticky top-0 z-50 bg-white border-b-2 border-slate-200 px-6">
        <nav className="max-w-300 mx-auto py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_4px_0_0_rgba(16,185,129,1)] group-active:shadow-none group-active:translate-y-1 transition-all">
              <span className="text-white text-2xl font-black">G</span>
            </div>
            <span className="text-2xl font-black tracking-tight text-emerald-500">
              geoquest
            </span>
          </Link>
          <div className="flex w-full gap-6 items-center justify-end">
            <div className="flex items-center gap-2 font-black text-orange-500">
              <Icon icon="lucide:flame" /> {streak}
            </div>
            <div className="flex items-center gap-2 font-black text-yellow-500">
              <Icon icon="carbon:growth" /> {xp}
            </div>
            <div className="flex items-center gap-2 font-black text-rose-500">
              <Icon icon="twemoji:red-heart" /> {hearts}
            </div>
          </div>
          <div className="w-8" />
        </nav>
      </header>

      <div className="max-w-md mx-auto pt-10 flex flex-col items-center">
        <header className="text-center mb-12 px-6">
          <h1 className="text-3xl font-black text-slate-700 leading-tight uppercase">
            Discover {country?.name}
          </h1>
          <p className="text-slate-500 font-bold mt-2">{country?.tagline}</p>
        </header>

        {country?.lessons.map((lesson, index) => {
          const xPos = index % 2 === 0 ? (index % 4 === 0 ? 40 : -40) : 0;

          return (
            <div
              key={lesson.id}
              className="relative mb-10"
              style={{ transform: `translateX(${xPos}px)` }}
            >
              <div className="flex flex-col items-center">
                {unlockedLessons[countryId!].includes(lesson.id) ? (
                  <Link
                    to={`${lesson.id}`}
                    className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl text-white ${lesson.color} ${lesson.shadow} active:translate-y-1 active:shadow-none transition-all`}
                  >
                    <Icon icon={lesson.icon} className="text-white text-4xl" />
                  </Link>
                ) : (
                  <div className="w-24 h-24 rounded-full flex items-center justify-center text-4xl bg-slate-200 shadow-[0_6px_0_0_rgba(203,213,225,1)] grayscale opacity-60">
                    <Icon icon="lucide:lock" className="text-slate-400" />
                  </div>
                )}

                <span
                  className={`mt-4 font-black uppercase tracking-widest text-xs ${unlockedLessons[countryId!].includes(lesson.id) ? "text-slate-700" : "text-slate-300"}`}
                >
                  {lesson.name}
                </span>
              </div>

              {index < country?.lessons.length - 1 && (
                <div className="absolute top-32 left-1/2 -translate-x-1/2 flex flex-col gap-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-slate-100"
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseMap;
