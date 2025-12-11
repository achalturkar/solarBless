import { FaLeaf, FaLightbulb, FaUsers, FaRecycle, FaShieldAlt } from "react-icons/fa";

export default function CoreSection() {
  const coreValues = [
    { title: "Quality", desc: "Delivering products and services of the highest quality, adhering to industry standards.", icon: FaShieldAlt },
    { title: "Innovation", desc: "Exploring and implementing the latest solar technologies to provide cutting-edge solutions.", icon: FaLightbulb },
    { title: "Customer Focus", desc: "Prioritizing customer satisfaction with personalized solutions and responsive support.", icon: FaUsers },
    { title: "Sustainability", desc: "Promoting environmental responsibility and contributing to a sustainable future.", icon: FaRecycle },
    { title: "Integrity", desc: "Conducting business with honesty, transparency, and ethical practices.", icon: FaLeaf },
  ];

  return (
    <section id="core" className="bg-gradient-to-r from-yellow-50 to-yellow-100 py-20 px-6">
      {/* <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Philosophy</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          At SunBless Solar Systems, our mission, vision, and values guide everything we do. 
          We are committed to sustainable energy, innovative solutions, and exceptional customer service.
        </p>
      </div> */}

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {coreValues.map((value, index) => {
          const Icon = value.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 text-left"
             data-aos="fade-up">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-yellow-400 text-white p-3 rounded-full inline-flex">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{value.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{value.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Mission & Vision */}
      <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg shadow-md"  data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To accelerate the adoption of solar energy by providing high-quality, cost-effective, and customized SWH and PV solutions, while exceeding customer expectations through exceptional service and support.
          </p>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg shadow-md"  data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To be the preferred partner for sustainable energy solutions, driving the transition to a cleaner and more environmentally responsible world.
          </p>
        </div>
      </div>
    </section>
  );
}
