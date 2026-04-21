import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useNavigate, useParams } from "react-router-dom";
import { chapters, type NepalCategory } from "../../utils/lesson";
import { useStore } from "../../store/useStore";

const LessonPage: React.FC = () => {
  const { countryId, lessonId } = useParams();
  const { recoverHearts, completedLessons } = useStore();
  const navigate = useNavigate();

  const infos =
    chapters.find((v) => v.id === countryId)?.information[
      lessonId as NepalCategory
    ] || [];

  const isAlreadyCompleted = completedLessons[countryId || ""]?.includes(
    lessonId || "",
  );

  const [visibleSteps, setVisibleSteps] = useState<number[]>(() =>
    isAlreadyCompleted ? infos.map((_, i) => i) : [0],
  );

  const currentStep = visibleSteps[visibleSteps.length - 1];
  const isLastStep = currentStep === infos.length - 1;

  const activeIcon = infos[currentStep]?.illustration;
  const activeColor = infos[currentStep]?.accentColor;

  const handleNext = () => {
    if (!isLastStep) {
      setVisibleSteps((prev) => [...prev, prev.length]);
      if (currentStep === infos.length - 2) {
        recoverHearts(2);
      }
    }
  };

  useEffect(() => {
    const lastCard = document.getElementById(`step-${currentStep}`);
    if (lastCard) {
      lastCard.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentStep]);

  return (
    <div className="min-h-screen bg-slate-50 pb-32">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white border-b-2 border-slate-200 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <Icon
              icon="lucide:arrow-left"
              className="text-2xl text-slate-600"
            />
          </button>
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${activeColor} text-white`}>
              <Icon icon={activeIcon} className="text-xl" />
            </div>
            <h1 className="font-black text-slate-700 uppercase tracking-tight">
              {lessonId}
            </h1>
          </div>
          <div className="w-10" /> {/* Spacer for symmetry */}
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-6 space-y-8">
        <AnimatePresence mode="popLayout">
          {visibleSteps.map((idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                id={`step-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`
                  relative p-8 rounded-3xl border-2 transition-all duration-500
                  ${
                    isEven
                      ? "bg-white border-slate-200 text-slate-600 shadow-sm ml-0 mr-12"
                      : "bg-slate-800 border-slate-700 shadow-xl ml-12 mr-0 text-white"
                  }
                `}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-black uppercase tracking-widest opacity-50`}
                    >
                      Step {idx + 1}
                    </span>
                    <div
                      className={`h-px flex-1 opacity-20 ${isEven ? "bg-slate-900" : "bg-white"}`}
                    />
                  </div>

                  <div className="flex items-start gap-4">
                    <Icon
                      icon={infos[idx].illustration}
                      className={`text-3xl shrink-0 ${isEven ? "text-slate-400" : "text-slate-400"}`}
                    />
                    <h2 className="text-2xl font-black leading-tight">
                      {infos[idx].title}
                    </h2>
                  </div>

                  <p
                    className={`text-lg font-bold leading-relaxed ${isEven ? "text-slate-600" : "text-slate-300"}`}
                  >
                    {infos[idx].content}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 p-6 bg-linear-to-t from-slate-50 via-slate-50 to-transparent">
        <div className="max-w-4xl mx-auto flex justify-center md:justify-end">
          <button
            onClick={isLastStep ? () => navigate("quiz") : handleNext}
            className={`
              px-12 py-4 rounded-2xl font-black text-lg uppercase tracking-wider transition-all
              shadow-[0_6px_0_0_rgba(0,0,0,0.2)] active:translate-y-1 active:shadow-none
              ${
                isLastStep
                  ? "bg-orange-500 text-white shadow-orange-700 hover:bg-orange-400"
                  : "bg-emerald-500 text-white shadow-emerald-700 hover:bg-emerald-400"
              }
            `}
          >
            {isLastStep ? (
              <span className="flex items-center gap-2">
                <Icon icon="lucide:graduation-cap" className="text-2xl" />
                Start Quiz
              </span>
            ) : (
              "Continue"
            )}
          </button>
        </div>
      </footer>
    </div>
  );
};

export default LessonPage;
