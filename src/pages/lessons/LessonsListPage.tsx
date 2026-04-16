import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { countries } from "../../utils/lesson";

const LessonsListPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const continents = ["All", "Asia", "Americas", "Europe", "Africa"];

  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const matchesSearch = country.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesContinent =
        activeTab === "All" || country.continent === activeTab; // Casting to any in case types aren't updated yet

      return matchesSearch && matchesContinent;
    });
  }, [searchQuery, activeTab]);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-white pt-16 pb-24 px-6 relative z-10 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <Icon icon="gis:world-map" className="w-full h-full text-black" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter"
          >
            WHERE TO NEXT?
          </motion.h1>

          <div className="max-w-xl mx-auto relative">
            <Icon
              icon="lucide:search"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl"
            />
            <input
              type="text"
              placeholder="Search for a country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-100 shadow-sm focus:border-sky-400 focus:ring-0 transition-all font-bold text-slate-600 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative -mt-8 z-20">
        <div className="bg-white p-2 rounded-2xl shadow-xl flex gap-2 overflow-x-auto no-scrollbar border border-slate-100">
          {continents.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-xl font-black transition-all whitespace-nowrap ${
                activeTab === tab
                  ? "bg-sky-500 text-white shadow-[0_4px_0_0_rgba(14,165,233,1)]"
                  : "text-slate-400 hover:bg-slate-50 hover:text-slate-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Country Grid */}
      <main className="max-w-6xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCountries.map((country) => (
              <motion.div
                key={country.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                whileHover={{ y: -5 }}
                onClick={() => navigate(`/lessons/${country.id}`)}
                className="cursor-pointer group"
              >
                <div className="bg-white border-2 border-slate-200 rounded-4xl overflow-hidden shadow-[0_8px_0_0_rgba(226,232,240,1)] hover:border-sky-400 transition-all active:shadow-none active:translate-y-2">
                  <div
                    className={`h-24 relative ${
                      country.id === "nepal"
                        ? "bg-emerald-400"
                        : country.id === "usa"
                          ? "bg-blue-400"
                          : "bg-rose-400"
                    }`}
                  >
                    <div className="absolute -bottom-10 left-6">
                      <div className="w-20 h-20 bg-white rounded-2xl border-4 border-white shadow-lg flex items-center justify-center">
                        <Icon
                          icon={`emojione:flag-for-${
                            country.id === "nepal"
                              ? "nepal"
                              : country.id === "usa"
                                ? "united-states"
                                : "japan"
                          }`}
                          className="text-5xl"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-12 pb-6 px-6">
                    <h3 className="text-2xl font-black text-slate-700 uppercase tracking-tighter">
                      {country.name}
                    </h3>
                    <p className="text-slate-500 font-bold text-sm mb-4">
                      {country.tagline}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-slate-400 uppercase tracking-wider">
                          {country.continent || "Globe"}
                        </span>
                      </div>

                      <div className="bg-slate-100 px-3 py-1 rounded-lg flex items-center gap-1 text-slate-500 font-black text-xs uppercase">
                        <Icon icon="lucide:book-open" />
                        {country.lessons.length} Units
                      </div>
                    </div>

                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "33%" }} // Replace with actual progress logic
                        className="h-full bg-emerald-500 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredCountries.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Icon
              icon="twemoji:magnifying-glass-tilted-right"
              className="text-8xl mx-auto mb-4"
            />
            <h2 className="text-2xl font-black text-slate-400 uppercase">
              No results found
            </h2>
            <p className="font-bold text-slate-300">
              Try adjusting your filters or search query!
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default LessonsListPage;
