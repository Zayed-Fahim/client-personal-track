import React from "react";
import "../../css/redirectLoading.css";
import useTheme from "../../../hooks/useTheme";

const RedirectScreen = () => {
  const { theme } = useTheme();
  return (
    <div className="w-full h-screen bg-[#0F172A] text-white dark:text-black dark:bg-white flex justify-center items-center gap-4 text-xl font-semibold">
      <p>Redirecting. Please Wait a while.</p>
      {theme === "dark" ? (
        <div className="redirect-loader-1" />
      ) : (
        <div className="redirect-loader-2" />
      )}
    </div>
  );
};

export default RedirectScreen;
