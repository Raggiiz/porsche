import React, { useEffect, useRef } from "react";
import video from "../../assets/video-bg.webm";
import ArrowRight from '../../assets/icons/arrow-right.svg'
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div className="main-content absolute left-0 right-0 top-0 bottom-0 h-screen w-screen object-cover z-10 flex flex-col justify-center
      bg-gradient-to-r from-[#00000066] to-50%">
        <div className="p-40 flex flex-col">
          <h1 className="font-porsche text-7xl text-white">911 gt2</h1>
          <p className="text-white w-[500px] font-montserrat text-sm font-medium mt-3">
            A masterpiece of automotive engineering. Combining unrestrained
            power, iconic design, and advanced technology, it embodies the
            passion. Every curve, every acceleration is a unique and
            unforgettable experience.
          </p>
          <Link to={"/customize"} className="primary-btn mt-6">
            Customize vehicle
            <div className="arrow">
              <ArrowRight />
            </div>
          </Link>
        </div>
      </div>
      <video
        className="absolute left-0 right-0 top-0 bottom-0 h-screen w-screen object-cover -z-10 pointer-events-none"
        disablePictureInPicture={true}
        autoPlay
        muted
        loop
        id="myVideo"
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};
