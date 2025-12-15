"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import SectionTitle from "../SectionTitle/SectionTitle";
import { IoCall } from "react-icons/io5";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    requirement: "Solar PV",
    message: "",
  });

  const ADMIN_WHATSAPP = "918087118536";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const wpMessage = `
New Contact Form Submission:
--------------------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
City: ${formData.city}
Requirement: ${formData.requirement}
Message: ${formData.message}
    `;

    window.open(
      `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(wpMessage)}`,
      "_blank"
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      requirement: "Solar PV",
      message: "",
    });

    alert("Message sent successfully via WhatsApp!");
  };

  return (
    <section
      id="contact"
      className="py-10 px-6 bg-gradient-to-b from-yellow-50 to-orange-50 overflow-x-hidden"
    >
      {/* Section Title */}
      <SectionTitle
        title="Get in Touch"
        subtitle="Reach out for premium solar PV and solar water heater solutions"
      />

      {/* Contact Details */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mt-10 overflow-x-hidden">

        {/* Address */}
        <div className="bg-white p-6 shadow-lg rounded-xl border-l-4 border-yellow-500" data-aos="fade-up">
          <FaMapMarkerAlt className="text-yellow-500 text-3xl mb-3" />
          <h3 className="text-xl font-semibold">Head Office</h3>
          <p className="text-gray-700 mt-2">
            200, Ascent Chamber, Narayan Peth, Pune – 411030
          </p>
        </div>

        {/* Factory Address */}
        <div className="bg-white p-6 shadow-lg rounded-xl border-l-4 border-orange-500" data-aos="fade-up">
          <FaMapMarkerAlt className="text-orange-500 text-3xl mb-3" />
          <h3 className="text-xl font-semibold">Factory Address</h3>
          <p className="text-gray-700 mt-2">
            S.No.14 Dhadge Industrial Estate, Nanded Phata,
            Near Savali Dhaba, Pune – 411041
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-6 shadow-lg rounded-xl border-l-4 border-yellow-500" data-aos="fade-up">
          <h3 className="text-xl font-semibold mb-3">Contact Info</h3>
          <p className="flex items-center gap-3 text-gray-700">
            <FaEnvelope className="text-yellow-500 text-xl" />
            sunblesssolar@gmail.com
          </p>
          <p className="flex items-center gap-3 text-gray-700 mt-2">
            <IoCall  className="text-yellow-500 text-xl" />
            8087118536 / 8237784351
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto mt-16 bg-white p-4 md:p-10 shadow-xl rounded-xl border border-yellow-200 overflow-x-hidden" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Request a Callback
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400"
            required
          />

          <input
            type="text"
            name="city"
            placeholder="City / Location"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400"
            required
          />

          <select
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400"
          >
            <option>Solar PV</option>
            <option>Solar Water Heater</option>
            <option>Both</option>
          </select>

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 md:col-span-2"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full md:col-span-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:scale-[1.02] transition-transform"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
