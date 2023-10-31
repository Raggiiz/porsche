import React, { useEffect, useRef, useState } from "react";
import video1 from "../../assets/video/video1.mp4";
import video2 from "../../assets/video/video2.mp4";
import video3 from "../../assets/video/video3.mp4";
import video4 from "../../assets/video/video4.mp4";
import video5 from "../../assets/video/video5.mp4";
import video6 from "../../assets/video/video6.mp4";
import video7 from "../../assets/video/video7.mp4";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import Cup from "../../assets/icons/cup.svg";
import { Link, Outlet } from "react-router-dom";
import CustomCar from "../../assets/custom-car.png";
import { motion } from "framer-motion";

export const Home = () => {

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videos = [
    video1, video2, video3, video4, video5, video6, video7
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnded = () => {
    // Verifique se ainda há vídeos na lista
    if (currentVideoIndex < videos.length - 1) {
      // Se houver, avance para o próximo vídeo
      setCurrentVideoIndex(currentVideoIndex + 1);
      videoRef.current?.load(); // Usando o operador de acesso condicional
    } else {
      // Se não houver mais vídeos, reinicie a lista
      setCurrentVideoIndex(0);
      videoRef.current?.load(); // Usando o operador de acesso condicional
    }
    
    console.log(currentVideoIndex + 2)
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        className="main-content absolute left-0 right-0 top-0 bottom-0 h-screen w-screen overflow-hidden
        object-cover z-10 flex flex-col justify-center bg-gradient-to-r from-[#00000066] to-50%"
      >
        <div className="px-40 pt-72 md:max-xl:pt-44 md:max-xl:px-28 max-md:px-10 max-md:pt-28 flex flex-col h-full justify-between">
          <div className="flex sm:max-lg:flex-col">
            <div className="flex flex-col lg:w-1/2">
              <motion.h1 className="font-porsche text-7xl max-md:text-5xl text-white"
              animate={{y: 0, opacity: 1}}
              initial={{y: 75, opacity: 0}}
              transition={{delay: 1}}>
                911 gt2
              </motion.h1>
              <motion.p className="text-white lg:w-[500px] font-montserrat text-sm max-md:text-xs font-medium mt-3"
              animate={{y: 0, opacity: 1}}
              initial={{y: 75, opacity: 0}}
              transition={{delay: 1.2}}>
                A masterpiece of automotive engineering. Combining unrestrained
                power, iconic design, and advanced technology, it embodies the
                passion. Every curve, every acceleration is a unique and
                unforgettable experience.
              </motion.p>
              <motion.div 
              className="mt-6"
              animate={{y: 0, opacity: 1}}
              initial={{y: 75, opacity: 0}}
              transition={{delay: 1.3}}>
                <Link to={"/911/gt2/configurator"} className="primary-btn">
                  Customize vehicle
                  <div className="arrow">
                    <ArrowRight />
                  </div>
                </Link>
              </motion.div>
            </div>
            <motion.div className="flex lg:w-1/2 justify-center lg:max-xl:justify-end max-md:hidden max-lg:mt-8"
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            transition={{delay: 1.4}}>
              <div className="bg-[#0000004D] backdrop-blur-md rounded-[10px] p-5 text-white">
                <strong className="font-space uppercase text-base">
                  meet the configurator
                  <br />
                  plataform
                </strong>
                <img src={CustomCar} alt="" className="h-14 my-4" />
                <p className="w-60 text-xs font-montserrat">
                  Change it's entire style, such as exterior colors, inside leather color, wheels and much else. 
                  Get the summary with the total car price to send it to your dealer.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-row max-lg:flex-col items-end max-lg:items-center">
            <motion.div className="all-slider relative mb-28 lg:max-xl:mb-14 md:max-lg:mb-24 max-md:mb-8 max-md:hidden"
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            transition={{delay: 1.5}}>
              <div className="clip-path bg-[#0000004D] backdrop-blur-md rounded-[10px] p-5 text-white">
                <strong className="font-space uppercase text-base">
                  sport car of the
                  <br />
                  <span className="flex items-center">
                    year {new Date().getFullYear()}{" "}
                    <div className="ml-3">
                      <Cup />
                    </div>
                  </span>
                </strong>
                <p className="w-60 text-xs font-montserrat mt-4">
                "...It effortlessly outperformed its competitors, leaving them in its rearview mirror as it claimed the ultimate title.
                The award-winning 911 GT2 is an epitome of engineering excellence."
                </p>
              </div>
              <div className="flex items-center justify-center absolute top-0 right-0 bg-yellow-primary cursor-pointer rounded-[10px] h-7 w-[4.5rem] text-[10px] text-white">
                More
                <div className="ml-1">
                  <ArrowRight />
                </div>
              </div>
            </motion.div>
            <div className="flex max-md:flex-col justify-between md:backdrop-blur-md bg-[#0000004D] md:h-52 w-3/5 max-lg:w-screen rounded-ss-[10px] absolute max-lg:relative right-0 pr-40 md:max-xl:pr-28 pl-32 py-12 max-md:py-5 md:max-lg:px-28 max-md:px-10 font-inter">
              <motion.div className="flex flex-col text-white"
              animate={{y: 0, opacity: 1}}
              initial={{y: 75, opacity: 0}}
              transition={{delay: 1.6}}>
                <span className="text-base max-sm:text-sm font-medium">Aceleration</span>
                <small className="text-sm max-sm:text-xs text-[#B7B7B7] font-light">0 to 100km/h</small>
                <strong className="font-space text-xl max-sm:text-lg">3.5 seg</strong>
              </motion.div>
              <div className="h-2/3 w-px max-md:w-full max-md:min-h-[1px] max-md:my-3 bg-white"></div>
              <motion.div className="flex flex-col text-white"
              animate={{y: 0, opacity: 1}}
              initial={{y: 75, opacity: 0}}
              transition={{delay: 1.7}}>
                <span className="text-base max-sm:text-sm font-medium">Horse Power</span>
                <small className="text-sm max-sm:text-xs text-[#B7B7B7] font-light">6 shifts</small>
                <strong className="font-space text-xl max-sm:text-lg">560</strong>
              </motion.div>
              <div className="h-2/3 w-px max-md:w-full max-md:min-h-[1px] max-md:my-3 bg-white"></div>
              <motion.div className="flex flex-col text-white"
              animate={{y: 0, opacity: 1}}
              initial={{y: 75, opacity: 0}}
              transition={{delay: 1.8}}>
                <span className="text-base max-sm:text-sm font-medium">Maximum speed</span>
                <small className="text-sm max-sm:text-xs text-[#B7B7B7] font-light">650 rpm</small>
                <strong className="font-space text-xl max-sm:text-lg">390 km/h</strong>
              </motion.div>
              <div className="h-2/3 w-px max-md:w-full max-md:min-h-[1px] max-md:my-3 bg-white"></div>
              <motion.div className="flex flex-col text-white"
              animate={{y: 0, opacity: 1}}
              initial={{y: 75, opacity: 0}}
              transition={{delay: 1.9}}>
                <span className="text-base max-sm:text-sm font-medium">Tork</span>
                <small className="text-sm max-sm:text-xs text-[#B7B7B7] font-light">1750-450 rpm</small>
                <strong className="font-space text-xl max-sm:text-lg">479 lb-ft</strong>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <video
        ref={videoRef}
        className="absolute left-0 right-0 top-0 bottom-0 h-screen w-screen object-cover -z-10 pointer-events-none"
        disablePictureInPicture={true}
        autoPlay
        muted
        loop={false}
        id="myVideo"
        onEnded={handleVideoEnded}
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
      </video>
    </motion.div>
  );
};
