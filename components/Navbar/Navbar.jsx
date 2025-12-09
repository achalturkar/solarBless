"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BrochureButton from "../BrochureButton/BrochureButton";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="#home" className="text-2xl font-bold text-yellow-600">
                    <Image
                        src="/sbss.webp"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="hover:text-yellow-500 transition-colors duration-200"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-700 focus:outline-none text-lg">
                        {isOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 font-medium text-gray-700">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block hover:text-yellow-500 transition-colors duration-200"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
