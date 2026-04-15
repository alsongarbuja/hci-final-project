import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white text-slate-800 font-sans selection:bg-sky-200">
      <Header />

      <main className="w-full max-w-300 mx-auto px-6 py-12 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96 bg-sky-100 rounded-full flex items-center justify-center border-4 border-sky-200 shadow-inner">
            <span className="text-9xl animate-bounce">🌍</span>
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl border-2 border-slate-200 shadow-xl rotate-12">
              <p className="font-black text-slate-700 text-sm italic">
                "Let's learn!"
              </p>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-black text-slate-700 leading-tight mb-8">
            The free, fun, and effective way to learn geography!
          </h1>

          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Link
              to="/quiz"
              className="w-full text-center py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl font-black text-lg shadow-[0_5px_0_0_rgba(5,150,105,1)] active:shadow-none active:translate-y-1 transition-all uppercase tracking-wider"
            >
              Get Started
            </Link>

            <button className="w-full py-4 bg-white hover:bg-slate-50 text-sky-500 border-2 border-slate-200 rounded-2xl font-black text-lg shadow-[0_5px_0_0_rgba(226,232,240,1)] active:shadow-none active:translate-y-1 transition-all uppercase tracking-wider">
              I already have an account
            </button>
          </div>
        </div>
      </main>

      <section className="border-t-2 border-slate-200 py-16 bg-white">
        <div className="max-w-300 mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            {
              img: "🎯",
              title: "Personalized",
              desc: "Interactive maps that adapt to your learning pace.",
            },
            {
              img: "🏆",
              title: "Gamified",
              desc: "Earn gems, maintain streaks, and climb the leaderboard.",
            },
            {
              img: "🎒",
              title: "Bite-Sized",
              desc: "Lessons that fit into your daily 5-minute break.",
            },
          ].map((feat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                {feat.img}
              </div>
              <h3 className="text-xl font-extrabold text-slate-700 mb-2">
                {feat.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
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
