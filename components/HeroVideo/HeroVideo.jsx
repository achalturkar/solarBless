"use client";

import Link from "next/link";
import { MdCall } from "react-icons/md";

export default function HeroVideo() {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/solar-hero.mp4" // your video here
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center h-full px-6 lg:px-16 max-w-5xl">
        
        {/* Main Heading */}
        <h1 className="text-white font-extrabold text-4xl md:text-6xl leading-tight drop-shadow-xl">
          Illuminating the Future with <br />
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
            Sustainable Solar Solutions
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-200 text-lg md:text-xl max-w-xl mt-4 leading-relaxed font-light drop-shadow-md">
          Empowering homes, businesses, and industries with clean, renewable and cost-efficient solar energy.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <Link href="#contact">
            <div className="
              inline-flex items-center gap-3 
              px-6 py-3 
              bg-gradient-to-r from-yellow-500 to-orange-600
              rounded-full shadow-xl
              text-white font-semibold text-lg
              hover:scale-110 hover:shadow-2xl
              transition-all duration-300 cursor-pointer
            ">
              <MdCall size={24} />
              Contact Us
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
