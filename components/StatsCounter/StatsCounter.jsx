"use client";

import { useEffect, useRef, useState } from "react";
import { FaSolarPanel, FaFireAlt } from "react-icons/fa";

const stats = [
  {
    label: "Solar Water Heater Installed",
    value: 100000,
    suffix: "+ Liters",
    icon: <FaFireAlt className="text-4xl text-orange-600" />,
  },
  {
    label: "Solar PV Panels Completed",
    value: 1100,
    suffix: "+ kW",
    icon: <FaSolarPanel className="text-4xl text-green-700" />,
  },
];

export default function SolarStats() {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [startCount, setStartCount] = useState(false);

  const sectionRef = useRef(null);

  // ▶ Trigger counting only when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  // ▶ Counter animation
  useEffect(() => {
    if (!startCount) return;

    const intervals = stats.map((stat, index) => {
      const duration = 2000; // 2 seconds total
      const step = Math.ceil(stat.value / (duration / 30)); // smoother steps

      return setInterval(() => {
        setCounters((prev) => {
          const newCount = [...prev];
          if (newCount[index] < stat.value) {
            newCount[index] = Math.min(newCount[index] + step, stat.value);
          }
          return newCount;
        });
      }, 30);
    });

    return () => intervals.forEach(clearInterval);
  }, [startCount]);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-green-50 to-yellow-50"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* <h2 className="text-4xl font-extrabold text-green-800 tracking-wide mb-4">
          Our Solar Achievements
        </h2>
        <p className="text-lg text-green-700 mb-12">
          Delivering sustainable energy solutions with trust & innovation.
        </p> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" data-aos="fade-down">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-8 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-green-100"
            >
              {/* <div className="flex justify-center mb-4">{stat.icon}</div> */}

              <p className="text-5xl font-extrabold text-green-900 drop-shadow-sm">
                {counters[index].toLocaleString()}
                <span className="text-3xl text-green-800">{stat.suffix}</span>
              </p>

              <p className="text-xl font-semibold text-green-700 mt-3">
                {stat.label}
              </p>

              {/* subtle underline */}
              <div className="w-24 mx-auto mt-3 h-1 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
