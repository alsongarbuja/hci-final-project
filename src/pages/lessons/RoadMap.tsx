import React from "react";
import { Link, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { countries } from "../../utils/lesson";
import { useStore } from "../../store/useStore";

const CourseMap: React.FC = () => {
  const { countryId } = useParams();
  const country = countries.find((v) => v.id === countryId);
  const { unlockedLessons, completedLessons, xp, hearts, streak } = useStore();

  const isCountryCompleted = React.useMemo(() => {
    if (!country || !completedLessons[countryId!]) return false;
    return country.lessons.every((lesson) =>
      completedLessons[countryId!].includes(lesson.id),
    );
  }, [country, completedLessons, countryId]);

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
          const isCompleted = completedLessons[countryId!]?.includes(lesson.id);

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
                    className={`relative w-24 h-24 rounded-full flex items-center justify-center text-4xl text-white ${lesson.color} ${lesson.shadow} active:translate-y-1 active:shadow-none transition-all`}
                  >
                    <Icon icon={lesson.icon} className="text-white text-4xl" />
                    {isCompleted && (
                      <div className="absolute -top-1 -right-1 bg-white rounded-full p-1 shadow-lg">
                        <Icon
                          icon="lucide:check-circle-2"
                          className="text-emerald-500 text-2xl"
                        />
                      </div>
                    )}
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

        {isCountryCompleted && (
          <div className="mt-12 w-full px-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="bg-linear-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 text-center shadow-xl border-4 border-white">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
                <Icon
                  icon={country?.stampIcon || "lucide:award"}
                  className="text-white text-5xl"
                />
              </div>
              <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-2">
                Course Completed!
              </h2>
              <p className="text-emerald-50 text-sm font-bold mb-6">
                You've mastered {country?.name} and earned your official travel
                stamp.
              </p>
              <Link
                to="/passports"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg hover:bg-emerald-50 transition-colors"
              >
                <Icon icon="lucide:scroll-text" className="text-lg" />
                See Passport Badges
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseMap;
