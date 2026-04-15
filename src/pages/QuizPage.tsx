import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MapChart from "../components/MapChart";
const questions: Question[] = [
  {
    id: 1,
    country: "Brazil",
    clue: "The largest country in South America, known for its iconic Carnival.",
    flag: "🇧🇷",
  },
  {
    id: 2,
    country: "Japan",
    clue: "An archipelago nation blending ancient traditions with neon skyscrapers.",
    flag: "🇯🇵",
  },
];

const QuizPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [score, setScore] = useState(0);

  const currentQ = questions[currentIndex];

  const handleCountryClick = (name: string) => {
    if (name === currentQ.country) {
      setFeedback({ type: "success", text: "TARGET LOCATED" });
      setScore((s) => s + 100);
      setTimeout(() => {
        setFeedback(null);
        setCurrentIndex((prev) => (prev + 1) % questions.length);
      }, 1500);
    } else {
      setFeedback({ type: "error", text: `IDENTIFIED: ${name.toUpperCase()}` });
      setTimeout(() => setFeedback(null), 1500);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#020617] text-white p-6 md:p-12 overflow-x-hidden">
      {/* HUD Header */}
      <header className="w-full flex justify-between items-center mb-12">
        <div className="flex flex-col">
          <span className="text-blue-500 text-[10px] font-black tracking-[0.3em] uppercase">
            Mission Status
          </span>
          <h2 className="text-2xl font-black tracking-tighter">GLOBAL RECON</h2>
        </div>

        <div className="flex gap-4">
          <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="text-slate-500 text-[10px] block font-bold uppercase tracking-widest">
              XP Score
            </span>
            <span className="text-xl font-mono font-bold text-blue-400">
              {score.toLocaleString()}
            </span>
          </div>
        </div>
      </header>

      <main className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Clue Card (Bento Style) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <motion.div
            key={currentQ.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 rounded-[2.5rem] bg-linear-to-br from-blue-600 to-indigo-700 border border-white/10 shadow-2xl relative overflow-hidden group"
          >
            <span className="text-8xl mb-6 block">{currentQ.flag}</span>
            <h3 className="text-xs font-black text-blue-200 uppercase tracking-[0.2em] mb-4">
              Objective Clue
            </h3>
            <p className="text-2xl font-bold leading-tight text-white mb-8">
              "{currentQ.clue}"
            </p>
            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 10, ease: "linear" }}
              />
            </div>
          </motion.div>

          <div className="p-8 rounded-[2.5rem] bg-white/3 border border-white/5 grow">
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">
              Tactical Data
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-sm text-slate-400">Continent</span>
                <span className="text-sm font-bold italic">Analyzing...</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-sm text-slate-400">Precision</span>
                <span className="text-sm font-bold text-green-400">High</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: The Map */}
        <div className="lg:col-span-8 relative">
          <MapChart onCountryClick={handleCountryClick} />

          {/* Feedback Overlay */}
          <AnimatePresence>
            {feedback && (
              <motion.div
                initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 flex items-center justify-center rounded-[2.5rem] bg-black/20"
              >
                <motion.div
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  className={`px-12 py-6 rounded-3xl border ${
                    feedback.type === "success"
                      ? "bg-green-500 border-green-400 shadow-[0_0_50px_-12px_rgba(34,197,94,0.5)]"
                      : "bg-red-500 border-red-400 shadow-[0_0_50px_-12px_rgba(239,68,68,0.5)]"
                  }`}
                >
                  <p className="text-white font-black text-2xl tracking-tighter">
                    {feedback.text}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer Nav */}
      <footer className="mt-12 flex gap-4 text-[10px] font-bold text-slate-600 uppercase tracking-[.3em]">
        <span>System V3.0</span>
        <span>•</span>
        <button
          onClick={() => window.history.back()}
          className="hover:text-white transition-colors"
        >
          Abort Mission
        </button>
      </footer>
    </div>
  );
};

export default QuizPage;
