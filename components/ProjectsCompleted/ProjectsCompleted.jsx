"use client";

import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle/SectionTitle";

const swhProjects = [
  "Gokhale Constructions",
  "Badhekar Group",
  "Devi Constructions, Pune",
  "Yog Associates, Pune",
  "Achalare Associates, Pune",
  "Sancheti Constructions, Pune",
  "Vastushodh Constructions, Pune",
  "Yash Promoters & Developers, Pune",
  "Sonigra Homes, Pune",
  "Sankalecha Constructions, Pune",
  "Ujwal Homes, Pune",
  "Bhandari Associates, Pune",
  "Rachana Lifestyle, Pune",
  "L.M. Bafna Constructions, Pune",
  "Avi Buildcon, Pune",
];

const pvProjects = [
  "Agarwal Dairy, Adashi Gao – 50 kW",
  "Moolchand Cloth, Laxmi Road – 50 kW",
  "Ashok Kataria Bungalow, Sankul Society – 20 kW",
  "Yash Elina, Karve Road – 50 kW",
  "Prakash Khiwasara, Abhimanshree Society – 20 kW",
  "Mantri Mill, Phursungi – 75 kW",
  "Gandharva Society, Rahatani – 100 kW",
  "Achalare House, Baner – 85 kW",
  "Marvel Isola Society, Mohammadwadi – 250 kW",
];

export default function ProjectsCompleted() {
  return (
    <section className="py-8" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        

         <SectionTitle
                        title=" Our Completed Solar Projects"
                        subtitle="Proudly empowering homes, societies, and businesses with clean, renewable solar energy across Pune."
                    />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Solar Water Heater Section */}
          <div
        data-aos="fade-up"
            className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-amber-500"
          >
            <h3 className="text-3xl font-bold text-amber-700 mb-3">
              Solar Water Heater Projects
            </h3>
            <p className="text-green-700 font-semibold mb-6">
              Installed <span className="text-amber-600 text-2xl font-bold">100,000+ Litres</span>
            </p>

            <ul className="space-y-3">
              {swhProjects.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-green-800">
                  <span className="text-amber-600 text-xl">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Solar PV Section */}
          <div
          data-aos="fade-up"
            className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-green-500"
          >
            <h3 className="text-3xl font-bold text-green-700 mb-3">
              Solar PV Panel Installations
            </h3>
            <p className="text-amber-700 font-semibold mb-6">
              Completed <span className="text-green-600 text-2xl font-bold">1100+ kW</span>
            </p>

            <ul className="space-y-3">
              {pvProjects.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-amber-800">
                  <span className="text-green-600 text-xl">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
