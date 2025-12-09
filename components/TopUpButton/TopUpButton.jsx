"use client";

import { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const TopUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > window.innerHeight * 0.6);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling
    });
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        showButton
          ? "fixed bottom-5 right-5 z-50 flex items-center justify-center"
          : "hidden"
      } 
        bg-gradient-to-r from-yellow-500 to-orange-600
        text-white rounded-full shadow-xl
        w-8 h-8
        hover:scale-110 hover:shadow-2xl
        transition-all duration-300 ease-out
      `}
    >
      <MdKeyboardDoubleArrowUp className="text-2xl drop-shadow-lg" />
    </button>
  );
};

export default TopUpButton;
