import React, { useState } from "react";
import ArrowDown from "../../assets/icons/arrow-down.svg";
import { CarConfigs } from "./interfaces";
import { motion } from "framer-motion";
import { Scene } from "./scene/Scene";
import PrimaryColor from "../../assets/icons/primary-color.svg";
import SecondaryColor from "../../assets/icons/secondary-color.svg";
import Wheels from "../../assets/icons/wheels.svg";
import Brakes from "../../assets/icons/brakes.svg";
import ArrowBack from "../../assets/icons/back-arrow.svg";

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

  const [selectedExterior, setSelectedExterior] = useState<string | null>(null)

  function activeExterior() {
    if (!exteriorDesignToggle) setInteriorDesignToggle(false);
    setExteriorDesignToggle(!exteriorDesignToggle);
    setSelectedExterior(null);
  }
  function activeInterior() {
    if (!interiorDesignToggle) setExteriorDesignToggle(false);
    setInteriorDesignToggle(!interiorDesignToggle);
    setSelectedExterior(null);
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
        className="flex justify-between py-4 px-10 bg-black/30 text-white absolute top-[10%] backdrop-blur-sm z-10 m-auto left-0 right-0 w-[46rem]"
        animate={exteriorDesignToggle ? "open" : "closed"}
        variants={customBlockAnimation}>
        {!selectedExterior ? 
          <>
            <motion.div className="flex flex-col font-space text-xs cursor-pointer" variants={upItem} onClick={() => setSelectedExterior('primaryColor')}>
              <div className="mb-2">
                <PrimaryColor />
              </div>
              Primary color
            </motion.div>
            <motion.div className="flex flex-col font-space text-xs cursor-pointer" variants={upItem} onClick={() => setSelectedExterior('secondaryColor')}>
              <div className="mb-2">
                <SecondaryColor />
              </div>
              Secondary color
            </motion.div>
            <motion.div className="flex flex-col font-space text-xs cursor-pointer" variants={upItem} onClick={() => setSelectedExterior('wheels')}>
              <div className="mb-2">
                <Wheels />
              </div>
              Wheels
            </motion.div>
            <motion.div className="flex flex-col font-space text-xs cursor-pointer" variants={upItem} onClick={() => setSelectedExterior('brakes')}>
              <div className="mb-2">
                <Brakes />
              </div>
              Brakes color
            </motion.div>
          </> :
          (
            selectedExterior === 'primaryColor' &&
            <div className="flex flex-col w-full">
              <span className="flex items-center font-space text-xs cursor-pointer" onClick={() => setSelectedExterior(null)}>
                <div className="mr-4"><ArrowBack /></div>Primary color
              </span>
              <div className="w-full flex justify-center">
                <motion.div className="flex justify-between mt-4 w-[25rem] px-10">
                  <motion.div className={`h-12 w-6 silverGradient cursor-pointer ${primaryColor === 'silver' ? 'border-b-4' : ''}`} onClick={() => setPrimaryColor('silver')}></motion.div>
                  <motion.div className={`h-12 w-6 blueGradient cursor-pointer ${primaryColor === 'blue' ? 'border-b-4' : ''}`} onClick={() => setPrimaryColor('blue')}></motion.div>
                  <motion.div className={`h-12 w-6 redGradient cursor-pointer ${primaryColor === 'red' ? 'border-b-4' : ''}`} onClick={() => setPrimaryColor('red')}></motion.div>
                  <motion.div className={`h-12 w-6 yellowGradient cursor-pointer ${primaryColor === 'yellow' ? 'border-b-4' : ''}`} onClick={() => setPrimaryColor('yellow')}></motion.div>
                </motion.div>
              </div>
            </div> ||
            selectedExterior === 'secondaryColor' &&
            <div className="flex flex-col w-full">
              <span className="flex items-center font-space text-xs cursor-pointer" onClick={() => setSelectedExterior(null)}>
                <div className="mr-4"><ArrowBack /></div>Secondary color
              </span>
              <div className="w-full flex justify-center">
                <motion.div className="flex justify-between mt-4 w-[25rem] px-10">
                  <motion.div className={`h-12 w-6 carbonGradient cursor-pointer ${secondaryColor === 'carbon' ? 'border-b-4' : ''}`} onClick={() => setSecondaryColor('carbon')}></motion.div>
                  <motion.div className={`h-12 w-6 blueGradient cursor-pointer ${secondaryColor === 'blue' ? 'border-b-4' : ''}`} onClick={() => setSecondaryColor('blue')}></motion.div>
                  <motion.div className={`h-12 w-6 redGradient cursor-pointer ${secondaryColor === 'red' ? 'border-b-4' : ''}`} onClick={() => setSecondaryColor('red')}></motion.div>
                  <motion.div className={`h-12 w-6 yellowGradient cursor-pointer ${secondaryColor === 'yellow' ? 'border-b-4' : ''}`} onClick={() => setSecondaryColor('yellow')}></motion.div>
                </motion.div>
              </div>
            </div> ||
            selectedExterior === 'wheels' &&
            <div className="flex flex-col w-full">
              <span className="flex items-center font-space text-xs cursor-pointer" onClick={() => setSelectedExterior(null)}>
                <div className="mr-4"><ArrowBack /></div>Wheels
              </span>
              <div className="w-full flex justify-center">
                <motion.div className="flex justify-between mt-4 w-[25rem] px-10">
                  <motion.div className={`h-12 w-6 carbonGradient cursor-pointer ${secondaryColor === 'carbon' ? 'border-b-4' : ''}`} onClick={() => setSecondaryColor('carbon')}></motion.div>
                  <motion.div className={`h-12 w-6 blueGradient cursor-pointer ${secondaryColor === 'blue' ? 'border-b-4' : ''}`} onClick={() => setSecondaryColor('blue')}></motion.div>
                  <motion.div className={`h-12 w-6 redGradient cursor-pointer ${secondaryColor === 'red' ? 'border-b-4' : ''}`} onClick={() => setSecondaryColor('red')}></motion.div>
                  <motion.div className={`h-12 w-6 yellowGradient cursor-pointer ${secondaryColor === 'yellow' ? 'border-b-4' : ''}`} onClick={() => setSecondaryColor('yellow')}></motion.div>
                </motion.div>
              </div>
            </div> ||
            selectedExterior === 'brakes' &&
            <div className="flex flex-col w-full">
              <span className="flex items-center font-space text-xs cursor-pointer" onClick={() => setSelectedExterior(null)}>
                <div className="mr-4"><ArrowBack /></div>Brakes
              </span>
              <div className="w-full flex justify-center">
                <motion.div className="flex justify-between mt-4 w-[25rem] px-10">
                  <motion.div className={`h-12 w-6 carbonGradient cursor-pointer ${secondaryColor === 'carbon' ? 'border-b-4' : ''}`} onClick={() => setSecondaryColor('carbon')}></motion.div>
                  <motion.div className={`h-12 w-6 blueGradient cursor-pointer ${secondaryColor === 'blue' ? 'border-b-4' : ''}`} onClick={() => setSecondaryColor('blue')}></motion.div>
                  <motion.div className={`h-12 w-6 redGradient cursor-pointer ${secondaryColor === 'red' ? 'border-b-4' : ''}`} onClick={() => setSecondaryColor('red')}></motion.div>
                  <motion.div className={`h-12 w-6 yellowGradient cursor-pointer ${secondaryColor === 'yellow' ? 'border-b-4' : ''}`} onClick={() => setSecondaryColor('yellow')}></motion.div>
                </motion.div>
              </div>
            </div>
          )
        }
      </motion.div>
      <motion.div
        className="py-4 px-10 bg-black/30 text-white absolute top-[10%] backdrop-blur-sm z-10 m-auto left-0 right-0 w-[25rem]"
        animate={interiorDesignToggle ? "open" : "closed"}
        variants={customBlockAnimation}>
        <motion.div
          variants={upItem}>
          <span className="font-space text-xs">Leather color</span>
          
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