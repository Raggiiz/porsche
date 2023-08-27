import { AnimatePresence, motion } from "framer-motion";
import p911 from "../../../assets/car-models/911.webp";
import p718 from "../../../assets/car-models/718.webp";
import cayenne from "../../../assets/car-models/cayenne.webp";
import macan from "../../../assets/car-models/macan.webp";
import panamera from "../../../assets/car-models/panamera.webp";
import React, { useEffect } from "react";

interface SideBarInterface {
  sideBarOpen: boolean,
  setSideBarOpen: any
}

export const SideBar = ({ sideBarOpen, setSideBarOpen }: SideBarInterface) => {

  useEffect(() => {
    const handleTouchMove = (event: { preventDefault: () => void; }) => {
      if (sideBarOpen) {
        event.preventDefault();
      }
    };
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [sideBarOpen]);

  return (
    <AnimatePresence>
      {sideBarOpen && (
        <>
          <motion.div
            className="h-screen bg-[#161616] absolute left-0 top-0 bottom-0 shadow-xl z-10 flex flex-col p-12"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: `${window.innerWidth > 768 ? '28vw' : '80vw'}`, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{type: "spring",stiffness: 250,damping: 24}}
          >
            <span className="text-white font-inter uppercase font-medium">models</span>
            <div className="mt-8">
              <div className="flex justify-center items-center rounded-[10px] p-4 w-full hover:bg-neutral-800 cursor-pointer transition ease-in-out mb-4">
                <img src={p911} alt="" className="w-48 md:max-xl:w-36" />
              </div>
              <div className="flex justify-center items-center rounded-[10px] p-4 w-full hover:bg-neutral-800 cursor-pointer transition ease-in-out mb-4">
                <img src={p718} alt="" className="w-48 md:max-xl:w-36" />
              </div>
              <div className="flex justify-center items-center rounded-[10px] p-4 w-full hover:bg-neutral-800 cursor-pointer transition ease-in-out mb-4">
                <img src={cayenne} alt="" className="w-48 md:max-xl:w-36" />
              </div>
              <div className="flex justify-center items-center rounded-[10px] p-4 w-full hover:bg-neutral-800 cursor-pointer transition ease-in-out mb-4">
                <img src={macan} alt="" className="w-48 md:max-xl:w-36" />
              </div>
              <div className="flex justify-center items-center rounded-[10px] p-4 w-full hover:bg-neutral-800 cursor-pointer transition ease-in-out mb-4">
                <img src={panamera} alt="" className="w-48 md:max-xl:w-36" />
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
