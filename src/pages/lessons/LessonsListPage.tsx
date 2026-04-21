import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { countries } from "../../utils/lesson";
import { useStore } from "../../store/useStore";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Tooltip } from "react-tooltip";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const LessonsListPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "map text-center">("grid");

  const [hoveredCountry, setHoveredCountry] = useState<any>(null);

  const { completedLessons } = useStore();
  const continents = ["All", "Asia", "Americas", "Europe", "Africa"];

  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const matchesSearch = country.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesContinent =
        activeTab === "All" || country.continent === activeTab;
      return matchesSearch && matchesContinent;
    });
  }, [searchQuery, activeTab]);

  const getProgress = (countryId: string) => {
    const country = countries.find((c) => c.id === countryId);
    if (!country) return 0;
    const completed = completedLessons[countryId]?.length || 0;
    const total = country.lessons.length || 1;
    return Math.round((completed / total) * 100);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-white pt-16 pb-24 px-6 relative z-10 overflow-hidden border-b border-slate-100">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-slate-500 font-bold mb-4 hover:text-emerald-600 transition-colors"
              >
                <Icon icon="lucide:arrow-left" />
                Back to Home
              </button>
              <h1 className="text-5xl font-black text-slate-800 tracking-tight mb-2">
                EXPLORE <span className="text-emerald-500">WORLD</span>
              </h1>
            </div>

            <div className="flex bg-slate-100 p-1 rounded-2xl">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-6 py-3 rounded-xl font-black ${viewMode === "grid" ? "bg-white text-emerald-600 shadow-sm" : "text-slate-500"}`}
              >
                GRID
              </button>
              <button
                onClick={() => setViewMode("map text-center")}
                className={`px-6 py-3 rounded-xl font-black ${viewMode.includes("map") ? "bg-white text-emerald-600 shadow-sm" : "text-slate-500"}`}
              >
                MAP
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 -mt-12 relative z-20">
        {viewMode === "grid" ? (
          <>
            <div className="flex flex-col md:flex-row gap-4 mb-12">
              <div className="flex-1 relative group">
                <Icon
                  icon="lucide:search"
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-xl group-focus-within:text-emerald-500 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Search countries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border-2 border-slate-100 rounded-2xl py-5 pl-14 pr-6 font-bold text-slate-600 focus:outline-none focus:border-emerald-500 shadow-xl shadow-slate-200/50 transition-all"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                {continents.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-xl font-black whitespace-nowrap transition-all ${
                      activeTab === tab
                        ? "bg-slate-800 text-white shadow-lg shadow-slate-200"
                        : "bg-white text-slate-400 hover:bg-slate-50"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredCountries.map((country) => {
                  const progress = getProgress(country.id);
                  const isCompleted = progress === 100;

                  return (
                    <motion.div
                      layout
                      key={country.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      whileHover={{ y: -8 }}
                      onClick={() => navigate(`/lessons/${country.id}`)}
                      className="group cursor-pointer"
                    >
                      <div className="bg-white rounded-4xl p-2 shadow-xl shadow-slate-200/60 border-2 border-transparent group-hover:border-emerald-500 transition-all relative overflow-hidden">
                        {isCompleted && (
                          <motion.div
                            initial={{ rotate: -20, scale: 0 }}
                            animate={{ rotate: -15, scale: 1 }}
                            className="absolute top-4 right-4 z-30 bg-emerald-100 border-4 border-double border-emerald-600 rounded-full w-20 h-20 flex items-center justify-center opacity-80 pointer-events-none"
                          >
                            <div className="text-center">
                              <p className="text-[10px] font-black text-emerald-700 leading-none">
                                PASSED
                              </p>
                              <Icon
                                icon="lucide:check-circle"
                                className="text-emerald-600 text-xl mx-auto"
                              />
                              <p className="text-[8px] font-black text-emerald-700 leading-none">
                                100%
                              </p>
                            </div>
                          </motion.div>
                        )}

                        <div className="bg-slate-50 rounded-[1.7rem] p-6">
                          <div className="flex items-start justify-between mb-8">
                            <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                              <Icon
                                icon={country.stampIcon}
                                className="text-5xl"
                              />
                            </div>
                            <div className="text-right">
                              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                                {country.continent}
                              </span>
                              <h3 className="text-2xl font-black text-slate-800 leading-tight">
                                {country.name}
                              </h3>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div className="flex justify-between items-end">
                              <div className="text-slate-400 font-bold text-sm">
                                Progress
                              </div>
                              <div className="text-2xl font-black text-slate-800">
                                {progress}%
                              </div>
                            </div>
                            <div className="h-3 bg-slate-200 rounded-full overflow-hidden p-1">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                className="h-full bg-emerald-500 rounded-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-[3rem] p-2 shadow-2xl border-2 border-slate-100 relative overflow-hidden"
          >
            <ComposableMap projectionConfig={{ scale: 170 }}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const countryData = countries.find(
                      (c) =>
                        c.name.toLowerCase() ===
                        geo.properties.name.toLowerCase(),
                    );

                    const progress = countryData
                      ? getProgress(countryData.id)
                      : 0;
                    const isSupported = !!countryData;
                    const isCompleted = isSupported && progress === 100;

                    let fillColor = "#f1f5f9";
                    if (isSupported) {
                      fillColor = isCompleted ? "#10b981" : "#3b82f6";
                    }

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        data-tooltip-id="map-tooltip"
                        onMouseEnter={() => {
                          if (isSupported)
                            setHoveredCountry({ ...countryData, progress });
                        }}
                        onMouseLeave={() => setHoveredCountry(null)}
                        onClick={() => {
                          if (isSupported)
                            navigate(`/lessons/${countryData.id}`);
                        }}
                        style={{
                          default: {
                            fill: fillColor,
                            outline: "none",
                            stroke: "#fff",
                            strokeWidth: 0.5,
                          },
                          hover: {
                            fill: isSupported
                              ? isCompleted
                                ? "#059669"
                                : "#2563eb"
                              : "#e2e8f0",
                            cursor: isSupported ? "pointer" : "default",
                            outline: "none",
                          },
                          pressed: { fill: "#1e40af", outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>

            <Tooltip
              id="map-tooltip"
              place="top"
              style={{
                backgroundColor: "transparent",
                boxShadow: "none",
                padding: 0,
              }}
              render={() =>
                hoveredCountry && (
                  <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-700 min-w-50 animate-in fade-in zoom-in duration-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon
                        icon={hoveredCountry.stampIcon}
                        className="text-3xl"
                      />
                      <div>
                        <h4 className="font-black text-lg leading-none">
                          {hoveredCountry.name}
                        </h4>
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                          {hoveredCountry.continent}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-bold">
                        <span>Progress</span>
                        <span
                          className={
                            hoveredCountry.progress === 100
                              ? "text-emerald-400"
                              : "text-blue-400"
                          }
                        >
                          {hoveredCountry.progress}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-500 ${hoveredCountry.progress === 100 ? "bg-emerald-500" : "bg-blue-500"}`}
                          style={{ width: `${hoveredCountry.progress}%` }}
                        />
                      </div>
                    </div>
                    <p className="text-[9px] text-slate-500 mt-3 font-bold italic">
                      Click to open Roadmap
                    </p>
                  </div>
                )
              }
            />
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default LessonsListPage;
