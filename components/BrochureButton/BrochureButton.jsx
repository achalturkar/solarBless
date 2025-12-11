import Link from "next/link";
import { FiDownload } from "react-icons/fi";

const BrochureButton = () => {
  return (
    <Link href="/SunblessSolarProfile.pdf" target="_blank">
      <div
        className="
          flex items-center gap-2 
          px-6 py-2
          rounded-full
          text-white font-semibold
          cursor-pointer
          bg-gradient-to-r from-yellow-500 to-orange-600
          shadow-md
          hover:scale-105 hover:shadow-lg
          transition-all duration-300
        "
      >
        <FiDownload size={20} />
      </div>
    </Link>
  );
};

export default BrochureButton;
