import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeButton from "../../smallComponents/Home/ThemeButton";
import LoginButton from "../../smallComponents/Home/LoginButton";

const Navbar = () => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.screenY);
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <div
      className={`flex justify-between items-center py-3 px-28 ${
        scrollPosition >= 15 ? "" : "sticky top-0 bg-white dark:bg-[#0F172A]"
      }`}
    >
      <h1
        onClick={() => navigate("/")}
        className="text-4xl cursor-pointer"
        style={{ fontFamily: "Honk, system-ui" }}
      >
        Personal Track
      </h1>
      <div className="flex justify-center items-center gap-x-4">
        <LoginButton />
        <ThemeButton />
      </div>
    </div>
  );
};

export default Navbar;
