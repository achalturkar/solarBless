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
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id=""
      className="relative w-full h-[90vh] md:h-[95vh] overflow-hidden"
    >

      {/* Slider Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[1400ms] ease-out ${index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority
            className="object-cover"
          />

          {/* DARKER Overlay for excellent text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/20"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-center text-center">

        <div className="text-center">
          <h1 className="inline-block text-base md:text-2xl font-bold tracking-widest text-red-500 uppercase mb-2
                 bg-white px-4 py-1 rounded-xl shadow-sm">
            SUNBLESS SOLAR SYSTEMS
          </h1>
        </div>


        <h3 className="text-base md:text-lg font-semibold tracking-widest text-green-400 uppercase">
          Powering India Towards a Greener Future
        </h3>

        <h1 className="mt-3 text-3xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-xl">
          Illuminating Tomorrow with
          <br />
          <span className="text-yellow-300">
            Smart & Sustainable Solar Solutions
          </span>
        </h1>

        <p className="mt-5 text-sm md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Reliable solar energy for Homes, Societies, Schools & Industries.
        </p>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <Link href={"#about"}>
            <button className="px-7 py-3 rounded-full font-semibold bg-red-500 text-white cursor-pointer shadow-lg hover:bg-red-600 hover:scale-105 transition-all duration-300">
              Explore Our Solutions
            </button>
          </Link>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-7 w-full flex justify-center z-20 gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-1 h-1 rounded-full transition-all duration-300 ${index === current
              ? "bg-yellow-300 scale-150"
              : "bg-white/40 hover:bg-white/70"
              }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
