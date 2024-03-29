import React from "react";
import Navbar from "../pages/components/Home/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/components/Home/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
