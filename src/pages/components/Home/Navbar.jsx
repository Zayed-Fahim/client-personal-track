import React from "react";
import { useNavigate } from "react-router-dom";
import ThemeButton from "../../smallComponents/Home/ThemeButton";
import LoginButton from "../../smallComponents/Home/LoginButton";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between items-center py-3 px-28">
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
    </div>
  );
};

export default Navbar;
