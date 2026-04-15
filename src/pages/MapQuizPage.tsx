import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react"; // Using Iconify as suggested
import MapChart from "../components/MapChart";

const questions: Question[] = [
  {
    id: 1,
    country: "Brazil",
    clue: "This country is home to the world's largest rainforest!",
    flag: "twemoji:flag-brazil",
  },
  {
    id: 2,
    country: "Japan",
    clue: "An island nation famous for its high-speed bullet trains.",
    flag: "twemoji:flag-japan",
  },
];

const MapQuiz: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [score, setScore] = useState(0);
  const [hearts, setHearts] = useState(5);

  const currentQ = questions[currentIndex];

  const handleCountryClick = (name: string) => {
    if (feedback) return; // Prevent multiple clicks

    if (name === currentQ.country) {
      setFeedback({ type: "success", text: "You got it! Excellent!" });
      setScore((s) => s + 10);
    } else {
      setFeedback({ type: "error", text: `That's actually ${name}!` });
      setHearts((h) => Math.max(0, h - 1));
    }
  };

  const handleContinue = () => {
    setFeedback(null);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Logic for lesson completion
      alert("Lesson Complete! XP Earned: " + score);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col font-sans">
      {/* Top Header: Progress & Hearts */}
      <header className="max-w-5xl mx-auto w-full px-6 py-8 flex items-center gap-6">
        <button className="text-slate-400 hover:text-slate-600 transition-colors">
          <Icon icon="lucide:x" className="text-3xl" />
        </button>

        <div className="grow h-4 bg-slate-100 rounded-full overflow-hidden border-2 border-slate-100">
          <motion.div
            className="h-full bg-emerald-500"
            initial={{ width: "0%" }}
            animate={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
            }}
          />
        </div>

        <div className="flex items-center gap-2">
          <Icon icon="twemoji:red-heart" className="text-2xl" />
          <span className="text-rose-500 font-black text-xl">{hearts}</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="grow max-w-5xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left: Instructions Card */}
        <div className="lg:col-span-1 space-y-6">
          <h1 className="text-3xl font-black text-slate-700 leading-tight">
            Tap the map to find this country:
          </h1>

          <div className="p-6 rounded-3xl border-2 border-slate-200 bg-white shadow-[0_4px_0_0_rgba(226,232,240,1)] flex items-center gap-4">
            <Icon icon={currentQ.flag} className="text-5xl" />
            <p className="text-lg font-bold text-slate-600 italic">
              "{currentQ.clue}"
            </p>
          </div>

          <div className="hidden lg:block p-6 rounded-3xl bg-sky-50 border-2 border-sky-100">
            <div className="flex items-center gap-2 text-sky-600 mb-2 font-black uppercase text-xs tracking-widest">
              <Icon icon="lucide:lightbulb" /> Tip
            </div>
            <p className="text-sm text-sky-700 font-medium">
              Look for the general shape or check surrounding neighbors!
            </p>
          </div>
        </div>

        {/* Right: The Interactive Map */}
        <div className="lg:col-span-2 relative bg-slate-50 rounded-[2.5rem] border-2 border-slate-200 p-2 shadow-inner overflow-hidden">
          <MapChart onCountryClick={handleCountryClick} />
        </div>
      </main>

      {/* Gamified Bottom Feedback Bar */}
      <footer
        className={`h-32 w-full mt-8 border-t-2 transition-colors ${
          !feedback
            ? "bg-white border-slate-200"
            : feedback.type === "success"
              ? "bg-emerald-100 border-emerald-200"
              : "bg-rose-100 border-rose-200"
        }`}
      >
        <div className="max-w-5xl mx-auto h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {feedback && (
              <>
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-sm`}
                >
                  <Icon
                    icon={
                      feedback.type === "success"
                        ? "lucide:check-circle"
                        : "lucide:alert-circle"
                    }
                    className={`text-4xl ${feedback.type === "success" ? "text-emerald-500" : "text-rose-500"}`}
                  />
                </div>
                <div>
                  <h3
                    className={`text-2xl font-black ${feedback.type === "success" ? "text-emerald-700" : "text-rose-700"}`}
                  >
                    {feedback.type === "success" ? "Amazing!" : "Incorrect"}
                  </h3>
                  <p
                    className={`font-bold ${feedback.type === "success" ? "text-emerald-600" : "text-rose-600"}`}
                  >
                    {feedback.text}
                  </p>
                </div>
              </>
            )}
          </div>

          {!feedback ? (
            <button
              disabled
              className="px-12 py-4 bg-slate-200 text-slate-400 rounded-2xl font-black uppercase tracking-widest cursor-not-allowed"
            >
              Check
            </button>
          ) : (
            <button
              onClick={handleContinue}
              className={`px-12 py-4 text-white rounded-2xl font-black uppercase tracking-widest shadow-[0_5px_0_0_rgba(0,0,0,0.2)] active:shadow-none active:translate-y-1 transition-all ${
                feedback.type === "success" ? "bg-emerald-500" : "bg-rose-500"
              }`}
            >
              Continue
            </button>
          )}
        </div>
      </footer>
    </div>
  );
};

export default MapQuiz;
