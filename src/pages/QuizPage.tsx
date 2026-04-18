import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "../store/useStore";
import { countries } from "../utils/lesson";

// 1. Define strict types for the Quiz structure
interface QuizOption {
  id: string;
  text: string;
  icon: string;
  isCorrect?: boolean;
}

interface QuizQuestion {
  id: string;
  type: "multiple-choice" | "order";
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
  const { hearts, loseHeart, updateScore, completeLesson } = useStore();

  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  // States for Multiple Choice
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // States for Ordering Quiz
  const [currentOrder, setCurrentOrder] = useState<string[]>([]);

  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Data retrieval with safety checks
  const countrySelection = countries.find((c) => c.id === countryId);
  const lessonsArray = countrySelection?.lessons || [];
  const currentLesson = lessonsArray.find((l) => l.id === lessonId);
  const quizQuestions =
    (currentLesson?.quiz as unknown as QuizQuestion[]) || [];

  const currentQ = quizQuestions[currentIdx];
  const progress =
    quizQuestions.length > 0
      ? ((currentIdx + 1) / quizQuestions.length) * 100
      : 0;

  // Initialize order when a new "order" question appears
  useEffect(() => {
    if (currentQ?.type === "order") {
      setCurrentOrder(currentQ.options.map((o) => o.id));
    }
  }, [currentIdx, currentQ]);

  const handleCheck = () => {
    if (isChecked) return;

    let correct = false;
    if (currentQ.type === "multiple-choice") {
      if (!selectedOption) return;
      const selected = currentQ.options.find(
        (opt) => opt.id === selectedOption,
      );
      correct = selected?.isCorrect || false;
    } else if (currentQ.type === "order") {
      // Check if currentOrder matches correctOrder
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

      completeLesson(countryId!, idToUnlock!);
      updateScore(countryId!, lessonId!, currentScore);
      navigate(`/lessons/${countryId}`);
    }
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isChecked) {
        if (e.key === "Enter") handleNext();
        return;
      }

      const num = parseInt(e.key);
      if (
        currentQ?.type === "multiple-choice" &&
        !isNaN(num) &&
        num > 0 &&
        num <= currentQ.options.length
      ) {
        setSelectedOption(currentQ.options[num - 1].id);
      }

