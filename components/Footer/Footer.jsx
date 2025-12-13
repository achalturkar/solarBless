"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";

import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">

      {/* Background Image Overlay */}
      {/* <div className="absolute inset-0">
        <img
          src="/solar-bg.jpg"
          alt="Solar Background"
          className="w-full h-full object-cover opacity-15"
        />
      </div> */}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/90 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid sm:grid-cols-2 md:grid-cols-4 gap-14">

        {/* Logo + Description */}
        <div data-aos="fade-up">
          <Image
            src="/sbss.webp"
            width={120}
            height={120}
            alt="SunBless Solar Logo"
            className="mb-4 brightness-110 drop-shadow-xl"
          />

          <p className="text-gray-300 leading-7 text-sm">
            Powering a Sustainable Future with reliable Solar Water Heaters and
            Solar PV Systems.  
            <span className="block text-yellow-400 font-semibold mt-2">
              Trusted. Reliable. Renewable.
            </span>
          </p>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up">
          <h3 className="text-lg font-semibold text-white mb-4 border-l-4 pl-3 border-yellow-400">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-yellow-400 transition-all"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-up">
          <h3 className="text-lg font-semibold text-white mb-4 border-l-4 pl-3 border-yellow-400">
            Contact Us
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-yellow-400 mt-1 text-lg" />
              <p>Head Office: 200, Ascent Chamber Narayan Peth, Pune 411030</p>
            </li>

            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-yellow-400 mt-1 text-2xl" />
              <p>
                Factory: S.No.14 Dhadge Industrial Estate, Nanded Phata Near
                Savali Dhaba, Pune 411041
              </p>
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400 text-lg" />
              <a
                href="mailto:sunblesssolar@gmail.com"
                className="hover:text-yellow-400"
              >
                sunblesssolar@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-3">
              <IoCall className="text-yellow-400 text-lg" />
               <a href="tel:9552047630" className="hover:text-yellow-400">
                8087118536 
              </a>{" "}
              /
              <a href="tel:8237784351" className="hover:text-yellow-400">
                8237784351
              </a>
             
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div data-aos="fade-up">
          <h3 className="text-lg font-semibold text-white mb-4 border-l-4 pl-3 border-yellow-400">
            Follow Us
          </h3>

          <div className="flex items-center gap-4 text-xl">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-yellow-500 hover:text-black transition-all shadow-md"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-yellow-500 hover:text-black transition-all shadow-md"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-yellow-500 hover:text-black transition-all shadow-md"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="relative z-10 text-center text-xs text-gray-400 py-5 border-t border-gray-700/50">
        © {year} SunBless Solar Systems — All Rights Reserved.
      </div>
    </footer>
  );
}
