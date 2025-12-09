"use client"

// components/SolarStats.js
import { useEffect, useState } from "react";

const stats = [
  {
    label: "Solar Water Heater Installed",
    value: 100000,
    suffix: " L",
  },
  {
    label: "Solar PV Panels Completed",
    value: 1100,
    suffix: " kW",
  },
];

export default function SolarStats() {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const increment = Math.ceil(stat.value / 200); // speed of counter
      return setInterval(() => {
        setCounters((prev) => {
          const newCounters = [...prev];
          if (newCounters[index] < stat.value) {
            newCounters[index] = Math.min(newCounters[index] + increment, stat.value);
          }
          return newCounters;
        });
      }, 20); // update every 20ms
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="py-12 bg-yellow-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-yellow-200 rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300"
            >
              <p className="text-4xl font-bold mb-1 text-yellow-900">
                {counters[index].toLocaleString()}
                {stat.suffix}
              </p>
              <p className="text-lg font-semibold text-yellow-800">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