      if (e.key === "Enter" && (selectedOption || currentQ?.type === "order")) {
        handleCheck();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedOption, isChecked, currentQ, currentOrder]);

  if (!currentQ) return null;

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-hidden">
      <header className="max-w-4xl mx-auto w-full px-6 py-6 flex items-center gap-6">
        <button
          onClick={() => navigate(-1)}
          className="text-slate-400 hover:text-slate-600"
        >
          <Icon icon="lucide:x" className="text-3xl" />
        </button>
        <div className="grow h-4 bg-slate-100 rounded-full border-2 border-slate-100 overflow-hidden">
          <motion.div
            className="h-full bg-emerald-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center gap-2 font-black text-rose-500 text-xl">
          <Icon icon="twemoji:red-heart" /> {hearts}
        </div>
      </header>

      <main className="grow max-w-2xl mx-auto w-full px-6 py-4 flex flex-col">
        <div className="flex items-start gap-4 mb-8">
          <motion.div
            animate={
              isChecked
                ? {
                    scale: [1, 1.2, 1],
                    rotate: isCorrect ? [0, 10, -10, 0] : [0, -10, 10, 0],
                  }
                : {}
            }
            className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center shrink-0"
          >
            <img
              src="/mascot.png"
              alt="Mascot"
              className="w-12 h-12 object-contain"
            />
          </motion.div>
          <div className="bg-white border-2 border-slate-200 p-4 rounded-2xl rounded-tl-none relative shadow-sm">
            <p className="font-bold text-slate-600 leading-tight italic">
              {isChecked
                ? isCorrect
                  ? "Spot on! Press Enter to continue."
                  : "Not quite. Press Enter to try the next one."
                : currentQ.mascotComment}
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-black text-slate-700 mb-8">
          {currentQ.question}
        </h2>

        {currentQ.type === "order" ? (
          <div className="flex flex-col gap-3">
            {currentOrder.map((id, index) => {
              const option = currentQ.options.find((o) => o.id === id)!;
              return (
                <motion.div
                  key={option.id}
                  layout
                  className="p-4 bg-white border-2 border-slate-200 rounded-2xl flex items-center gap-4 cursor-pointer shadow-[0_4px_0_0_rgba(226,232,240,1)]"
                  onClick={() => {
                    if (isChecked) return;
                    // Simple rotation logic for ordering without a heavy drag library
                    const newOrder = [...currentOrder];
                    const item = newOrder.splice(index, 1)[0];
                    newOrder.push(item);
                    setCurrentOrder(newOrder);
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-black">
                    {index + 1}
                  </div>
                  <span className="font-bold">{option.text}</span>
                  <Icon
                    icon="lucide:arrow-down-up"
                    className="ml-auto text-slate-300"
                  />
                </motion.div>
              );
            })}
            <p className="text-center text-xs text-slate-400 font-bold uppercase mt-2">
              Tap cards to reorder
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {currentQ.options.map((option, idx) => {
              const isChosen = selectedOption === option.id;
              return (
                <motion.button
                  key={option.id}
                  disabled={isChecked}
                  onClick={() => setSelectedOption(option.id)}
                  className={`
                    relative flex items-center gap-4 p-4 rounded-2xl border-2 font-bold text-lg transition-all
                    ${isChosen ? "border-sky-400 bg-sky-50 text-sky-600 shadow-[0_4px_0_0_rgba(14,165,233,1)]" : "border-slate-200 text-slate-600 shadow-[0_4px_0_0_rgba(226,232,240,1)] hover:bg-slate-50"}
                    ${isChecked && option.isCorrect ? "border-emerald-500 bg-emerald-50 text-emerald-600 shadow-[0_4px_0_0_rgba(16,185,129,1)]" : ""}
                    ${isChecked && isChosen && !option.isCorrect ? "border-rose-500 bg-rose-50 text-rose-600 shadow-[0_4px_0_0_rgba(225,29,72,1)]" : ""}
                  `}
                >
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-7 h-7 bg-white border-2 border-slate-200 rounded-lg flex items-center justify-center text-xs font-black text-slate-400">
                    {idx + 1}
                  </span>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white border-2 border-inherit ml-2">
                    <Icon icon={option.icon} className="text-2xl" />
                  </div>
                  {option.text}
                </motion.button>
              );
            })}
          </div>
        )}
      </main>

      <footer
        className={`border-t-2 p-6 md:p-10 transition-colors duration-300 ${!isChecked ? "bg-white" : isCorrect ? "bg-emerald-100" : "bg-rose-100"}`}
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 min-h-20">
            {isChecked && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4"
              >
                <Icon
                  icon={
                    isCorrect ? "lucide:check-circle" : "lucide:alert-circle"
                  }
                  className={`text-5xl ${isCorrect ? "text-emerald-500" : "text-rose-500"}`}
                />
                <div>
                  <h3
                    className={`text-2xl font-black ${isCorrect ? "text-emerald-700" : "text-rose-700"}`}
                  >
                    {isCorrect ? "Excellent!" : "Correct solution:"}
                  </h3>
                  <p
                    className={`font-bold ${isCorrect ? "text-emerald-600" : "text-rose-600"}`}
                  >
                    {isCorrect
                      ? currentQ.explanation
                      : "Check the order/option above!"}
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          <div className="w-full md:w-auto">
            <button
              disabled={currentQ.type === "multiple-choice" && !selectedOption}
              onClick={isChecked ? handleNext : handleCheck}
              className={`w-full md:w-auto px-16 py-4 rounded-2xl font-black text-lg uppercase tracking-widest transition-all ${
                selectedOption || currentQ.type === "order"
                  ? isChecked
                    ? isCorrect
                      ? "bg-emerald-500 text-white shadow-[0_5px_0_0_rgba(5,150,105,1)]"
                      : "bg-rose-500 text-white shadow-[0_5px_0_0_rgba(190,18,60,1)]"
                    : "bg-emerald-500 text-white shadow-[0_5px_0_0_rgba(5,150,105,1)] active:translate-y-1"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }`}
            >
              {isChecked ? "Continue" : "Check"}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuizPage;
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Icon } from "@iconify/react";
// import { useNavigate, useParams } from "react-router-dom";
// import { useStore } from "../store/useStore";
// import { countries } from "../utils/lesson";

// const QuizPage: React.FC = () => {
//   const navigate = useNavigate();
//   const { countryId, lessonId } = useParams();
//   const { hearts, loseHeart, updateScore, completeLesson } = useStore();

//   const [currentIdx, setCurrentIdx] = useState(0);
//   const [currentScore, setCurrentScore] = useState(0);
//   const [selectedOption, setSelectedOption] = useState<string | null>(null);
//   const [isChecked, setIsChecked] = useState(false);
//   const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

//   const countrySelection = countries.find((c) => c.id === countryId);
//   const lessonsArray = countrySelection?.lessons || [];
//   const quizQuestions = lessonsArray.find((l) => l.id === lessonId)?.quiz || [];

//   const currentQ = quizQuestions[currentIdx];
//   const progress = ((currentIdx + 1) / quizQuestions.length) * 100;

//   const handleCheck = () => {
//     if (!selectedOption || isChecked) return;
//     const selected = currentQ?.options.find((opt) => opt.id === selectedOption);
//     const correct = selected?.isCorrect || false;

//     setIsCorrect(correct);
//     setIsChecked(true);

//     if (correct) {
//       setCurrentScore((prev) => prev + 10);
//     } else {
//       loseHeart();
//     }
//   };

//   const handleNext = () => {
//     if (currentIdx < quizQuestions.length - 1) {
//       setCurrentIdx((prev) => prev + 1);
//       setSelectedOption(null);
//       setIsChecked(false);
//       setIsCorrect(null);
//     } else {
//       const currentIndex = lessonsArray.findIndex((l) => l.id === lessonId);
//       const nextLesson = lessonsArray[currentIndex + 1];
//       const idToUnlock = nextLesson ? nextLesson.id : lessonId;

//       completeLesson(countryId!, idToUnlock!);
//       updateScore(countryId!, lessonId!, currentScore);
//       navigate(`/lessons/${countryId}`);
//     }
//   };

//   // 1. Keyboard Navigation Logic
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       // Handle number keys 1-9
//       const num = parseInt(e.key);
//       if (!isNaN(num) && num > 0 && num <= (currentQ?.options.length || 0)) {
//         if (!isChecked) {
//           setSelectedOption(currentQ.options[num - 1].id);
//         }
//       }

//       // Handle Enter key
//       if (e.key === "Enter") {
//         if (!isChecked && selectedOption) {
//           handleCheck();
//         } else if (isChecked) {
//           handleNext();
//         }
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [selectedOption, isChecked, currentQ]);

//   // Auto-advance logic after feedback (optional - keeping it from your original file)
//   useEffect(() => {
//     if (isChecked) {
//       const timer = setTimeout(() => {
//         handleNext();
//       }, 3000); // Increased slightly so user can read explanation
//       return () => clearTimeout(timer);
//     }
//   }, [isChecked]);

//   return (
//     <div className="min-h-screen bg-white flex flex-col font-sans overflow-hidden">
//       <header className="max-w-4xl mx-auto w-full px-6 py-6 flex items-center gap-6">
//         <button
//           onClick={() => navigate(-1)}
//           className="text-slate-400 hover:text-slate-600"
//         >
//           <Icon icon="lucide:x" className="text-3xl" />
//         </button>
//         <div className="grow h-4 bg-slate-100 rounded-full border-2 border-slate-100 overflow-hidden">
//           <motion.div
//             className="h-full bg-emerald-500"
//             initial={{ width: 0 }}
//             animate={{ width: `${progress}%` }}
//           />
//         </div>
//         <div className="flex items-center gap-2 font-black text-rose-500 text-xl">
//           <Icon icon="twemoji:red-heart" /> {hearts}
//         </div>
//       </header>

//       <main className="grow max-w-2xl mx-auto w-full px-6 py-4 flex flex-col">
//         {/* Mascot Area */}
//         <div className="flex items-start gap-4 mb-8">
//           <motion.div
//             animate={
//               isChecked
//                 ? {
//                     scale: [1, 1.2, 1],
//                     rotate: isCorrect ? [0, 10, -10, 0] : [0, -10, 10, 0],
//                   }
//                 : {}
//             }
//             className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center shrink-0"
//           >
//             <img
//               src="/mascot.png"
//               alt="Mascot"
//               className="w-12 h-12 object-contain"
//             />
//           </motion.div>
//           <div className="bg-white border-2 border-slate-200 p-4 rounded-2xl rounded-tl-none relative shadow-sm">
//             <p className="font-bold text-slate-600 leading-tight italic">
//               {isChecked
//                 ? isCorrect
//                   ? "Spot on! Press Enter to continue."
//                   : "Not quite. Press Enter to try the next one."
//                 : currentQ?.mascotComment}
//             </p>
//           </div>
//         </div>

//         <h2 className="text-2xl font-black text-slate-700 mb-8">
//           {currentQ?.question}
//         </h2>

//         {currentQ.type === "order" ? (
//           <div className="flex flex-col gap-3">
//             {currentQ.options.map((option, index) => (
//               <motion.div
//                 key={option.id}
//                 layout
//                 className="p-4 bg-white border-2 border-slate-200 rounded-2xl flex items-center gap-4 cursor-grab active:cursor-grabbing shadow-[0_4px_0_0_rgba(226,232,240,1)]"
//                 // Here you would implement your re-ordering logic
//               >
//                 <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-black">
//                   {index + 1}
//                 </div>
//                 <span className="font-bold">{option.text}</span>
//                 <Icon
//                   icon="lucide:grip-vertical"
//                   className="ml-auto text-slate-300"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 gap-4">
//             {currentQ?.options.map((option, idx) => {
//               const isChosen = selectedOption === option.id;
//               return (
//                 <motion.button
//                   key={option.id}
//                   disabled={isChecked}
//                   onClick={() => setSelectedOption(option.id)}
//                   className={`
//                   relative flex items-center gap-4 p-4 rounded-2xl border-2 font-bold text-lg transition-all
//                   ${isChosen ? "border-sky-400 bg-sky-50 text-sky-600 shadow-[0_4px_0_0_rgba(14,165,233,1)]" : "border-slate-200 text-slate-600 shadow-[0_4px_0_0_rgba(226,232,240,1)] hover:bg-slate-50"}
//                   ${isChecked && option.isCorrect ? "border-emerald-500 bg-emerald-50 text-emerald-600 shadow-[0_4px_0_0_rgba(16,185,129,1)]" : ""}
//                   ${isChecked && isChosen && !option.isCorrect ? "border-rose-500 bg-rose-50 text-rose-600 shadow-[0_4px_0_0_rgba(225,29,72,1)]" : ""}
//                 `}
//                 >
//                   {/* 2. Key Indicator Badge */}
//                   <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-7 h-7 bg-white border-2 border-slate-200 rounded-lg flex items-center justify-center text-xs font-black text-slate-400 shadow-sm group-hover:border-sky-400 transition-colors">
//                     {idx + 1}
//                   </span>

//                   <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white border-2 border-inherit ml-2">
//                     <Icon icon={option.icon} className="text-2xl" />
//                   </div>
//                   {option.text}
//                 </motion.button>
//               );
//             })}
//           </div>
//         )}
//       </main>

//       <footer
//         className={`border-t-2 p-6 md:p-10 transition-colors duration-300 ${!isChecked ? "bg-white" : isCorrect ? "bg-emerald-100" : "bg-rose-100"}`}
//       >
//         <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
//           <div className="flex items-center gap-4 min-h-20">
//             {isChecked && (
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="flex items-center gap-4"
//               >
//                 <Icon
//                   icon={
//                     isCorrect ? "lucide:check-circle" : "lucide:alert-circle"
//                   }
//                   className={`text-5xl ${isCorrect ? "text-emerald-500" : "text-rose-500"}`}
//                 />
//                 <div>
//                   <h3
//                     className={`text-2xl font-black ${isCorrect ? "text-emerald-700" : "text-rose-700"}`}
//                   >
//                     {isCorrect ? "Excellent!" : "Correct solution:"}
//                   </h3>
//                   <p
//                     className={`font-bold ${isCorrect ? "text-emerald-600" : "text-rose-600"}`}
//                   >
//                     {isCorrect
//                       ? currentQ?.mascotComment
//                       : currentQ?.options.find((o) => o.isCorrect)?.text}
//                   </p>
//                 </div>
//               </motion.div>
//             )}
//           </div>

//           <div className="w-full md:w-auto">
//             <button
//               disabled={!selectedOption}
//               onClick={isChecked ? handleNext : handleCheck}
//               className={`w-full md:w-auto px-16 py-4 rounded-2xl font-black text-lg uppercase tracking-widest transition-all ${
//                 selectedOption
//                   ? isChecked
//                     ? isCorrect
//                       ? "bg-emerald-500 text-white shadow-[0_5px_0_0_rgba(5,150,105,1)]"
//                       : "bg-rose-500 text-white shadow-[0_5px_0_0_rgba(190,18,60,1)]"
//                     : "bg-emerald-500 text-white shadow-[0_5px_0_0_rgba(5,150,105,1)] active:translate-y-1"
//                   : "bg-slate-200 text-slate-400 cursor-not-allowed"
//               }`}
//             >
//               {isChecked ? "Continue" : "Check"}
//             </button>
//             {/* Helpful tooltip for keyboard users */}
//             <p className="hidden md:block text-center text-[10px] font-black text-slate-400 mt-2 uppercase tracking-tighter">
//               Tip: Press Enter key
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default QuizPage;

// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Icon } from "@iconify/react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import { useStore } from "../store/useStore";
// // import { countries } from "../utils/lesson";

// // const QuizPage: React.FC = () => {
// //   const navigate = useNavigate();
// //   const { countryId, lessonId } = useParams();
// //   const { hearts, loseHeart, updateScore, completeLesson } = useStore();

// //   const [currentIdx, setCurrentIdx] = useState(0);
// //   const [currentScore, setCurrentScore] = useState(0);
// //   const [selectedOption, setSelectedOption] = useState<string | null>(null);
// //   const [isChecked, setIsChecked] = useState(false);
// //   const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

// //   const countrySelection = countries.find((c) => c.id === countryId);
// //   const lessonsArray = countrySelection?.lessons || [];
// //   const quizQuestions = lessonsArray.find((l) => l.id === lessonId)?.quiz || [];

// //   const currentQ = quizQuestions[currentIdx];
// //   const progress = ((currentIdx + 1) / quizQuestions.length) * 100;

// //   const handleNext = () => {
// //     if (currentIdx < quizQuestions.length - 1) {
// //       setCurrentIdx((prev) => prev + 1);
// //       setSelectedOption(null);
// //       setIsChecked(false);
// //       setIsCorrect(null);
// //     } else {
// //       // 2. Find NEXT lesson ID
// //       const currentIndex = lessonsArray.findIndex((l) => l.id === lessonId);
// //       const nextLesson = lessonsArray[currentIndex + 1];

// //       // If there is a next lesson, unlock it. Otherwise, stay on current.
// //       const idToUnlock = nextLesson ? nextLesson.id : lessonId;

// //       completeLesson(countryId!, idToUnlock!);
// //       updateScore(countryId!, lessonId!, currentScore);
// //       navigate(`/lessons/${countryId}`);
// //     }
// //   };

// //   useEffect(() => {
// //     if (isChecked) {
// //       const timer = setTimeout(() => {
// //         handleNext();
// //       }, 1800); // 1.8s delay to show the animation/feedback
// //       return () => clearTimeout(timer);
// //     }
// //   }, [isChecked]);

// //   const handleCheck = () => {
// //     const selected = currentQ?.options.find((opt) => opt.id === selectedOption);
// //     const correct = selected?.isCorrect || false;

// //     setIsCorrect(correct);
// //     setIsChecked(true);

// //     if (correct) {
// //       // 1. Update score state
// //       setCurrentScore((prev) => prev + 10);
// //     } else {
// //       loseHeart();
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-white flex flex-col font-sans overflow-hidden">
// //       <header className="max-w-4xl mx-auto w-full px-6 py-6 flex items-center gap-6">
// //         <button
// //           onClick={() => navigate(-1)}
// //           className="text-slate-400 hover:text-slate-600"
// //         >
// //           <Icon icon="lucide:x" className="text-3xl" />
// //         </button>
// //         <div className="grow h-4 bg-slate-100 rounded-full border-2 border-slate-100 overflow-hidden">
// //           <motion.div
// //             className="h-full bg-emerald-500"
// //             initial={{ width: 0 }}
// //             animate={{ width: `${progress}%` }}
// //           />
// //         </div>
// //         <div className="flex items-center gap-2 font-black text-rose-500 text-xl">
// //           <Icon icon="twemoji:red-heart" /> {hearts}
// //         </div>
// //       </header>

// //       <main className="grow max-w-2xl mx-auto w-full px-6 py-4 flex flex-col">
// //         {/* Mascot Area */}
// //         <div className="flex items-start gap-4 mb-8">
// //           <motion.div
// //             animate={
// //               isChecked
// //                 ? {
// //                     scale: [1, 1.2, 1],
// //                     rotate: isCorrect ? [0, 10, -10, 0] : [0, -10, 10, 0],
// //                   }
// //                 : {}
// //             }
// //             className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center shrink-0"
// //           >
// //             <Icon
// //               icon={
// //                 isChecked
// //                   ? isCorrect
// //                     ? "twemoji:party-popper"
// //                     : "twemoji:disappointed-face"
// //                   : "twemoji:owl"
// //               }
// //               className="text-4xl"
// //             />
// //           </motion.div>
// //           <div className="bg-white border-2 border-slate-200 p-4 rounded-2xl rounded-tl-none relative shadow-sm">
// //             <p className="font-bold text-slate-600 leading-tight">
// //               {isChecked
// //                 ? isCorrect
// //                   ? "Spot on! You're a natural."
// //                   : "Oh no! Let's keep going."
// //                 : currentQ?.mascotComment}
// //             </p>
// //           </div>
// //         </div>

// //         <h2 className="text-2xl font-black text-slate-700 mb-8">
// //           {currentQ?.question}
// //         </h2>

// //         <div className="grid grid-cols-1 gap-4">
// //           <AnimatePresence mode="wait">
// //             {currentQ?.options.map((option) => {
// //               const isChosen = selectedOption === option.id;
// //               return (
// //                 <motion.button
// //                   key={option.id}
// //                   disabled={isChecked}
// //                   onClick={() => setSelectedOption(option.id)}
// //                   // 3. Shiver animation for wrong answer, Bounce for correct
// //                   animate={
// //                     isChecked && isChosen
// //                       ? isCorrect
// //                         ? { y: [0, -10, 0] }
// //                         : { x: [-10, 10, -10, 10, 0] }
// //                       : {}
// //                   }
// //                   className={`
// //                     flex items-center gap-4 p-4 rounded-2xl border-2 font-bold text-lg transition-all
// //                     ${isChosen ? "border-sky-400 bg-sky-50 text-sky-600 shadow-[0_4px_0_0_rgba(14,165,233,1)]" : "border-slate-200 text-slate-600 shadow-[0_4px_0_0_rgba(226,232,240,1)]"}
// //                     ${isChecked && option.isCorrect ? "border-emerald-500 bg-emerald-50 text-emerald-600 shadow-[0_4px_0_0_rgba(16,185,129,1)]" : ""}
// //                     ${isChecked && isChosen && !option.isCorrect ? "border-rose-500 bg-rose-50 text-rose-600 shadow-[0_4px_0_0_rgba(225,29,72,1)]" : ""}
// //                   `}
// //                 >
// //                   <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white border-2 border-inherit">
// //                     <Icon icon={option.icon} className="text-2xl" />
// //                   </div>
// //                   {option.text}
// //                 </motion.button>
// //               );
// //             })}
// //           </AnimatePresence>
// //         </div>
// //       </main>

// //       {/* Footer stays white/check-focused, but changes for feedback */}
// //       <footer
// //         className={`border-t-2 p-6 md:p-10 transition-colors duration-300 ${!isChecked ? "bg-white" : isCorrect ? "bg-emerald-100" : "bg-rose-100"}`}
// //       >
// //         <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
// //           <div className="flex items-center gap-4 min-h-20">
// //             {isChecked && (
// //               <motion.div
// //                 initial={{ opacity: 0, y: 10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 className="flex items-center gap-4"
// //               >
// //                 <Icon
// //                   icon={
// //                     isCorrect ? "lucide:check-circle" : "lucide:alert-circle"
// //                   }
// //                   className={`text-5xl ${isCorrect ? "text-emerald-500" : "text-rose-500"}`}
// //                 />
// //                 <div>
// //                   <h3
// //                     className={`text-2xl font-black ${isCorrect ? "text-emerald-700" : "text-rose-700"}`}
// //                   >
// //                     {isCorrect ? "Excellent!" : "Correct solution:"}
// //                   </h3>
// //                   <p
// //                     className={`font-bold ${isCorrect ? "text-emerald-600" : "text-rose-600"}`}
// //                   >
// //                     {isCorrect
// //                       ? currentQ?.explanation
// //                       : currentQ?.options.find((o) => o.isCorrect)?.text}
// //                   </p>
// //                 </div>
// //               </motion.div>
// //             )}
// //           </div>

// //           <div className="w-full md:w-auto">
// //             <button
// //               disabled={!selectedOption || isChecked}
// //               onClick={handleCheck}
// //               className={`w-full md:w-auto px-16 py-4 rounded-2xl font-black text-lg uppercase tracking-widest transition-all ${
// //                 selectedOption && !isChecked
// //                   ? "bg-emerald-500 text-white shadow-[0_5px_0_0_rgba(5,150,105,1)] active:translate-y-1"
// //                   : "bg-slate-200 text-slate-400 cursor-not-allowed"
// //               }`}
// //             >
// //               {isChecked ? "Processing..." : "Check"}
// //             </button>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default QuizPage;
// // // import React, { useState } from "react";
// // // import { motion } from "framer-motion";
// // // import { Icon } from "@iconify/react";
// // // import { useNavigate, useParams } from "react-router-dom";
// // // import { useStore } from "../store/useStore";
// // // import { countries } from "../utils/lesson";

// // // const QuizPage: React.FC = () => {
// // //   const navigate = useNavigate();
// // //   const { countryId, lessonId } = useParams();
// // //   const { hearts, loseHeart, updateScore, completeLesson } = useStore();

// // //   const [currentIdx, setCurrentIdx] = useState(0);
// // //   const [currentScore, setCurrentScore] = useState(0);
// // //   const [selectedOption, setSelectedOption] = useState<string | null>(null);
// // //   const [isChecked, setIsChecked] = useState(false);
// // //   const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

// // //   const countrySelection = countries.find((c) => c.id === countryId);
// // //   const quizQuestions = countrySelection?.lessons?.find(
// // //     (l) => l.id === lessonId,
// // //   )?.quiz;

// // //   const currentQ = quizQuestions?.[currentIdx];
// // //   const progress = ((currentIdx + 1) / quizQuestions!.length) * 100;

// // //   const handleCheck = () => {
// // //     const selected = currentQ?.options.find((opt) => opt.id === selectedOption);
// // //     const correct = selected?.isCorrect || false;

// // //     setIsCorrect(correct);
// // //     setIsChecked(true);

// // //     if (!correct) {
// // //       loseHeart();
// // //     }
// // //   };

// // //   const handleNext = () => {
// // //     if (currentIdx < quizQuestions!.length - 1) {
// // //       setCurrentIdx((prev) => prev + 1);
// // //       setSelectedOption(null);
// // //       setIsChecked(false);
// // //       setIsCorrect(null);
// // //     } else {
// // //       completeLesson(countryId!, lessonId!);
// // //       updateScore(countryId!, lessonId!, currentScore);
// // //       navigate(`/lessons/${countryId}`);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-white flex flex-col font-sans overflow-hidden">
// // //       {/* 1. Header: Progress & Hearts */}
// // //       <header className="max-w-4xl mx-auto w-full px-6 py-8 flex items-center gap-6">
// // //         <button
// // //           onClick={() => navigate(-1)}
// // //           className="text-slate-400 hover:text-slate-600"
// // //         >
// // //           <Icon icon="lucide:x" className="text-3xl" />
// // //         </button>
// // //         <div className="grow h-4 bg-slate-100 rounded-full border-2 border-slate-100 overflow-hidden">
// // //           <motion.div
// // //             className="h-full bg-emerald-500"
// // //             initial={{ width: 0 }}
// // //             animate={{ width: `${progress}%` }}
// // //           />
// // //         </div>
// // //         <div className="flex items-center gap-2 font-black text-rose-500 text-xl">
// // //           <Icon icon="twemoji:red-heart" /> {hearts}
// // //         </div>
// // //       </header>

// // //       {/* 2. Question Area */}
// // //       <main className="grow max-w-2xl mx-auto w-full px-6 py-8 flex flex-col">
// // //         <div className="flex items-start gap-4 mb-8">
// // //           <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center shrink-0">
// // //             <Icon icon="twemoji:owl" className="text-4xl" /> {/* Mascot Icon */}
// // //           </div>
// // //           <div className="bg-white border-2 border-slate-200 p-4 rounded-2xl rounded-tl-none relative shadow-sm">
// // //             <p className="font-bold text-slate-600 leading-tight">
// // //               {currentQ?.mascotComment}
// // //             </p>
// // //             {/* Tooltip triangle */}
// // //             <div className="absolute -top-0.5 -left-2.5 w-0 h-0 border-t-10 border-t-transparent border-r-12 border-r-slate-200 border-b-10 border-b-transparent"></div>
// // //           </div>
// // //         </div>

// // //         <h2 className="text-2xl font-black text-slate-700 mb-8">
// // //           {currentQ?.question}
// // //         </h2>

// // //         {/* Options Grid */}
// // //         <div className="grid grid-cols-1 gap-4">
// // //           {currentQ?.options.map((option) => (
// // //             <button
// // //               key={option.id}
// // //               disabled={isChecked}
// // //               onClick={() => setSelectedOption(option.id)}
// // //               className={`
// // //                 flex items-center gap-4 p-4 rounded-2xl border-2 font-bold text-lg transition-all
// // //                 ${
// // //                   selectedOption === option.id
// // //                     ? "border-sky-400 bg-sky-50 text-sky-600 shadow-[0_4px_0_0_rgba(14,165,233,1)]"
// // //                     : "border-slate-200 hover:bg-slate-50 text-slate-600 shadow-[0_4px_0_0_rgba(226,232,240,1)]"
// // //                 }
// // //                 ${isChecked && option.isCorrect ? "border-emerald-500 bg-emerald-50 text-emerald-600 shadow-[0_4px_0_0_rgba(16,185,129,1)]" : ""}
// // //                 ${isChecked && selectedOption === option.id && !option.isCorrect ? "border-rose-500 bg-rose-50 text-rose-600 shadow-[0_4px_0_0_rgba(225,29,72,1)]" : ""}
// // //               `}
// // //             >
// // //               <div
// // //                 className={`w-10 h-10 rounded-lg flex items-center justify-center bg-white border-2 border-inherit`}
// // //               >
// // //                 <Icon icon={option.icon} className="text-2xl" />
// // //               </div>
// // //               {option.text}
// // //             </button>
// // //           ))}
// // //         </div>
// // //       </main>

// // //       {/* 3. Feedback Footer Bar */}
// // //       <footer
// // //         className={`
// // //         border-t-2 p-6 md:p-10 transition-colors duration-300
// // //         ${!isChecked ? "bg-white border-slate-200" : isCorrect ? "bg-emerald-100 border-emerald-200" : "bg-rose-100 border-rose-200"}
// // //       `}
// // //       >
// // //         <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
// // //           <div className="flex items-center gap-4">
// // //             {isChecked && (
// // //               <>
// // //                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
// // //                   <Icon
// // //                     icon={
// // //                       isCorrect ? "lucide:check-circle" : "lucide:alert-circle"
// // //                     }
// // //                     className={`text-4xl ${isCorrect ? "text-emerald-500" : "text-rose-500"}`}
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <h3
// // //                     className={`text-2xl font-black ${isCorrect ? "text-emerald-700" : "text-rose-700"}`}
// // //                   >
// // //                     {isCorrect ? "Excellent!" : "Correct solution:"}
// // //                   </h3>
// // //                   <p
// // //                     className={`font-bold ${isCorrect ? "text-emerald-600" : "text-rose-600"}`}
// // //                   >
// // //                     {isCorrect
// // //                       ? currentQ?.explanation
// // //                       : currentQ?.options.find((o) => o.isCorrect)?.text}
// // //                   </p>
// // //                 </div>
// // //               </>
// // //             )}
// // //           </div>

// // //           <div className="w-full md:w-auto">
// // //             {!isChecked ? (
// // //               <button
// // //                 onClick={handleCheck}
// // //                 disabled={!selectedOption}
// // //                 className={`
// // //                   w-full md:w-auto px-16 py-4 rounded-2xl font-black text-lg uppercase tracking-widest transition-all
// // //                   ${
// // //                     selectedOption
// // //                       ? "bg-emerald-500 text-white shadow-[0_5px_0_0_rgba(5,150,105,1)] active:shadow-none active:translate-y-1"
// // //                       : "bg-slate-200 text-slate-400 cursor-not-allowed"
// // //                   }
// // //                 `}
// // //               >
// // //                 Check
// // //               </button>
// // //             ) : (
// // //               <button
// // //                 onClick={handleNext}
// // //                 className={`
// // //                   w-full md:w-auto px-16 py-4 text-white rounded-2xl font-black text-lg uppercase tracking-widest shadow-[0_5px_0_0_rgba(0,0,0,0.2)] active:shadow-none active:translate-y-1 transition-all
// // //                   ${isCorrect ? "bg-emerald-500" : "bg-rose-500"}
// // //                 `}
// // //               >
// // //                 Continue
// // //               </button>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </footer>
// // //     </div>
// // //   );
// // // };

// // // export default QuizPage;
