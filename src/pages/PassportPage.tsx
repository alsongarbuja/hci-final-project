import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store/useStore";
import { countries } from "../utils/lesson";

const PassportPage: React.FC = () => {
  const navigate = useNavigate();
  const { unlockedLessons, hearts } = useStore();

  // Mock data for Streak/XP - Replace with store values if available
  const streak = 5;
  const totalXp = 1250;

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans">
      {/* 1. DYNAMIC HEADER */}
      <header className="bg-white border-b-2 border-stone-200 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-stone-500 hover:text-stone-800 transition-colors font-black uppercase text-sm"
          >
            <Icon icon="lucide:arrow-left" className="text-xl" />
            Back
          </button>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 font-black text-orange-500">
              <Icon icon="lucide:flame" />
              {streak}
            </div>
            <div className="flex items-center gap-2 font-black text-yellow-500">
              <Icon icon="carbon:growth" /> {totalXp}
            </div>
            <div className="flex items-center gap-2 font-black text-rose-500">
              <Icon icon="twemoji:red-heart" /> {hearts}
            </div>
          </div>
        </div>
      </header>

      <main className="grow p-6 md:p-12 flex flex-col items-center">
        {/* 2. MASCOT SECTION */}
        <div className="max-w-2xl w-full flex items-center gap-6 mb-12">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 md:w-32 md:h-32 shrink-0 drop-shadow-xl"
          >
            <img
              src="/mascot.png"
              alt="Mascot"
              className="w-full h-full object-contain"
            />
          </motion.div>

          <div className="relative bg-white border-4 border-stone-200 p-6 rounded-4xl rounded-bl-none shadow-[0_6px_0_0_rgba(231,229,228,1)]">
            {/* Speech Bubble Arrow */}
            <div className="absolute bottom-0 -left-4 w-0 h-0 border-t-15 border-t-transparent border-r-20 border-r-stone-200 border-b-0 border-b-transparent"></div>
            <div className="absolute bottom-1 -left-2 w-0 h-0 border-t-12 border-t-transparent border-r-18 border-r-white border-b-0 border-b-transparent z-10"></div>

            <p className="font-bold text-stone-700 leading-tight">
              "Your passport is looking great! Master all units in a country to
              earn a permanent entry stamp!"
            </p>
          </div>
        </div>

        {/* 3. THE PASSPORT OBJECT */}
        <div className="max-w-md w-full relative">
          {/* Creative Decorations: Travel Stickers behind the passport */}
          <Icon
            icon="emojione:airplane"
            className="absolute -top-10 -right-10 text-6xl opacity-20 -rotate-12"
          />
          <Icon
            icon="emojione:luggage"
            className="absolute -bottom-10 -left-12 text-7xl opacity-10 rotate-12"
          />

          <div className="bg-[#3a5a40] rounded-[2.5rem] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-b-12 border-[#2d4632]">
            <div className="bg-[#3a5a40] rounded-4xl p-8 border-2 border-[#4f7a57] text-center text-stone-200 relative overflow-hidden">
              {/* Decorative Gold Leaf Patterns */}
              <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <Icon
                  icon="gis:world-map"
                  className="w-full h-full scale-150"
                />
              </div>

              <Icon
                icon="lucide:globe"
                className="text-6xl mx-auto mb-4 text-[#f4ebd0] opacity-80"
              />
              <h1 className="text-3xl font-black uppercase tracking-[0.2em] text-[#f4ebd0]">
                Passport
              </h1>
              <div className="h-0.5 w-24 bg-[#f4ebd0]/30 mx-auto my-3" />
              <p className="text-xs font-black opacity-70 tracking-widest uppercase">
                Global Citizen Program
              </p>
            </div>

            <div className="bg-[#f4ebd0] m-3 rounded-3xl p-6 min-h-100 grid grid-cols-2 gap-4 relative shadow-inner">
              {/* Subtle Paper Texture Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

              {countries.map((country) => {
                const isMastered =
                  unlockedLessons[country.id]?.length ===
                  country.lessons.length;

                return (
                  <motion.div
                    key={country.id}
                    whileHover={isMastered ? { scale: 1.05, rotate: 5 } : {}}
                    className={`
                      relative flex flex-col items-center justify-center aspect-square border-2 border-dashed rounded-2xl p-4 transition-all
                      ${isMastered ? "border-stone-400 bg-white/50 shadow-sm" : "border-stone-300 opacity-40"}
                    `}
                  >
                    {isMastered ? (
                      <div className="flex flex-col items-center">
                        <div className="relative">
                          <Icon
                            icon={country.stampIcon}
                            className="text-7xl drop-shadow-md z-10 relative"
                          />
                          {/* The "Ink Smudge" effect */}
                          <div className="absolute inset-0 bg-blue-900/10 blur-sm rounded-full -rotate-12 scale-110" />
                        </div>
                        <p className="mt-3 font-black text-[9px] text-stone-500 uppercase tracking-tighter border-t border-stone-300 pt-1">
                          {country.name} • ARRIVED
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <Icon
                          icon="lucide:lock"
                          className="text-3xl text-stone-500"
                        />
                        <span className="text-[8px] font-black text-stone-600 uppercase tracking-widest">
                          {country.name}
                        </span>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Footer Decoration */}
          <p className="text-center mt-8 text-stone-400 font-bold text-xs uppercase tracking-[0.3em]">
            Official Educational Document
          </p>
        </div>
      </main>
    </div>
  );
};

