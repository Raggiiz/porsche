import { AnimatePresence, motion } from "framer-motion";
import p911 from "../../../assets/car-models/911.webp";
import p718 from "../../../assets/car-models/718.webp";
import cayenne from "../../../assets/car-models/cayenne.webp";
import macan from "../../../assets/car-models/macan.webp";
import panamera from "../../../assets/car-models/panamera.webp";
import React, { useEffect } from "react";

interface SideBarInterface {
  sideBarOpen: boolean,
  setSideBarOpen: (data: boolean) => void
}

export const SideBar = ({ sideBarOpen, setSideBarOpen }: SideBarInterface) => {

  useEffect(() => {
    const handleTouchMove = (event: { preventDefault: () => void; }) => {
      if (sideBarOpen) event.preventDefault();  // Se o modal estiver aberto bloqueia
      
    };
    window.addEventListener("touchmove", handleTouchMove, { passive: false }); // Escuta sempre que o usuario mover o dedo para escrolar no mobile
    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [sideBarOpen]); // escuta sempre que o modal abrir

  return (
    <AnimatePresence>
      {sideBarOpen && (
        <>
          <motion.div
            className="h-screen bg-dark-secondary absolute left-0 top-0 bottom-0 w-[28vw] max-md:w-[80vw] z-10 flex flex-col p-12"
            initial={{ x: -550, opacity: .5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -550, opacity: .5 }}
            transition={{ ease: "easeInOut"}}
          >
            <span className="text-white font-inter uppercase font-medium">models</span>
            <div className="flex flex-col mt-8 gap-4">
              <div className="vehicle-model">
                <img src={p911} alt="" />
              </div>
              <div className="vehicle-model">
                <img src={p718} alt="" />
              </div>
              <div className="vehicle-model">
                <img src={cayenne} alt="" />
              </div>
              <div className="vehicle-model">
                <img src={macan} alt="" />
              </div>
              <div className="vehicle-model">
                <img src={panamera} alt="" />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="absolute left-0 top-0 bottom-0 h-screen w-screen bg-black"
            animate={{ opacity: 0.5 }}
            initial={{ opacity: 0 }}
            exit={{opacity: 0}}
            onClick={() => setSideBarOpen(false)}
          />
        </>
      )}
    </AnimatePresence>
  );
};
