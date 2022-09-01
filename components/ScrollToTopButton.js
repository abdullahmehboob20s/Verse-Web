import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

function ScrollToTopButton() {
  const [isScrolledMuch, setIsScrolledMuch] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handler = () => {
    if (window.scrollY > 600) {
      setIsScrolledMuch(true);
    } else {
      setIsScrolledMuch(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handler);
    return () => document.removeEventListener("scroll", handler);
  });

  return (
    <button
      onClick={() => scrollToTop()}
      className={`fixed bottom-2 right-2 w-10 h-10 bg-purple rounded-tl-[20px] rounded-tr-[20px] flex items-center justify-center text-2xl text-white transition-all duration-[.2s] hover:bg-orange z-50 ${
        isScrolledMuch
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <FaAngleUp />
    </button>
  );
}

export default ScrollToTopButton;
