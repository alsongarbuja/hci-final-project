import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useNavigate, useParams } from "react-router-dom";
import { createSwapy, type Swapy } from "swapy";
import { useStore } from "../store/useStore";
import { countries } from "../utils/lesson";

interface QuizOption {
  id: string;
  text: string;
  icon: string;
  isCorrect?: boolean;
}

interface QuizQuestion {
  id: string;
  type: "multiple-choice" | "order" | "true-false";
  question: string;
  mascotComment: string;
  options: QuizOption[];
  correctOrder?: string[];
  explanation?: string;
}

const QuizPage: React.FC = () => {
  const navigate = useNavigate();
  const { countryId, lessonId } = useParams<{
    countryId: string;
    lessonId: string;
  }>();
  const { hearts, loseHeart, updateScore, completeLesson, recoverHearts } =
    useStore();

  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [currentOrder, setCurrentOrder] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const [showGameOver, setShowGameOver] = useState(false);
  const [showComplete, setShowComplete] = useState(false);

  const swapyRef = useRef<Swapy | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const countrySelection = countries.find((c) => c.id === countryId);
  const lessonsArray = countrySelection?.lessons || [];
  const currentLesson = lessonsArray.find((l) => l.id === lessonId);
  const quizQuestions =
    (currentLesson?.quiz as unknown as QuizQuestion[]) || [];
  const currentQ = quizQuestions[currentIdx];

  const randomizedOptions = useMemo(() => {
    if (!currentQ) return [];
    // eslint-disable-next-line react-hooks/purity
    return [...currentQ.options].sort(() => Math.random() - 0.5);
  }, [currentQ]);

  useEffect(() => {
    if (hearts <= 0) {
      setShowGameOver(true);
    }
  }, [hearts]);

  const handleRetake = () => {
    recoverHearts(3);
    setCurrentIdx(0);
    setCurrentScore(0);
    setSelectedOption(null);
    setIsChecked(false);
    setIsCorrect(null);
    setShowGameOver(false);
    setShowComplete(false);
  };

  const handleCheck = () => {
    if (isChecked || hearts <= 0) return;

    let correct = false;
    if (currentQ.type === "multiple-choice" || currentQ.type === "true-false") {
      const selected = currentQ.options.find(
        (opt) => opt.id === selectedOption,
      );
      correct = selected?.isCorrect || false;
    } else if (currentQ.type === "order") {
      correct =
        JSON.stringify(currentOrder) === JSON.stringify(currentQ.correctOrder);
    }

    setIsCorrect(correct);
    setIsChecked(true);
    if (correct) {
      setCurrentScore((prev) => prev + 10);
    } else {
      loseHeart();
    }
  };

  const handleNext = () => {
    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsChecked(false);
      setIsCorrect(null);
    } else {
      const currentIndex = lessonsArray.findIndex((l) => l.id === lessonId);
      const nextLesson = lessonsArray[currentIndex + 1];
      const idToUnlock = nextLesson ? nextLesson.id : lessonId;

      completeLesson(countryId!, lessonId!, idToUnlock!);
      updateScore(countryId!, lessonId!, currentScore);
      setShowComplete(true);
    }
  };

  useEffect(() => {
    if (currentQ?.type === "order" && containerRef.current && !isChecked) {
      swapyRef.current = createSwapy(containerRef.current, {
        animation: "spring",
      });
      swapyRef.current.onSwap((event) => {
        const newOrder = event.newSlotItemMap.asArray.map((item) => item.item);
        setCurrentOrder(newOrder);
      });
    }
    return () => swapyRef.current?.destroy();
  }, [currentQ, isChecked, randomizedOptions]);

  useEffect(() => {
    if (currentQ?.type === "order") {
      setCurrentOrder(randomizedOptions.map((o) => o.id));
    }
  }, [randomizedOptions, currentQ]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (hearts <= 0) return;
      if (isChecked && e.key === "Enter") {
        handleNext();
        return;
      }
      if (!isChecked) {
        if (
          currentQ?.type === "multiple-choice" ||
          currentQ?.type === "true-false"
        ) {
          const num = parseInt(e.key);
          if (!isNaN(num) && num > 0 && num <= randomizedOptions.length) {
            setSelectedOption(randomizedOptions[num - 1].id);
          }
        }
        if (
          e.key === "Enter" &&
          (selectedOption || currentQ?.type === "order")
        ) {
          handleCheck();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    selectedOption,
    isChecked,
    currentQ,
    currentOrder,
    hearts,
    randomizedOptions,
  ]);

  if (!currentQ) return null;

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-hidden">
      <header className="max-w-4xl mx-auto w-full px-6 py-6 flex items-center gap-6">
        <button onClick={() => navigate(-1)} className="text-slate-400">
          <Icon icon="lucide:x" className="text-3xl" />
        </button>
        <div className="grow h-4 bg-slate-100 rounded-full border-2 border-slate-100 overflow-hidden">
          <motion.div
            className="h-full bg-emerald-500"
            animate={{
              width: `${((currentIdx + 1) / quizQuestions.length) * 100}%`,
            }}
          />
        </div>
        <div className="flex items-center gap-2 font-black text-rose-500 text-xl">
          <Icon icon="twemoji:red-heart" /> {hearts}
        </div>
      </header>

      <main className="grow max-w-2xl mx-auto w-full px-6 py-4 flex flex-col">
        <div className="flex items-start gap-4 mb-8">
          <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center shrink-0">
            <img
              src="/mascot.png"
              alt="Mascot"
              className="w-12 h-12 object-contain"
            />
          </div>
          <div className="bg-white border-2 border-slate-200 p-4 rounded-2xl rounded-tl-none shadow-sm">
            <p className="font-bold text-slate-800 italic">
              {isChecked
                ? isCorrect
                  ? "Perfect!"
                  : "Keep learning!"
                : currentQ.mascotComment}
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-black text-slate-800 mb-8 leading-tight">
          {currentQ.question}
        </h2>

        {currentQ.type === "order" ? (
          <div ref={containerRef} className="flex flex-col gap-3">
            {randomizedOptions.map((option) => (
              <div
                key={option.id}
                data-swapy-slot={option.id}
                className="w-full"
              >
                <div data-swapy-item={option.id} className="w-full">
                  <div className="p-5 bg-white border-2 border-slate-200 rounded-2xl flex items-center gap-4 cursor-grab active:cursor-grabbing shadow-[0_4px_0_0_rgba(226,232,240,1)]">
                    <Icon
                      icon="lucide:grip-vertical"
                      className="text-slate-400"
                    />
                    <span className="font-bold text-slate-800 text-lg">
                      {option.text}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {randomizedOptions.map((option, idx) => (
              <button
                key={option.id}
                disabled={isChecked}
                onClick={() => setSelectedOption(option.id)}
                className={`
                  relative flex items-center gap-4 p-5 rounded-2xl border-2 font-bold text-lg transition-all
                  ${selectedOption === option.id ? "border-sky-400 bg-sky-50 text-sky-600 shadow-[0_4px_0_0_rgba(14,165,233,1)]" : "border-slate-200 text-slate-800 shadow-[0_4px_0_0_rgba(226,232,240,1)]"}
                  ${isChecked && option.isCorrect ? "border-emerald-500 bg-emerald-50 text-emerald-600 shadow-[0_4px_0_0_rgba(16,185,129,1)]" : ""}
                `}
              >
                <span className="w-8 h-8 bg-white border-2 border-slate-200 rounded-lg flex items-center justify-center text-sm font-black text-slate-400">
                  {idx + 1}
                </span>
                {option.text}
              </button>
            ))}
          </div>
        )}
      </main>

      <footer
        className={`border-t-2 p-6 transition-colors ${!isChecked ? "bg-white" : isCorrect ? "bg-emerald-100" : "bg-rose-100"}`}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            {isChecked && (
              <div className="flex flex-col">
                <h3
                  className={`text-xl font-black ${isCorrect ? "text-emerald-700" : "text-rose-700"}`}
                >
                  {isCorrect ? "Excellent!" : "Not quite right"}
                </h3>
                <p className="font-bold text-slate-700">
                  {currentQ.explanation}
                </p>
              </div>
            )}
          </div>
          <button
            onClick={isChecked ? handleNext : handleCheck}
            disabled={
              (currentQ.type === "multiple-choice" &&
                !selectedOption &&
                !isChecked) ||
              showGameOver
            }
            className={`px-12 py-4 rounded-2xl font-black text-lg uppercase transition-all ${
              selectedOption || currentQ.type === "order" || isChecked
                ? "bg-emerald-500 text-white shadow-[0_5px_0_0_rgba(5,150,105,1)]"
                : "bg-slate-200 text-slate-400"
            }`}
          >
            {isChecked ? "Continue" : "Check"}
          </button>
        </div>
      </footer>

      <AnimatePresence>
        {showGameOver && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-[3rem] p-10 max-w-sm w-full text-center shadow-2xl"
            >
              <Icon
                icon="twemoji:broken-heart"
                className="text-8xl mx-auto mb-6"
              />
              <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight mb-2">
                Out of Hearts!
              </h2>
              <p className="font-bold text-slate-500 mb-8">
                Review the lesson to regain energy, or try again with 3 full
                hearts!
              </p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleRetake}
                  className="py-4 bg-emerald-500 text-white rounded-2xl font-black uppercase shadow-[0_5px_0_0_rgba(5,150,105,1)] active:translate-y-1 active:shadow-none transition-all"
                >
                  Retake Quiz (3 Hearts)
                </button>
                <button
                  onClick={() => navigate(`/lessons/${countryId}`)}
                  className="py-4 bg-slate-100 text-slate-500 rounded-2xl font-black uppercase hover:bg-slate-200 transition-all"
                >
                  Back to Lesson
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {showComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-emerald-500/95 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              className="bg-white rounded-[3rem] p-10 max-w-md w-full text-center shadow-2xl relative overflow-hidden"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 text-emerald-100 text-[15rem] opacity-50"
              >
                <Icon icon="lucide:sparkles" />
              </motion.div>

              <div className="relative z-10">
                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon icon="twemoji:party-popper" className="text-5xl" />
                </div>
                <h2 className="text-4xl font-black text-slate-800 uppercase mb-2">
                  Quiz Finished!
                </h2>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full font-black text-xl">
                    +{currentScore} XP
                  </div>
                </div>
                <p className="font-bold text-slate-500 mb-8">
                  You've mastered this lesson! Ready for the next adventure?
                </p>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => navigate(`/lessons/${countryId}`)}
                    className="py-4 bg-emerald-500 text-white rounded-2xl font-black uppercase shadow-[0_5px_0_0_rgba(5,150,105,1)]"
                  >
                    Finish Lesson
                  </button>
                  <button
                    onClick={handleRetake}
                    className="py-4 bg-white border-2 border-slate-200 text-slate-400 rounded-2xl font-black uppercase hover:bg-slate-50 transition-all"
                  >
                    Retake Quiz
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuizPage;
