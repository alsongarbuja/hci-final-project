import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const lessons = [
    { name: "Nepal", icon: "twemoji:flag-nepal", path: "/lessons/nepal" },
    { name: "USA", icon: "twemoji:flag-united-states", path: "/lessons/usa" },
    { name: "Japan", icon: "twemoji:flag-japan", path: "/lessons/japan" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b-2 border-slate-200 px-6 py-4">
      <div className="max-w-300 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_4px_0_0_rgba(16,185,129,1)] group-active:shadow-none group-active:translate-y-1 transition-all">
            <span className="text-white text-2xl font-black">G</span>
          </div>
          <span className="text-2xl font-black tracking-tight text-emerald-500">
            geoquest
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-black uppercase text-sm tracking-wider transition-colors ${
                isDropdownOpen
                  ? "text-sky-500 bg-sky-50"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              Lessons
              <motion.span
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon icon="lucide:chevron-down" className="text-slate-500" />
              </motion.span>
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-[-1]"
                    onClick={() => setIsDropdownOpen(false)}
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full -left-30 mt-2 w-64 bg-white border-2 border-slate-200 rounded-2xl shadow-xl overflow-hidden"
                  >
                    <div className="p-2">
                      {lessons.map((lesson) => (
                        <Link
                          key={lesson.name}
                          to={lesson.path}
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <span className="text-2xl group-hover:scale-110 transition-transform">
                            <Icon icon={lesson.icon} className="text-2xl" />
                          </span>
                          <span className="font-bold text-slate-700">
                            {lesson.name}
                          </span>
                        </Link>
                      ))}

                      <div className="border-t-2 border-slate-100 mt-2 pt-2">
                        <Link
                          to="/lessons"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center justify-center p-3 w-full text-sky-500 font-black text-xs uppercase tracking-widest hover:bg-sky-50 transition-colors rounded-xl"
                        >
                          See all lessons
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <Link to="/passports">
            <button className="hidden md:block px-6 py-2 rounded-xl bg-sky-500 text-white font-black shadow-[0_4px_0_0_rgba(14,165,233,1)] active:shadow-none active:translate-y-1 transition-all uppercase text-xs tracking-widest">
              Profile
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
