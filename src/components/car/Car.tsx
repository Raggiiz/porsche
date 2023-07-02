import React, { useMemo, useRef, useState } from "react";
import {
  Environment,
  OrbitControls,
  Stage,
  useHelper,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Porsche from "./scene/Porsche";
import ArrowDown from "../../assets/icons/arrow-down.svg";
import { CarConfigs } from "./interfaces";
import { motion } from "framer-motion";
import {
  DirectionalLightHelper,
  PointLightHelper,
  SpotLightHelper,
} from "three";
import Room from "./scene/Room";
import * as THREE from "three";
import { InteriorGarage } from "./scene/InteriorGarage";
import { Perf } from "r3f-perf";
import { Scene } from "./scene/Scene";

export const Car = () => {
  const [wheel, setWheel] = useState<
    "originalWheel" | "wheelExtra" | "wheelExtra2"
  >("originalWheel");
  const [primaryColor, setPrimaryColor] = useState<string>("silver");
  const [secondaryColor, setSecondaryColor] = useState<string>("carbon");
  const [internalColor, setInternalColor] = useState<string>("black");
  const [brakesColor, setbrakeColor] = useState<string>("green");

  const [exteriorDesignToggle, setExteriorDesignToggle] = useState(false);
  const [interiorDesignToggle, setInteriorDesignToggle] = useState(false);

  const configs: CarConfigs = {
    exteriorDesign: {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor,
      wheel: wheel,
      brakesColor: brakesColor,
      active: exteriorDesignToggle,
    },
    interiorDesign: {
      interiorColor: internalColor,
      active: interiorDesignToggle,
    },
  };

  function activeExterior() {
    if (!exteriorDesignToggle) setInteriorDesignToggle(false);
    setExteriorDesignToggle(!exteriorDesignToggle);
  }
  function activeInterior() {
    if (!interiorDesignToggle) setExteriorDesignToggle(false);
    setInteriorDesignToggle(!interiorDesignToggle);
  }

  return (
    <motion.div
      className="w-full h-[calc(100vh-72px)] bg-[#e4f3f5] flex justify-center flex-col relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-center items-center w-full h-14 bg-black/70 absolute top-0 backdrop-blur-sm z-10">
        <motion.span
          className="btn-custom-menu"
          onClick={activeExterior}
          animate={exteriorDesignToggle ? "open" : "closed"}
          variants={{
            open: { color: "#fff" },
            closed: { color: "#ABABAB" },
          }}
        >
          exterior design
          <motion.div
            className="arrow"
            variants={rotateArrowAnimation}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <ArrowDown />
          </motion.div>
          <motion.hr
            className="active-border"
            variants={{
              open: { width: "33%" },
              closed: { width: 0 },
            }}
          />
        </motion.span>
        <motion.span
          className="btn-custom-menu"
          onClick={activeInterior}
          animate={interiorDesignToggle ? "open" : "closed"}
          variants={{
            open: { color: "#fff" },
            closed: { color: "#ABABAB" },
          }}
        >
          interior design
          <motion.div
            className="arrow"
            variants={rotateArrowAnimation}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <ArrowDown />
          </motion.div>
          <motion.hr
            className="active-border"
            variants={{
              open: { width: "33%" },
              closed: { width: 0 },
            }}
          />
        </motion.span>
      </div>
      <motion.div
        className="py-4 px-10 bg-black/50 text-white absolute top-[10%] backdrop-blur-sm z-10 m-auto left-0 right-0 w-[25rem]"
        animate={exteriorDesignToggle ? "open" : "closed"}
        variants={customBlockAnimation}>
        <motion.div variants={upItem}>
          External
        </motion.div>
      </motion.div>
      <motion.div
        className="py-4 px-10 bg-black/50 text-white absolute top-[10%] backdrop-blur-sm z-10 m-auto left-0 right-0 w-[25rem]"
        animate={interiorDesignToggle ? "open" : "closed"}
        variants={customBlockAnimation}>
        <motion.div
          className="flex flex-col"
          variants={upItem}>
          <span className="font-inter text-xs">Leather color</span>
          
        </motion.div>
        <motion.div className="flex justify-between mt-4">
            <motion.div className={`h-12 w-6 silverGradient cursor-pointer ${primaryColor === 'silver' ? 'border-b-4' : ''}`} onClick={() => setPrimaryColor('silver')}></motion.div>
            <motion.div className={`h-12 w-6 blueGradient cursor-pointer ${primaryColor === 'blue' ? 'border-b-4' : ''}`} onClick={() => setPrimaryColor('blue')}></motion.div>
            <motion.div className={`h-12 w-6 redGradient cursor-pointer ${primaryColor === 'red' ? 'border-b-4' : ''}`} onClick={() => setPrimaryColor('red')}></motion.div>
            <motion.div className={`h-12 w-6 yellowGradient cursor-pointer ${primaryColor === 'yellow' ? 'border-b-4' : ''}`} onClick={() => setPrimaryColor('yellow')}></motion.div>
        </motion.div>
      </motion.div>
      <Scene configs={configs} />
    </motion.div>
  );
};



const customBlockAnimation = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

const rotateArrowAnimation = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const upItem = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24, delayChildren: 0.3,
    staggerChildren: 0.05 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
}