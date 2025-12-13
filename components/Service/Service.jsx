import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function Service() {
  return (
    <section id="services" className="bg-white py-10 px-6">
      <SectionTitle
        title="Our Solar Services"
        subtitle="Premium Solar Water Heating & Photovoltaic Energy Solutions"
      />

      <div className="max-w-7xl mx-auto space-y-32">

        {/* ---------------------- SOLAR WATER HEATER ---------------------- */}
        <div className="grid md:grid-cols-2 gap-14 items-center" data-aos="fade-up">

          {/* LEFT IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img/swa2.jpg"
              alt="Solar water heater"
              width={500}
              height={500}
              className="rounded-2xl object-cover h-64 w-full shadow-xl"
            />

            <Image
              src="/img/swaa.jpeg"
              alt="Solar heater tall"
              width={500}
              height={800}
              className="rounded-2xl object-cover h-full w-full shadow-xl row-span-2"
            />

            <Image
              src="/swa1.jpeg"
              alt="Solar water heater"
              width={500}
              height={500}
              className="rounded-2xl object-cover h-64 w-full shadow-xl"
            />
          </div>

          {/* RIGHT INFO */}
          <div data-aos="fade-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Solar Water Heaters (SWHs)
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              We offer a wide range of <span className="font-semibold">high-performance Solar Water Heating</span> 
              solutions for residential, commercial, and industrial applications. Our systems are 
              engineered for durability, efficiency, and long-term savings.
            </p>

            <h4 className="font-semibold text-yellow-600 text-lg mb-2">
              Key Features:
            </h4>
            <ul className="space-y-3 text-gray-800">
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" />Efficient – maximum heat absorption, minimal energy loss.</li>
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" />Durable – built using corrosion-resistant, long-lasting materials.</li>
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" />Cost-Effective – saves up to 70–90% on water heating bills.</li>
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" />Eco-Friendly – reduces carbon footprint and energy consumption.</li>
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" />Ideal for homes, apartments, hotels, hospitals & industries.</li>
            </ul>

            <h4 className="font-semibold text-yellow-600 text-lg mt-6 mb-2">
              Why Choose Our SWH Systems?
            </h4>
            <ul className="space-y-3 text-gray-800">
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" />High-efficiency evacuated tube/flat plate collectors.</li>
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" />Pressure & non-pressure models available.</li>
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" />Minimal maintenance with long system life.</li>
            </ul>
          </div>
        </div>

        {/* ---------------------- SOLAR PV SYSTEM ---------------------- */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE BLOCK */}
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4" data-aos="fade-up">
            <Image
              src="/img/ssp.jpg"
              alt="Solar PV"
              width={500}
              height={500}
              className="rounded-2xl object-cover h-64 w-full shadow-xl"
            />

            <Image
              src="/img/sv.png"
              alt="Solar PV tall"
              width={500}
              height={800}
              className="rounded-2xl object-cover h-full w-full shadow-xl row-span-2"
            />

            <Image
              src="/img/spa2.jpg"
              alt="Solar PV"
              width={500}
              height={500}
              className="rounded-2xl object-cover h-64 w-full shadow-xl"
            />
          </div>

          {/* INFORMATION */}
          <div className="order-2 md:order-1" data-aos="fade-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Solar Photovoltaic (PV) Systems
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              We deliver complete turnkey <span className="font-semibold">Solar PV solutions</span> 
              including design, installation, maintenance, and monitoring. Generate your own clean 
              electricity and reduce dependency on conventional power.
            </p>

            <h4 className="font-semibold text-yellow-600 text-lg mb-2">
              Our Expertise:
            </h4>
            <ul className="space-y-3 text-gray-800">
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" />Customized system design based on roof type, load & budget.</li>
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" />Installation by certified, experienced technicians.</li>
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" />Real-time system monitoring for performance insights.</li>
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" />Comprehensive maintenance for long-term efficiency.</li>
            </ul>

            <h4 className="font-semibold text-yellow-600 text-lg mt-6 mb-2">
              PV System Types We Offer:
            </h4>
            <ul className="space-y-3 text-gray-800">
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" />On-Grid Systems – ideal for homes & commercial units.</li>
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" />Off-Grid Systems – suitable for remote areas without grid supply.</li>
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" />Hybrid Systems – combination of solar + battery + grid.</li>
            </ul>

            <h4 className="font-semibold text-yellow-600 text-lg mt-6 mb-2">
              Additional Advantages:
            </h4>
            <ul className="space-y-3 text-gray-800">
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" />Government subsidy guidance & full assistance.</li>
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" />High-efficiency Tier-1 panels with long warranties.</li>
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" />Inverter options: string, microinverter, hybrid.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
