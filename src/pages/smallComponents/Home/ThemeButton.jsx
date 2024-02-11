import React, { useEffect, useRef, useState } from "react";
import { BsMoonStars } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import useTheme from "../../../hooks/useTheme";

const ThemeButton = () => {
  const buttonRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleThemeToggle = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  return (
    <div className="relative cursor-pointer p-2" ref={buttonRef}>
      <div onClick={handleThemeToggle} className="mb-1 relative">
        {theme === "light" ? (
          <MdOutlineLightMode size={20} className="text-blue-600" />
        ) : (
          <BsMoonStars size={20} className="text-blue-600" />
        )}
      </div>
      {isVisible && (
        <ul className="absolute right-[50%] top-[160%] translate-x-[50%] flex flex-col justify-center items-start border dark:border-none bg-white dark:bg-slate-800 py-1 rounded-xl">
          <li
            onClick={() => {
              toggleTheme("light");
              setIsVisible(false);
            }}
            className={`text-white font-semibold flex justify-center items-center gap-4 pl-5 pr-20 py-2 cursor-pointer rounded-tl-lg rounded-tr-lg ${
              theme === "light"
                ? "hover:bg-none text-blue-500"
                : "dark:hover:bg-[#2A3749]"
            }`}
          >
            <MdOutlineLightMode
              size={20}
              className={`${
                theme === "light" ? "text-blue-500" : "text-gray-600"
              }`}
            />
            <p
              className={`${
                theme === "light" ? " text-blue-500" : "text-white"
              }`}
            >
              Light
            </p>
          </li>
          <li
            onClick={() => {
              toggleTheme("dark");
              setIsVisible(false);
            }}
            className={`text-white font-semibold flex justify-center items-center gap-4 pl-5 pr-[82px] py-2 cursor-pointer rounded-bl-lg rounded-br-lg ${
              theme === "dark"
                ? "dark:hover:bg-none text-blue-500"
                : "hover:bg-[#F8FAFC]"
            }`}
          >
            <BsMoonStars
              size={20}
              className={`${
                theme === "dark" ? "text-blue-500" : "text-gray-600"
              }`}
            />
            <p
              className={`${
                theme === "dark" ? " text-blue-500" : "text-white"
              }`}
            >
              Dark
            </p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ThemeButton;
