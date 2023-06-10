import React, { useEffect, useRef } from "react";
import video from "../../assets/video-bg.webm";
import ArrowRight from '../../assets/icons/arrow-right.svg'
import { Link } from "react-router-dom";
import CustomCar from '../../assets/custom-car.png'

export const Home = () => {
  return (
    <div>
      <div
        className="main-content absolute left-0 right-0 top-0 bottom-0 h-screen w-screen 
        object-cover z-10 flex flex-col justify-center bg-gradient-to-r from-[#00000066] to-50%"
      >
        <div className="p-40 flex flex-col">
          <div className="flex flex-row">
            <div className="flex flex-col w-1/2">
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
            <div className="flex w-1/2 justify-center">
              <div className="all-slider relative">
                <div className="clip-path bg-[#0000004D] backdrop-blur-md rounded-[10px] p-5 text-white">
                  <strong className="font-space uppercase text-base">
                    meet the custom
                    <br />
                    plataform
                  </strong>
                  <img src={CustomCar} alt="" className="h-14 my-4" />
                  <p className="w-60 text-xs font-montserrat">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incidid unt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incidid unt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <div className="flex absolute top-[6%] right-2">
                  <div className="h-4 w-7 bg-[#E2B558] rounded-full cursor-pointer"></div>
                  <div className="h-4 w-4 bg-white rounded-full ml-2 cursor-pointer"></div>
                </div>
              </div>
            </div>
          </div>
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
