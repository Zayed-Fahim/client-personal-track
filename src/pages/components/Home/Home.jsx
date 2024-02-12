import React from "react";
import HomeAnimation from "../../smallComponents/Home/HomeAnimation";

const Home = () => {
  return (
    <div
      className="flex flex-col px-5 sm:px-10 pt-20 md:px-10 md:pt-24 lg:pt-28 w-full min-h-[85vh]"
      style={{ fontFamily: "Allerta Stencil, sans-serif" }}
    >
      <div className="flex flex-col sm:gap-6 lg:gap-5 text-center dark:text-white">
        <h1 className="text-6xl font-bold hidden lg:block">
          Elevate Your Productivity <br /> and Simplify Your Life
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold lg:hidden">
          Elevate Your Productivity and Simplify Your Life
        </h1>
        <p className="text-[18px] sm:text-2xl">
          Become focused, organized, and <br className="lg:hidden" />
          calm <br className="lg:block hidden" /> with personal Track.
        </p>
      </div>
      <HomeAnimation />
    </div>
  );
};

export default Home;
