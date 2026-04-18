import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useStore } from "../store/useStore";
import { countries } from "../utils/lesson";

const PassportPage: React.FC = () => {
  const { unlockedLessons } = useStore(); // Assuming your store tracks this

  return (
    <div className="min-h-screen bg-stone-100 p-8 flex flex-col items-center">
      <div className="max-w-md w-full bg-[#3a5a40] rounded-3xl p-1 shadow-2xl border-b-8 border-[#2d4632]">
        <div className="bg-[#3a5a40] rounded-2xl p-8 border-2 border-[#4f7a57] text-center text-stone-200">
          <Icon
            icon="lucide:book"
            className="text-6xl mx-auto mb-4 opacity-50"
          />
          <h1 className="text-3xl font-black uppercase tracking-[0.2em]">
            Passport
          </h1>
          <p className="text-xs font-bold opacity-70">Republic of Learning</p>
        </div>

        <div className="bg-[#f4ebd0] m-2 rounded-xl p-6 min-h-100 grid grid-cols-2 gap-6 relative">
          {countries.map((country) => {
            const isMastered =
              unlockedLessons[country.id]?.length !== country.lessons.length;

            return (
              <motion.div
                key={country.id}
                initial={
                  isMastered ? { scale: 0, rotate: -20 } : { opacity: 0.3 }
                }
                animate={
                  isMastered ? { scale: 1, rotate: 10 } : { opacity: 0.3 }
                }
                className="flex flex-col items-center justify-center border-2 border-dashed border-stone-400 rounded-xl p-4 grayscale-0"
              >
                {isMastered ? (
                  <div className="relative group">
                    <Icon
                      icon={country.stampIcon}
                      className="text-7xl drop-shadow-md"
                    />
                    <div className="absolute inset-0 bg-blue-500/20 mix-blend-color rounded-full pointer-events-none" />
                    <p className="mt-2 font-black text-[10px] text-stone-600 uppercase text-center">
                      Visited: {new Date().toLocaleDateString()}
                    </p>
                  </div>
                ) : (
                  <Icon
                    icon="lucide:lock"
                    className="text-4xl text-stone-300"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PassportPage;
