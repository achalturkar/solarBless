"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiX } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import { LuAlignLeft } from "react-icons/lu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`
        fixed w-full z-50 transition-all duration-300
        ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

        {/* Logo */}
        <Link href="#home">
          <Image
            src="/sbss.webp"
            width={90}
            height={90}
            alt="Sunbless Solar Systems Logo"
            className="object-contain hover:scale-105 transition-transform duration-300 drop-shadow-lg"
          />
        </Link>

        {/* Desktop Nav */}
        <div
          className={`hidden md:flex space-x-8 items-center font-semibold 
            ${isScrolled ? "text-gray-800" : "text-white"}
          `}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}

          {/* Brochure Button */}
          {/* <Link href="/SunblessSolarProfile.pdf" target="_blank">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold cursor-pointer bg-gradient-to-r from-yellow-500 to-orange-600 shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
              <FiDownload size={18} />
              Brochure
            </div>
          </Link> */}
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex items-center gap-3">

          {/* Small brochure button */}
          {/* <Link href="/SunblessSolarProfile.pdf" target="_blank">
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-full text-white text-sm font-semibold cursor-pointer bg-gradient-to-r from-yellow-500 to-orange-600 shadow-md transition-all duration-300">
              <FiDownload size={16} />
            </div>
          </Link> */}

          <button
            onClick={toggleMenu}
            className={`focus:outline-none text-3xl 
              ${isScrolled ? "text-gray-800" : "text-white"}
            `}
          >
            {isOpen ? <HiX /> : <LuAlignLeft />}
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[70%] bg-white shadow-xl border-l border-yellow-200
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header inside mobile menu */}
        <div className="flex justify-left items-center p-6">
          {/* <Link href="/SunblessSolarProfile.pdf" target="_blank">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold cursor-pointer bg-gradient-to-r from-yellow-500 to-orange-600 shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
              <FiDownload size={18} />
            </div>
          </Link> */}
          <div>

          </div>

          <button onClick={toggleMenu} className="text-3xl text-gray-800">
            <HiX />
          </button>
        </div>

        {/* Nav links inside slide */}
        <ul className="space-y-6 px-6 font-medium text-gray-800">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg hover:text-yellow-500 transition-colors duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