export default PassportPage;
// import React from "react";
// import { motion } from "framer-motion";
// import { Icon } from "@iconify/react";
// import { useStore } from "../store/useStore";
// import { countries } from "../utils/lesson";

// const PassportPage: React.FC = () => {
//   const { unlockedLessons } = useStore(); // Assuming your store tracks this

//   return (
//     <div className="min-h-screen bg-stone-100 p-8 flex flex-col items-center">
//       <div className="max-w-md w-full bg-[#3a5a40] rounded-3xl p-1 shadow-2xl border-b-8 border-[#2d4632]">
//         <div className="bg-[#3a5a40] rounded-2xl p-8 border-2 border-[#4f7a57] text-center text-stone-200">
//           <Icon
//             icon="lucide:book"
//             className="text-6xl mx-auto mb-4 opacity-50"
//           />
//           <h1 className="text-3xl font-black uppercase tracking-[0.2em]">
//             Passport
//           </h1>
//           <p className="text-xs font-bold opacity-70">Republic of Learning</p>
//         </div>

//         <div className="bg-[#f4ebd0] m-2 rounded-xl p-6 min-h-100 grid grid-cols-2 gap-6 relative">
//           {countries.map((country) => {
//             const isMastered =
//               unlockedLessons[country.id]?.length === country.lessons.length;

//             return (
//               <motion.div
//                 key={country.id}
//                 initial={
//                   isMastered ? { scale: 0, rotate: -20 } : { opacity: 0.3 }
//                 }
//                 animate={
//                   isMastered ? { scale: 1, rotate: 10 } : { opacity: 0.3 }
//                 }
//                 className="flex flex-col items-center justify-center border-2 border-dashed border-stone-400 rounded-xl p-4 grayscale-0"
//               >
//                 {isMastered ? (
//                   <div className="relative group">
//                     <Icon
//                       icon={country.stampIcon}
//                       className="text-7xl drop-shadow-md"
//                     />
//                     <div className="absolute inset-0 bg-blue-500/20 mix-blend-color rounded-full pointer-events-none" />
//                     <p className="mt-2 font-black text-[10px] text-stone-600 uppercase text-center">
//                       Visited: {new Date().toLocaleDateString()}
//                     </p>
//                   </div>
//                 ) : (
//                   <Icon
//                     icon="lucide:lock"
//                     className="text-4xl text-stone-300"
//                   />
//                 )}
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PassportPage;
