import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-20 px-6">
           <SectionTitle 
        title="About Us"
        subtitle="Learn more about our journey in solar excellence"
      />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Image */}
        <div className="relative w-full h-full md:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/abs1.jpg"
            alt="Solar Panels"
            fill
            // className="object-cover"
          />
        </div>

        {/* Right Column - Text Content */}
        <div className="flex flex-col justify-center">
          {/* <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About SunBless Solar Systems
          </h2> */}
          <p className="text-gray-700 leading-relaxed mb-6">
            SunBless Solar Systems is a <span className="font-semibold text-yellow-600">leading provider of innovative and reliable solar energy solutions</span>, specializing in both <span className="font-semibold text-yellow-600">Solar Water Heaters (SWHs)</span> and <span className="font-semibold text-yellow-600">Solar Photovoltaic (PV) Panel Systems</span> since 20th July 2009.  
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We are committed to empowering individuals, businesses, and communities to embrace clean, affordable, and sustainable energy, contributing to a greener future for generations to come.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With years of experience and a passion for excellence, we offer <span className="font-semibold text-yellow-600">comprehensive solutions</span> tailored to meet the unique energy needs of our clients.
          </p>

          {/* Key Highlights */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded shadow-sm">
              <h3 className="font-semibold text-gray-800">15+ Years Experience</h3>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded shadow-sm">
              <h3 className="font-semibold text-gray-800">Trusted Solar Solutions</h3>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded shadow-sm">
              <h3 className="font-semibold text-gray-800">Reliable PV & SWH Installations</h3>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded shadow-sm">
              <h3 className="font-semibold text-gray-800">Customer Satisfaction Guaranteed</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
