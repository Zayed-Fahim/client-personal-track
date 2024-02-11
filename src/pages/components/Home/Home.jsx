import React from "react";
import video from "../../../assets/video/front-view.webm";

const Home = () => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-5 pt-[14px] w-full"
      style={{ fontFamily: "Allerta Stencil, sans-serif" }}
    >
      <div className="flex flex-col gap-3 text-center dark:text-white">
        <h1 className="text-5xl font-bold">
          Elevate Your Productivity <br /> and Simplify Your Life
        </h1>
        <p>Become focused, organized, and calm with personal Track.</p>
      </div>
      <video
        className="h-[700px]"
        autoPlay
        muted
        playsInline
        poster={video}
        src={video}
      />
    </div>
  );
};

export default Home;
