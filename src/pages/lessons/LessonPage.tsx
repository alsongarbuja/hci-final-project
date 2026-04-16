import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useNavigate, useParams } from "react-router-dom";
import { chapters, type NepalCategory } from "../../utils/lesson";

const LessonPage: React.FC = () => {
  const { countryId, lessonId } = useParams();
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const infos = chapters.find((v) => v.id === countryId)?.information[
    lessonId as NepalCategory
  ];
  const progress = ((currentStep + 1) / infos!.length) * 100;

  const handleNext = () => {
    if (currentStep < infos!.length - 1) {
      setCurrentStep((s) => s + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-hidden">
      <header className="max-w-4xl mx-auto w-full px-6 py-10 flex items-center gap-6">
        <button
          onClick={() => navigate(-1)}
          className="text-slate-400 hover:text-slate-600"
        >
          <Icon icon="lucide:x" className="text-3xl" />
        </button>
        <div className="grow h-4 bg-slate-100 rounded-full border-2 border-slate-100">
          <motion.div
            className="h-full bg-emerald-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <main className="grow flex flex-col items-center justify-center px-6 max-w-2xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full text-center"
          >
            <div
              className={`w-44 h-44 mx-auto mb-10 rounded-[3rem] ${infos![currentStep].accentColor} flex items-center justify-center shadow-[0_12px_0_0_rgba(0,0,0,0.1)]`}
            >
              <Icon
                icon={infos![currentStep].illustration}
                className="text-white text-7xl"
              />
            </div>

            <h1 className="text-3xl font-black text-slate-700 mb-6 uppercase tracking-tighter">
              {infos![currentStep].title}
            </h1>

            <div className="bg-slate-50 border-2 border-slate-200 p-8 rounded-4xl shadow-[0_4px_0_0_rgba(226,232,240,1)]">
              <p className="text-xl text-slate-600 font-bold leading-relaxed">
                {infos![currentStep].content}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t-2 border-slate-200 p-6 md:p-10 bg-white">
        <div className="max-w-4xl mx-auto flex justify-between gap-4">
          <div className="w-1/3">
            {currentStep > 0 && (
              <button
                onClick={handlePrev}
                className="w-full py-4 bg-white text-slate-400 border-2 border-slate-200 rounded-2xl font-black text-lg shadow-[0_5px_0_0_rgba(226,232,240,1)] hover:bg-slate-50 active:shadow-none active:translate-y-1 transition-all uppercase"
              >
                Back
              </button>
            )}
          </div>

          <div className="w-2/3 flex justify-end">
            {currentStep === infos!.length - 1 ? (
              <button
                onClick={() => navigate("quiz")} // 4. Take Quiz Button
                className="w-full md:w-auto px-12 py-4 bg-orange-500 text-white rounded-2xl font-black text-lg shadow-[0_5px_0_0_rgba(194,65,12,1)] hover:bg-orange-400 active:shadow-none active:translate-y-1 transition-all uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Icon icon="lucide:zap" /> Take Quiz
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="w-full md:w-auto px-16 py-4 bg-emerald-500 text-white rounded-2xl font-black text-lg shadow-[0_5px_0_0_rgba(5,150,105,1)] hover:bg-emerald-400 active:shadow-none active:translate-y-1 transition-all uppercase tracking-wider"
              >
                Continue
              </button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LessonPage;
