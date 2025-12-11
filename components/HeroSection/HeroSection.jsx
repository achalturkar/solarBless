"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/sh2.jpg",
    alt: "Solar PV Panels",
  },
  {
    src: "/sh1.jpg",
    alt: "Solar Water Heater",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative w-full h-[90vh] md:h-[100vh] overflow-hidden bg-yellow-50">
      {/* Slider Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority
            className="object-cover object-center w-full h-full scale-105"
          />

          {/* Gradient Overlay for Solar Theme */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-yellow-900/20"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-center text-center text-white drop-shadow-xl">
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight tracking-tight">
          Illuminating the Future With <br />
          <span className="text-yellow-300 drop-shadow-2xl">
            Sustainable Solar Solutions
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-2xl opacity-95 font-medium">
          Powering Homes, Societies & Industries With Clean, Reliable Solar Energy.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-5">
          <button className="px-8 py-4 rounded-full font-semibold bg-yellow-400 text-gray-900 shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300">
            Explore Our Solutions
          </button>

         
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 w-full flex justify-center z-20 gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-yellow-300 scale-150"
                : "bg-white/40 hover:bg-white/70"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
