import { BsSunFill } from "react-icons/bs";

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="w-full text-center mb-8"  data-aos="fade-up">
      {/* Animated Solar Line */}
      

      {/* Title */}
      <h2 className="text-4xl font-bold text-gray-900 tracking-wide">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-gray-600 mt-1 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}

      <div className="relative flex justify-center items-center mb-4">
        
        <div className="h-[2px] w-8 bg-yellow-500 animate-slide"></div>

        <span className="mx-3 text-yellow-600 text-2xl">
          <BsSunFill className="animate-pulse" />
        </span>

        <div className="h-[2px] w-8 bg-yellow-500 animate-slide"></div>
      </div>
    </div>
  );
}
