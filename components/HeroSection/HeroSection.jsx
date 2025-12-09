// components/HeroSection.js
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/abs.jpg",
    alt: "Solar PV Panels",
  },
  {
    src: "/abs1.jpg",
    alt: "Solar Water Heater",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden bg-yellow-50">
      {/* Slider Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 h-full flex flex-col justify-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          Illuminating the Future with <br />
          <span className="text-yellow-300">Sustainable Solar Solutions</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl opacity-90">
          Powering homes, businesses, and industries with clean, renewable
          energy.
        </p>

        <button className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
          Explore Our Solutions
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 w-full flex justify-center z-20 gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-yellow-300 scale-125" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
