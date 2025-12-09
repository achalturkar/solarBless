"use client"
// components/AdvancedGallery.js
import { useState } from "react";
import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";

const projects = [
    {
        src: '/project/sbss1.webp',
        location: 'Mumbai, India',
        type: 'Residential Solar',
    },
    {
        src: '/project/sp2.webp',
        location: 'Pune, India',
        type: 'Commercial Solar',
    },
    {
        src: '/project/sp3.webp',
        location: 'Delhi, India',
        type: 'Industrial Solar',
    },
    {
        src: '/project/sp4.webp',
        location: 'Bangalore, India',
        type: 'Rooftop Solar',
    },
    {
        src: '/project/sp5.webp',
        location: 'Chennai, India',
        type: 'Solar PV',
    },
    {
        src: '/project/sw1.webp',
        location: 'Hyderabad, India',
        type: 'Solar Water Heater',
    },
    {
        src: '/project/sw2.webp',
        location: 'Kolkata, India',
        type: 'Off-grid Solar',
    },
    {
        src: '/project/sw3.webp',
        location: 'Jaipur, India',
        type: 'Solar Panels',
    },
];

export default function Gallery() {
    const [selected, setSelected] = useState(null);

    return (
        <section id="projects" className=" py-20 bg-gray-50">
            <SectionTitle
                title="Our Projects"
                subtitle="A glimpse of our successful solar installations"
            />

            <div className="max-w-7xl mx-auto px-4">


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
                            onClick={() => setSelected(project)}
                        >
                            <Image
                                src={project.src}
                                alt={`${project.type} in ${project.location}`}
                                width={400}
                                height={300}
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                                <p className="font-semibold text-lg">{project.type}</p>
                                <p className="text-sm">{project.location}</p>
                            </div>
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selected && (
                    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                        <div className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full mx-4 relative">
                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-2xl font-bold"
                            >
                                &times;
                            </button>
                            <Image
                                src={selected.src}
                                alt={selected.type}
                                width={800}
                                height={500}
                                className="w-full h-96 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{selected.type}</h3>
                                <p className="text-gray-600 mb-2">{selected.location}</p>
                                <p className="text-gray-700">{selected.description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
