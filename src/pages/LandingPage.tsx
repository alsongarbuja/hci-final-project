import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import { Icon } from "@iconify/react";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white text-slate-800 font-sans selection:bg-sky-200">
      <Header />

      <main className="w-full max-w-6xl mx-auto px-6 py-12 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96 bg-sky-100 rounded-full flex items-center justify-center border-4 border-sky-200 shadow-inner">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-64 h-64 md:w-80 md:h-80 mx-auto drop-shadow-2xl"
            >
              <img
                src="/mascot.png"
                alt="Globe Mascot"
                className="w-full h-full object-contain"
              />
            </motion.div>
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl border-2 border-slate-200 shadow-xl rotate-12">
              <p className="font-black text-slate-700 text-sm italic">
                "Ready to explore?"
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-black text-slate-800 leading-[1.1] mb-6">
            Master Geography through{" "}
            <span className="text-emerald-500">Play.</span>
          </h1>

          <ul className="space-y-4 mb-10">
            {[
              {
                icon: "lucide:clock",
                text: "Bite-sized lessons for busy schedules",
              },
              {
                icon: "lucide:mouse-pointer-2",
                text: "Interactive quizzes and map challenges",
              },
              {
                icon: "lucide:trophy",
                text: "Gamification & exclusive badges",
              },
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-lg font-bold text-slate-600"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <Icon icon={item.icon} />
                </div>
                {item.text}
              </li>
            ))}
          </ul>

          <div className="w-full max-w-sm">
            <Link
              to="/lessons"
              className="block w-full text-center py-5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl font-black text-xl shadow-[0_6px_0_0_rgba(5,150,105,1)] active:shadow-none active:translate-y-1 transition-all uppercase tracking-widest"
            >
              Start Learning Now
            </Link>
          </div>
        </div>
      </main>

      <section className="border-t-2 border-slate-100 py-20 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "twemoji:books",
              title: "Bite-Sized Lessons",
              desc: "Learn complex geography and culture in just 5 minutes a day with our structured roadmap.",
            },
            {
              icon: "twemoji:video-game",
              title: "Interactive Quizzes",
              desc: "Test your knowledge with multiple choice, drag-and-drop ordering, and true/false challenges.",
            },
            {
              icon: "twemoji:clapping-hands",
              title: "Gamification & Badges",
              desc: "Earn XP, maintain your heart streak, and collect unique stamps as you master each country.",
            },
          ].map((feat, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-6">
                <Icon icon={feat.icon} />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-3 uppercase tracking-tighter">
                {feat.title}
              </h3>
              <p className="text-slate-500 font-bold leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
