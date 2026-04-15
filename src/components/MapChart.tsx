import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface MapChartProps {
  onCountryClick: (name: string) => void;
}

const MapChart: React.FC<MapChartProps> = ({ onCountryClick }) => {
  return (
    <div className="w-full h-[60vh] bg-white/2 rounded-[2.5rem] border border-white/5 overflow-hidden backdrop-blur-3xl relative">
      <ComposableMap
        projectionConfig={{ scale: 140 }}
        className="w-full h-full"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => {
                  const { name } = geo.properties as GeoProperties;
                  onCountryClick(name);
                }}
                style={{
                  default: {
                    fill: "#1e293b",
                    outline: "none",
                    stroke: "#334155",
                    strokeWidth: 0.5,
                  },
                  hover: {
                    fill: "#3b82f6",
                    outline: "none",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  },
                  pressed: {
                    fill: "#60a5fa",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
