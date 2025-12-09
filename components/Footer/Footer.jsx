import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-200">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/solar-bg.jpg" // Replace with your solar panel background image path
          alt="Solar Panels Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">SunBless Solar Systems</h2>
          <p className="mt-3 text-gray-300 leading-6">
            Powering a Sustainable Future with reliable Solar Water Heaters and PV Systems since 2009.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-yellow-400 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400 transition-colors">About</a></li>
            <li><a href="#services" className="hover:text-yellow-400 transition-colors">Services</a></li>
            <li><a href="#projects" className="hover:text-yellow-400 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start space-x-2">
              <FaMapMarkerAlt className="mt-1 text-yellow-400" />
              <span>Head Office: 200, Ascent Chamber Narayan Peth, Pune-411030</span>
            </li>
            <li className="flex items-start space-x-2">
              <FaMapMarkerAlt className="mt-1 text-yellow-400" />
              <span>Factory Address: S.No.14 Dhadge Industrial Estate, Nanded Phata Near Savali Dhaba, Pune-411041</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-yellow-400" />
              <span>sunblesssolar@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone className="text-yellow-400" />
              <span>8237784351 / 9552047630</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-yellow-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="relative z-10 text-center text-sm text-gray-400 mt-10 py-4 border-t border-gray-700">
        © 2025 SunBless Solar Systems. All Rights Reserved.
      </div>
    </footer>
  );
}
