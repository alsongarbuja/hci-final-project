import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Icon } from "@iconify/react";
import { useNavigate, useParams } from "react-router-dom";
import { chapters, type NepalCategory } from "../../utils/lesson";

const LessonPage: React.FC = () => {
  const { countryId, lessonId } = useParams();
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const infos =
    chapters.find((v) => v.id === countryId)?.information[
      lessonId as NepalCategory
    ] || [];

  const [visibleSteps, setVisibleSteps] = useState([0]);
  const currentStep = visibleSteps[visibleSteps.length - 1];
  const isLastStep = currentStep === infos.length - 1;

  // Track the "active" icon based on scroll or current progress
  const activeIcon = infos[currentStep].illustration;
  const activeColor = infos[currentStep].accentColor;

  const handleNext = () => {
    if (!isLastStep) {
      setVisibleSteps((prev) => [...prev, prev.length]);
    }
  };

  // Auto-scroll to the newest card
  useEffect(() => {
    const lastCard = document.getElementById(`step-${currentStep}`);
    if (lastCard) {
      lastCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [visibleSteps]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <header className="max-w-4xl mx-auto px-6 py-6 flex items-center gap-6 pointer-events-auto bg-white/80 backdrop-blur-md rounded-b-3xl border-b-2 border-slate-200">
          <button onClick={() => navigate(-1)} className="text-slate-400">
            <Icon icon="lucide:x" className="text-3xl" />
          </button>
          <div className="grow h-3 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-emerald-500"
              animate={{
                width: `${((currentStep + 1) / infos.length) * 100}%`,
              }}
            />
          </div>
        </header>

        {/* The "Observer" Mascot: Fixed on screen */}
        <div className="max-w-4xl mx-auto px-6 relative">
          <motion.div
            className="absolute top-24 left-6 md:left-auto md:right-6 w-24 h-24 md:w-32 md:h-32 pointer-events-auto"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <img
              src="/mascot.png"
              alt="Mascot"
              className="w-full h-full object-contain drop-shadow-xl"
            />
            {/* Dynamic Icon Badge: Changes as you scroll/unlock */}
            <motion.div
              key={activeIcon}
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              className={`absolute -bottom-2 -right-2 w-10 h-10 md:w-12 md:h-12 rounded-full ${activeColor} border-4 border-white flex items-center justify-center shadow-lg text-white`}
            >
              <Icon icon={activeIcon} className="text-xl md:text-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <main className="pt-64 pb-48 px-6 max-w-3xl mx-auto w-full space-y-20">
        <AnimatePresence>
          {visibleSteps.map((idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                id={`step-${idx}`}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                className={`flex flex-col ${isEven ? "items-start" : "items-end"} w-full`}
              >
                <div
                  className={`
                    max-w-[85%] p-8 rounded-[2.5rem] shadow-xl border-4 transition-all duration-500
                    ${
                      isEven
                        ? "bg-white border-slate-200 rounded-tl-none text-black text-left shadow-slate-200/50"
                        : "bg-slate-800 border-slate-700 rounded-tr-none text-right text-white shadow-black/10"
                    }
                  `}
                >
                  <div
                    className={`flex items-center gap-3 mb-4 ${isEven ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${infos[idx].accentColor}`}
                    >
                      <Icon
                        icon={infos[idx].illustration}
                        className="text-white text-xl"
                      />
                    </div>
                    <h2 className="text-xl font-black uppercase tracking-tighter">
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

      {/* 3. FIXED ACTION FOOTER */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 bg-linear-to-t from-slate-50 via-slate-50 to-transparent">
        <div className="max-w-4xl mx-auto flex justify-center md:justify-end">
          <button
            onClick={isLastStep ? () => navigate("quiz") : handleNext}
            className={`
              px-12 py-4 rounded-2xl font-black text-lg uppercase tracking-wider transition-all
              shadow-[0_6px_0_0_rgba(0,0,0,0.2)] active:translate-y-1 active:shadow-none
              ${
                isLastStep
                  ? "bg-orange-500 text-white shadow-orange-700"
                  : "bg-emerald-500 text-white shadow-emerald-700"
              }
            `}
          >
            {isLastStep ? (
              <span className="flex items-center gap-2">
                <Icon icon="lucide:zap" /> Start Quiz
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
