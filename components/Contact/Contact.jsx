"use client";
import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        requirement: "Solar PV",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success) {
                alert("Message sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    city: "",
                    requirement: "Solar PV",
                    message: "",
                });
            } else {
                alert("Failed to send message: " + data.message);
            }
        } catch (error) {
            alert("Error sending message: " + error.message);
        }
    };
  //bg-gradient-to-r from-yellow-100 to-orange-100
    return (
        <section id="contact" className=" py-16 px-6">
            <SectionTitle
                title="Contact Us"
                subtitle="We are here to help you with reliable solar solutions"
            />

            <div className=" max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

                {/* Left Column - Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Request a Callback</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
                            required
                        />
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="City / Location"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
                            required
                        />
                        <select
                            name="requirement"
                            value={formData.requirement}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
                        >
                            <option>Solar PV</option>
                            <option>Solar Water Heater</option>
                            <option>Both</option>
                        </select>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
                            rows="4"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold py-3 rounded-lg hover:from-yellow-500 hover:to-orange-500 transition-colors"
                        >
                            Request a Callback
                        </button>
                    </form>
                </div>

                {/* Right Column - Contact Details */}
                <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Details</h2>
                    <p className="flex items-start space-x-2 text-gray-700">
                        <FaMapMarkerAlt className="mt-1 text-yellow-500" />
                        <span>
                            <strong>Head Office:</strong> 200, Ascent Chamber Narayan Peth, Pune-411030
                        </span>
                    </p>
                    <p className="flex items-start space-x-2 text-gray-700">
                        <FaMapMarkerAlt className="mt-1 text-yellow-500" />
                        <span>
                            <strong>Factory Address:</strong> S.No.14 Dhadge Industrial Estate, Nanded Phata Near Savali Dhaba, Pune-411041
                        </span>
                    </p>
                    <p className="flex items-center space-x-2 text-gray-700">
                        <FaEnvelope className="text-yellow-500" />
                        <span>sunblesssolar@gmail.com</span>
                    </p>
                    <p className="flex items-center space-x-2 text-gray-700">
                        <FaPhone className="text-yellow-500" />
                        <span>8237784351 / 9552047630</span>
                    </p>

                    {/* Optional: Embed Google Map */}
                    {/* <div className="mt-4 rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.423603389278!2d73.84989821537236!3d18.505582987393356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c047a94c2f3b%3A0x24fa6d82ec77c0b6!2sAscent%20Chamber%2C%20Narayan%20Peth%2C%20Pune!5e0!3m2!1sen!2sin!4v1700169200000!5m2!1sen!2sin"
                            width="100%"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div> */}
                </div>
            </div>
        </section>
    );
}
