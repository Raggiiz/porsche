import React, { useRef, useState } from "react";
import video1 from "../../assets/video/video1.mp4";
import video2 from "../../assets/video/video2.mp4";
import video3 from "../../assets/video/video3.mp4";
import video4 from "../../assets/video/video4.mp4";
import video5 from "../../assets/video/video5.mp4";
import video6 from "../../assets/video/video6.mp4";
import video7 from "../../assets/video/video7.mp4";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

export const Home = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videos = [video1, video2, video3, video4, video5, video6, video7];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoKey, setVideoKey] = useState(0);

  const handleVideoEnded = () => {
    // Verifique se ainda há vídeos na lista
    if (currentVideoIndex < videos.length - 1) {
      // Se houver, avance para o próximo vídeo
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      // Se não houver mais vídeos, reinicie a lista
      setCurrentVideoIndex(0);
    }

    setVideoKey((prevKey) => prevKey + 1); // Incrementa uma chave única para forçar a remontagem do componente <video>
    videoRef.current?.load(); // Carrega o video
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div // Deixamos a tela de baixo da navbar
        className="flex flex-col items-center justify-center absolute top-0 h-screen w-screen overflow-hidden
        object-cover z-10"
      >
        <div className="flex items-center flex-col max-lg:absolute max-lg:top-1/4 max-lg:px-10">
          <motion.h1
            className="font-porsche text-7xl max-md:text-4xl text-white"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 75, opacity: 0 }}
            transition={{ delay: 1 }}
          >
            911 GT2
          </motion.h1>
          <motion.p
            className="text-zinc-300 text-center lg:w-[31.25rem] font-montserrat text-sm max-md:text-xs mt-3"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 75, opacity: 0 }}
            transition={{ delay: 1.2 }}
          >
            A masterpiece of automotive engineering. Combining unrestrained
            power, iconic design, and advanced technology.
          </motion.p>
          <motion.div
            className="mt-6"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 75, opacity: 0 }}
            transition={{ delay: 1.3 }}
          >
            <Link to={"/911/gt2/configurator"} className="secondary-btn">
              Customize vehicle
            </Link>
          </motion.div>
        </div>
        <div className="flex max-md:flex-col justify-between absolute max-lg:gap-5 bottom-0 md:backdrop-blur-sm bg-[#00000025] w-1/2 max-lg:w-screen rounded-[10px] rounded-ee-none rounded-es-none px-16 max-lg:px-10 py-4 font-inter">
          <motion.div
            className="flex flex-col text-white"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 75, opacity: 0 }}
            transition={{ delay: 1.6 }}
          >
            <span className="text-sm">Aceleration</span>
            <small className="text-xs text-zinc-400 font-light">
              0 to 100km/h
            </small>
            <strong className="font-space text-lg">3.5 seg</strong>
          </motion.div>
          <motion.div
            className="flex flex-col text-white"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 75, opacity: 0 }}
            transition={{ delay: 1.7 }}
          >
            <span className="text-sm">Horse Power</span>
            <small className="text-xs text-zinc-400 font-light">6 shifts</small>
            <strong className="font-space text-lg">560</strong>
          </motion.div>
          <motion.div
            className="flex flex-col text-white"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 75, opacity: 0 }}
            transition={{ delay: 1.8 }}
          >
            <span className="text-sm">Maximum speed</span>
            <small className="text-xs text-zinc-400 font-light">650 rpm</small>
            <strong className="font-space text-lg">340 km/h</strong>
          </motion.div>
          <motion.div
            className="flex flex-col text-white"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 75, opacity: 0 }}
            transition={{ delay: 1.9 }}
          >
            <span className="text-sm">Tork</span>
            <small className="text-xs text-zinc-300 font-light">
              1750-450 rpm
            </small>
            <strong className="font-space text-lg">479 lb-ft</strong>
          </motion.div>
        </div>
      </div>
      <video
        ref={videoRef}
        className="absolute left-0 right-0 top-0 bottom-0 h-screen w-screen object-cover -z-10 pointer-events-none"
        disablePictureInPicture={true}
        autoPlay={true}
        muted
        loop={false}
        id="myVideo"
        onEnded={handleVideoEnded}
        playsInline={true}
        key={videoKey}
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
      </video>
    </motion.div>
  );
};
