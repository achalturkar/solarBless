"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  { src: "/om.webp", alt: "Solar PV Panels" },
  { src: "/on.jpg", alt: "Solar Water Heater" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-[90vh] md:h-[100vh] overflow-hidden bg-yellow-50"
    >
      {/* Slider Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[1400ms] ease-out ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority
            className="object-cover object-center"
          />

          {/* Solar Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-yellow-900/10"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center text-center">
        <h3 className="text-lg md:text-xl font-semibold tracking-widest text-green-500 uppercase drop-shadow-lg">
          Powering India Towards a Greener Future
        </h3>

        <h1 className="mt-3 text-4xl md:text-7xl font-extrabold leading-tight tracking-tight text-white drop-shadow-2xl">
          Illuminating Tomorrow with  
          <br />
          <span className="text-yellow-300 drop-shadow-[0_3px_20px_rgba(255,221,85,0.9)]">
            Smart & Sustainable Solar Solutions
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-gray-100 font-medium opacity-95 max-w-3xl mx-auto leading-relaxed">
          Powering Homes, Societies, Schools & Industries with clean, reliable & affordable energy.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-6">
          <Link href={"#about"}>
            <button className="px-8 py-4 rounded-full font-semibold bg-yellow-400 text-gray-900 shadow-xl shadow-yellow-500/30 hover:bg-yellow-500 hover:scale-105 transition-all duration-300">
              Explore Our Solutions
            </button>
          </Link>

          <Link href={"#contact"}>
            <button className="px-8 py-4 rounded-full font-semibold bg-white/10 text-white border border-white/40 backdrop-blur-md hover:bg-white/20 hover:scale-105 transition-all duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 w-full flex justify-center z-20 gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-yellow-300 scale-150 shadow-lg"
                : "bg-white/40 hover:bg-white/70"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
