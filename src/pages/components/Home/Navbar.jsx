import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginButton from "../../smallComponents/Home/LoginButton";
import ThemeButton from "../../smallComponents/Home/ThemeButton";

const Navbar = () => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  document.addEventListener("scroll", handleScroll);
  return (
    <div
      className={`flex justify-between items-center py-3 px-5 sm:px-8 md:px-10 lg:px-28 z-[100] sticky top-0 ${
        scrollPosition >= 20 ? "bg-white dark:bg-[#0F172A]" : "bg-none"
      }`}
    >
      <h1
        onClick={() => navigate("/")}
        className="text-4xl cursor-pointer"
        style={{ fontFamily: "Honk, system-ui" }}
      >
        Personal{" "}
        <br className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden" />{" "}
        Track
      </h1>
      <div className="flex justify-center items-center gap-x-4">
        <LoginButton />
        <ThemeButton />
      </div>
    </div>
  );
};

export default Navbar;
