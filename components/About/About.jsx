import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function About() {
  return (
    <section id="about" className=" py-10 px-6">
      <SectionTitle
        title="About Us"
        subtitle="Learn more about our journey in solar excellence"
      />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Column - Image */}
<div className="relative w-full h-[300px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl group border border-yellow-300/30">
          <Image
            src="/smp.jpg"
            alt="Solar Panels"
            fill
            className="
      object-cover 
      transition-transform duration-700 
      group-hover:scale-110
    "
          />

          {/* Soft Gradient Overlay */}
          <div className="
    absolute inset-0 
    bg-gradient-to-t from-black/40 via-black/10 to-transparent
    pointer-events-none
  "></div>

          {/* Yellow Glow Bottom Border */}
          <div className="
    absolute bottom-0 left-0 right-0 h-2 
    bg-gradient-to-r from-yellow-500/70 via-orange-400/70 to-yellow-500/70
  "></div>
        </div>


        {/* Right Column - Text Content */}
        <div className="flex flex-col justify-center" data-aos="fade-up">
          {/* <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About SunBless Solar Systems
          </h2> */}
          <p className="text-gray-700 leading-relaxed mb-6">
            SunBless Solar Systems is a <span className="font-semibold text-yellow-600">leading provider of innovative and reliable solar energy solutions</span>, specializing in both <span className="font-semibold text-yellow-600">Solar Water Heaters (SWHs)</span> and <span className="font-semibold text-yellow-600">Solar Photovoltaic (PV) Panel Systems.</span>
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We are committed to empowering individuals, businesses, and communities to embrace clean, affordable, and sustainable energy, contributing to a greener future for generations to come.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With years of experience and a passion for excellence, we offer <span className="font-semibold text-yellow-600">comprehensive solutions</span> tailored to meet the unique energy needs of our clients.
          </p>

          {/* Key Highlights */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded shadow-sm"  data-aos="fade-right">
              <h3 className="font-semibold text-gray-800">10+ Years Experience</h3>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded shadow-sm"  data-aos="fade-right">
              <h3 className="font-semibold text-gray-800">Trusted Solar Solutions</h3>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded shadow-sm"  data-aos="fade-right">
              <h3 className="font-semibold text-gray-800">Reliable PV & SWH Installations</h3>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded shadow-sm"  data-aos="fade-right">
              <h3 className="font-semibold text-gray-800">Customer Satisfaction Guaranteed</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
