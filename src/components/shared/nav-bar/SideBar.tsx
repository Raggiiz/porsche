import { AnimatePresence, motion } from "framer-motion";
import p911 from "../../../assets/car-models/911.webp";
import p718 from "../../../assets/car-models/718.webp";
import cayenne from "../../../assets/car-models/cayenne.webp";
import macan from "../../../assets/car-models/macan.webp";
import panamera from "../../../assets/car-models/panamera.webp";
import React from "react";

export const SideBar = ({ sideBarOpen, setSideBarOpen }: any) => {
  return (
    <AnimatePresence>
      {sideBarOpen && (
        <>
          <motion.div
            className="h-screen bg-[#161616] absolute left-0 top-0 bottom-0 shadow-xl z-10 flex flex-col p-12"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "25vw", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{type: "spring",stiffness: 250,damping: 24}}
          >
            <span className="text-white font-inter uppercase font-medium">models</span>
            <div className="mt-8">
              <div className="flex justify-center items-center rounded-[10px] p-4 w-full hover:bg-neutral-800 cursor-pointer transition ease-in-out mb-4">
                <img src={p911} alt="" width={'200px'} />
              </div>
              <div className="flex justify-center items-center rounded-[10px] p-4 w-full hover:bg-neutral-800 cursor-pointer transition ease-in-out mb-4">
                <img src={p718} alt="" width={'200px'} />
              </div>
              <div className="flex justify-center items-center rounded-[10px] p-4 w-full hover:bg-neutral-800 cursor-pointer transition ease-in-out mb-4">
                <img src={cayenne} alt="" width={'200px'} />
              </div>
              <div className="flex justify-center items-center rounded-[10px] p-4 w-full hover:bg-neutral-800 cursor-pointer transition ease-in-out mb-4">
                <img src={macan} alt="" width={'200px'} />
              </div>
              <div className="flex justify-center items-center rounded-[10px] p-4 w-full hover:bg-neutral-800 cursor-pointer transition ease-in-out mb-4">
                <img src={panamera} alt="" width={'200px'} />
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
