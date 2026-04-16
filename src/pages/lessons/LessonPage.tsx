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

      {/* 2. DYNAMIC SCROLLING CONTENT */}
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
                {/* Variant 1: Solid Card, Variant 2: Bordered Card */}
                <div
                  className={`
                    max-w-[85%] p-8 rounded-[2.5rem] shadow-xl border-4 transition-all duration-500
                    ${
                      isEven
                        ? "bg-white border-slate-200 rounded-tl-none text-left shadow-slate-200/50"
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
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Icon } from "@iconify/react";
// import { useNavigate, useParams } from "react-router-dom";
// import { chapters, type NepalCategory } from "../../utils/lesson";

// const LessonPage: React.FC = () => {
//   const { countryId, lessonId } = useParams();
//   const navigate = useNavigate();
//   const scrollRef = useRef<HTMLDivElement>(null);

//   // Get all info pieces for this lesson
//   const infos =
//     chapters.find((v) => v.id === countryId)?.information[
//       lessonId as NepalCategory
//     ] || [];

//   // Track which steps have been "unlocked" / are visible
//   const [visibleSteps, setVisibleSteps] = useState([0]);
//   const currentStep = visibleSteps[visibleSteps.length - 1];
//   const isLastStep = currentStep === infos.length - 1;
//   const progress = ((currentStep + 1) / infos.length) * 100;

//   // Auto-scroll to bottom whenever a new step is added
//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
//     }
//   }, [visibleSteps]);

//   const handleNext = () => {
//     if (!isLastStep) {
//       setVisibleSteps((prev) => [...prev, prev.length]);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white flex flex-col font-sans">
//       {/* Fixed Header */}
//       <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b-2 border-slate-100">
//         <div className="max-w-4xl mx-auto px-6 py-6 flex items-center gap-6">
//           <button
//             onClick={() => navigate(-1)}
//             className="text-slate-400 hover:text-slate-600"
//           >
//             <Icon icon="lucide:x" className="text-3xl" />
//           </button>
//           <div className="grow h-4 bg-slate-100 rounded-full border-2 border-slate-100">
//             <motion.div
//               className="h-full bg-emerald-500 rounded-full"
//               initial={{ width: 0 }}
//               animate={{ width: `${progress}%` }}
//             />
//           </div>
//         </div>
//       </header>

//       {/* Main Content Area (Scrollable) */}
//       <main className="pt-32 pb-40 px-6 max-w-4xl mx-auto w-full space-y-12">
//         <AnimatePresence initial={false}>
//           {visibleSteps.map((stepIdx) => (
//             <motion.div
//               key={stepIdx}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
//               className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
//             >
//               {/* Mascot Section */}
//               <div className="relative w-32 h-32 md:w-48 md:h-48 shrink-0">
//                 <motion.img
//                   src="/mascot.png"
//                   alt="Mascot"
//                   animate={{ y: [0, -5, 0] }}
//                   transition={{
//                     duration: 4,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="w-full h-full object-contain"
//                 />
//                 <div
//                   className={`absolute -top-1 -right-1 w-12 h-12 rounded-xl ${infos[stepIdx].accentColor} flex items-center justify-center shadow-md border-4 border-white`}
//                 >
//                   <Icon
//                     icon={infos[stepIdx].illustration}
//                     className="text-white text-2xl"
//                   />
//                 </div>
//               </div>

//               {/* Speech Bubble */}
//               <div className="relative grow w-full">
//                 {/* Desktop Triangle */}
//                 <div className="hidden md:block absolute top-1/2 -left-4 -translate-y-1/2 w-0 h-0 border-t-12 border-t-transparent border-r-16 border-r-slate-200 border-b-12 border-b-transparent"></div>
//                 <div className="hidden md:block absolute top-1/2 -left-3 -translate-y-1/2 w-0 h-0 border-t-12 border-t-transparent border-r-16 border-r-white border-b-12 border-b-transparent z-10"></div>

//                 <div className="bg-white border-4 border-slate-200 p-6 md:p-8 rounded-4xl shadow-[0_6px_0_0_rgba(226,232,240,1)]">
//                   <h1 className="text-xl md:text-2xl font-black text-slate-700 mb-2 uppercase tracking-tighter">
//                     {infos[stepIdx].title}
//                   </h1>
//                   <p className="text-md md:text-lg text-slate-600 font-bold leading-relaxed">
//                     {infos[stepIdx].content}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>

//         {/* Scroll Target */}
//         <div ref={scrollRef} className="h-4" />
//       </main>

//       {/* Fixed Footer Bar */}
//       <footer className="fixed bottom-0 left-0 right-0 border-t-2 border-slate-200 p-6 bg-white/95 backdrop-blur-sm z-50">
//         <div className="max-w-4xl mx-auto flex justify-end">
//           {isLastStep ? (
//             <button
//               onClick={() => navigate("quiz")}
//               className="w-full md:w-auto px-12 py-4 bg-orange-500 text-white rounded-2xl font-black text-lg shadow-[0_5px_0_0_rgba(194,65,12,1)] hover:bg-orange-400 active:translate-y-1 transition-all uppercase tracking-wider flex items-center justify-center gap-2"
//             >
//               <Icon icon="lucide:zap" /> Take Quiz
//             </button>
//           ) : (
//             <button
//               onClick={handleNext}
//               className="w-full md:w-auto px-16 py-4 bg-emerald-500 text-white rounded-2xl font-black text-lg shadow-[0_5px_0_0_rgba(5,150,105,1)] hover:bg-emerald-400 active:translate-y-1 transition-all uppercase tracking-wider"
//             >
//               Continue
//             </button>
//           )}
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LessonPage;

// // import React, { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Icon } from "@iconify/react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import { chapters, type NepalCategory } from "../../utils/lesson";

// // const LessonPage: React.FC = () => {
// //   const { countryId, lessonId } = useParams();
// //   const [currentStep, setCurrentStep] = useState(0);
// //   const navigate = useNavigate();

// //   const infos = chapters.find((v) => v.id === countryId)?.information[
// //     lessonId as NepalCategory
// //   ];
// //   const progress = ((currentStep + 1) / infos!.length) * 100;

// //   const handleNext = () => {
// //     if (currentStep < infos!.length - 1) {
// //       setCurrentStep((s) => s + 1);
// //     }
// //   };

// //   const handlePrev = () => {
// //     if (currentStep > 0) {
// //       setCurrentStep((s) => s - 1);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-white flex flex-col font-sans overflow-hidden">
// //       <header className="max-w-4xl mx-auto w-full px-6 py-10 flex items-center gap-6">
// //         <button
// //           onClick={() => navigate(-1)}
// //           className="text-slate-400 hover:text-slate-600"
// //         >
// //           <Icon icon="lucide:x" className="text-3xl" />
// //         </button>
// //         <div className="grow h-4 bg-slate-100 rounded-full border-2 border-slate-100">
// //           <motion.div
// //             className="h-full bg-emerald-500 rounded-full"
// //             initial={{ width: 0 }}
// //             animate={{ width: `${progress}%` }}
// //           />
// //         </div>
// //       </header>

// //       <main className="grow flex flex-col items-center justify-center px-6 max-w-4xl mx-auto w-full">
// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={currentStep}
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -20 }}
// //             className="w-full flex flex-col md:flex-row items-center gap-12"
// //           >
// //             {/* 1. Mascot Section */}
// //             <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
// //               <motion.img
// //                 src="/mascot.png"
// //                 alt="Mascot"
// //                 animate={{ y: [0, -10, 0] }}
// //                 transition={{
// //                   duration: 3,
// //                   repeat: Infinity,
// //                   ease: "easeInOut",
// //                 }}
// //                 className="w-full h-full object-contain"
// //               />
// //               {/* Floating Topic Icon Badge */}
// //               <div
// //                 className={`absolute -top-2 -right-2 w-16 h-16 rounded-2xl ${infos![currentStep].accentColor} flex items-center justify-center shadow-lg border-4 border-white`}
// //               >
// //                 <Icon
// //                   icon={infos![currentStep].illustration}
// //                   className="text-white text-3xl"
// //                 />
// //               </div>
// //             </div>

// //             {/* 2. Speech Bubble Content Section */}
// //             <div className="relative grow">
// //               {/* Tooltip Arrow for Desktop (pointing left to mascot) */}
// //               <div className="hidden md:block absolute top-1/2 -left-4 -translate-y-1/2 w-0 h-0 border-t-15 border-t-transparent border-r-20 border-r-slate-200 border-b-15 border-b-transparent"></div>
// //               <div className="hidden md:block absolute top-1/2 -left-3 -translate-y-1/2 w-0 h-0 border-t-15 border-t-transparent border-r-20 border-r-white border-b-15 border-b-transparent z-10"></div>

// //               <div className="bg-white border-4 border-slate-200 p-8 md:p-10 rounded-[2.5rem] shadow-[0_8px_0_0_rgba(226,232,240,1)]">
// //                 <h1 className="text-2xl md:text-3xl font-black text-slate-700 mb-4 uppercase tracking-tighter text-center md:text-left">
// //                   {infos![currentStep].title}
// //                 </h1>
// //                 <p className="text-lg md:text-xl text-slate-600 font-bold leading-relaxed text-center md:text-left">
// //                   {infos![currentStep].content}
// //                 </p>
// //               </div>
// //             </div>
// //           </motion.div>
// //         </AnimatePresence>
// //       </main>

// //       <footer className="border-t-2 border-slate-200 p-6 md:p-10 bg-white">
// //         <div className="max-w-4xl mx-auto flex justify-between gap-4">
// //           <div className="w-1/3">
// //             {currentStep > 0 && (
// //               <button
// //                 onClick={handlePrev}
// //                 className="w-full py-4 bg-white text-slate-400 border-2 border-slate-200 rounded-2xl font-black text-lg shadow-[0_5px_0_0_rgba(226,232,240,1)] hover:bg-slate-50 active:shadow-none active:translate-y-1 transition-all uppercase"
// //               >
// //                 Back
// //               </button>
// //             )}
// //           </div>

// //           <div className="w-2/3 flex justify-end">
// //             {currentStep === infos!.length - 1 ? (
// //               <button
// //                 onClick={() => navigate("quiz")}
// //                 className="w-full md:w-auto px-12 py-4 bg-orange-500 text-white rounded-2xl font-black text-lg shadow-[0_5px_0_0_rgba(194,65,12,1)] hover:bg-orange-400 active:shadow-none active:translate-y-1 transition-all uppercase tracking-wider flex items-center justify-center gap-2"
// //               >
// //                 <Icon icon="lucide:zap" /> Take Quiz
// //               </button>
// //             ) : (
// //               <button
// //                 onClick={handleNext}
// //                 className="w-full md:w-auto px-16 py-4 bg-emerald-500 text-white rounded-2xl font-black text-lg shadow-[0_5px_0_0_rgba(5,150,105,1)] hover:bg-emerald-400 active:shadow-none active:translate-y-1 transition-all uppercase tracking-wider"
// //               >
// //                 Continue
// //               </button>
// //             )}
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default LessonPage;
