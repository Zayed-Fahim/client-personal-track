import React from "react";
import "../../css/loginButton.css";
import { useNavigate } from "react-router-dom";
import useTheme from "../../../hooks/useTheme";

const LoginButton = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  return (
    <>
      {theme === "light" ? (
        <button
          onClick={() => navigate("/auth/login")}
          className="login-button bg-[#0F172A] dark:bg-[#7DD3FC] after:bg-white dark:after:bg-[#0F172A]"
          type="button"
        >
          <span className="login-text font-bold text-white">Login</span>
          <span className="text-black dark:text-white font-bold">Login</span>
        </button>
      ) : (
        <button
          onClick={() => navigate("/auth/login")}
          className="login-button bg-[#0F172A] dark:bg-[#7DD3FC] after:bg-[#7DD3FC] dark:after:bg-[#0F172A]"
          type="button"
        >
          <span className="login-text font-bold text-black">Login</span>
          <span className="login-text font-bold text-white">Login</span>
        </button>
      )}
    </>
  );
};

export default LoginButton;
