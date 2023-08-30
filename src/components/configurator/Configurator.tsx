import React, { useEffect, useState } from "react";
import ArrowDown from "../../assets/icons/arrow-down.svg";
import { CarConfigs, Item } from "./interfaces";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { Scene } from "./Scene";
import PrimaryColor from "../../assets/icons/primary-color.svg";
import SecondaryColor from "../../assets/icons/secondary-color.svg";
import Wheels from "../../assets/icons/wheels.svg";
import Brakes from "../../assets/icons/brakes.svg";
import ArrowBack from "../../assets/icons/back-arrow.svg";
import { Summary } from "../shared/summary/Summary";
import { primaryColorOptions, leatherOptions, secondaryColorOptions, wheelOptions, brakeColorOptions } from "./carConfigs";
import { useProgress } from "@react-three/drei";
import { Loader } from "./Loader";

export const Configurator = () => {
  const [wheel, setWheel] = useState<Item>(wheelOptions.original);
  const [primaryColor, setPrimaryColor] = useState<Item>(primaryColorOptions.silver);
  const [secondaryColor, setSecondaryColor] = useState<Item>(secondaryColorOptions.carbon);
  const [leatherColor, setLeatherColor] = useState<Item>(leatherOptions.lightLeather);
  const [brakesColor, setBrakeColor] = useState<Item>(brakeColorOptions.black);

  const [exteriorDesignToggle, setExteriorDesignToggle] = useState(false);
  const [interiorDesignToggle, setInteriorDesignToggle] = useState(false);

  const [interiorEnvironment, setInteriorEnvironment] = useState(false);

  const configs: CarConfigs = {
    exteriorDesign: {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor,
      wheelType: wheel,
      brakesColor: brakesColor,
      active: exteriorDesignToggle,
    },
    interiorDesign: {
      leatherColor: leatherColor,
      active: interiorDesignToggle,
    },
  };

  const [selectedExteriorType, setSelectedExteriorType] = useState<string | null>(null);

  function activeExterior() {
    if (!exteriorDesignToggle){
      setSelectedExteriorType(null)
      setInteriorDesignToggle(false);
    } 
    setExteriorDesignToggle(!exteriorDesignToggle);
  }
  function activeInterior() {
    if (!interiorDesignToggle) setExteriorDesignToggle(false);
    setInteriorDesignToggle(!interiorDesignToggle);
  }

  const handleUpdateEnvironment = (data: boolean) => {
    setInteriorEnvironment(data)
  };

  const { progress } = useProgress();

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if(progress === 100) debouncedFunction()
    else setLoaded(false)
  },[progress])

  function debounce(func: () => void, delay: number) {
    let timerId: any;

    return () => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func();
        }, delay);
    };
}

  const debouncedFunction = debounce(() => {
    setLoaded(true);
  }, 3000);

  return (
    <motion.div
      className="w-full lg:h-[calc(100vh-72px)] max-lg:mt-[72px] bg-[#161616] flex justify-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex max-lg:flex-col">
        <div className="w-[calc(100vw-320px)] max-lg:w-screen max-lg:h-[80vh] relative">
          <div className="flex justify-center items-center w-[inherit] h-14 bg-black/70 absolute top-0 backdrop-blur-sm z-10">
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
            className="flex justify-between max-lg:items-center py-4 px-10 bg-black/30 text-white absolute top-[10%] backdrop-blur-sm z-10 m-auto left-0 right-0 w-[46rem] max-lg:w-[90vw]"
            animate={[
              exteriorDesignToggle ? "open" : "closed",
              selectedExteriorType ? "selectedExteriorType" : "",
            ]}
            variants={customBlockAnimation}
          >
            {!selectedExteriorType ? (
              <>
                <motion.div
                  className="flex flex-col font-space text-xs cursor-pointer"
                  variants={upItem}
                  onClick={() => setSelectedExteriorType("primaryColor")}
                >
                  <div className="mb-2">
                    <PrimaryColor />
                  </div>
                  <span className="max-lg:hidden">Primary color</span>
                </motion.div>
                <motion.div
                  className="flex flex-col font-space text-xs cursor-pointer"
                  variants={upItem}
                  onClick={() => setSelectedExteriorType("secondaryColor")}
                >
                  <div className="mb-2">
                    <SecondaryColor />
                  </div>
                  <span className="max-lg:hidden">Secondary color</span>
                </motion.div>
                <motion.div
                  className="flex flex-col font-space text-xs cursor-pointer"
                  variants={upItem}
                  onClick={() => setSelectedExteriorType("wheels")}
                >
                  <div className="mb-2">
                    <Wheels />
                  </div>
                  <span className="max-lg:hidden">Wheels</span>
                </motion.div>
                <motion.div
                  className="flex flex-col font-space text-xs cursor-pointer"
                  variants={upItem}
                  onClick={() => setSelectedExteriorType("brakes")}
                >
                  <div className="mb-2">
                    <Brakes />
                  </div>
                  <span className="max-lg:hidden">Brakes color</span>
                </motion.div>
              </>
            ) : (
              (selectedExteriorType === "primaryColor" && (
                <motion.div
                  className="flex flex-col w-full"
                  variants={upItem}
                  animate={"open"}
                >
                  <span className="flex items-center font-space text-xs cursor-pointer" onClick={() => setSelectedExteriorType(null)}>
                    <div className="mr-4">
                      <ArrowBack />
                    </div>
                    Primary color
                  </span>
                  <motion.div className="w-full flex justify-center" variants={upItem} animate={"open"}>
                    <motion.div
                      className="flex justify-between mt-4 w-[28rem] lg:px-10"
                      variants={upItem}
                      animate={"open"}
                    >
                      <motion.div
                        className={`flex h-12 w-6 silverGradient cursor-pointer ${
                          primaryColor === primaryColorOptions.silver ? "border-b-4" : ""
                        }`}
                        onClick={() => setPrimaryColor(primaryColorOptions.silver)}
                        variants={upItem}
                      ></motion.div>
                      <motion.div
                        className={`flex h-12 w-6 blackGradient cursor-pointer ${
                          primaryColor === primaryColorOptions.black ? "border-b-4" : ""
                        }`}
                        onClick={() => setPrimaryColor(primaryColorOptions.black)}
                        variants={upItem}
                      ></motion.div>
                      <motion.div
                        className={`flex h-12 w-6 blueGradient cursor-pointer ${
                          primaryColor === primaryColorOptions.blue ? "border-b-4" : ""
                        }`}
                        onClick={() => setPrimaryColor(primaryColorOptions.blue)}
                        variants={upItem}
                      ></motion.div>
                      <motion.div
                        className={`flex h-12 w-6 redGradient cursor-pointer ${
                          primaryColor === primaryColorOptions.red ? "border-b-4" : ""
                        }`}
                        onClick={() => setPrimaryColor(primaryColorOptions.red)}
                        variants={upItem}
                      ></motion.div>
                      <motion.div
                        className={`flex h-12 w-6 yellowGradient cursor-pointer ${
                          primaryColor === primaryColorOptions.yellow ? "border-b-4" : ""
                        }`}
                        onClick={() => setPrimaryColor(primaryColorOptions.yellow )}
                        variants={upItem}
                      ></motion.div>
                      <motion.div
                        className={`flex h-12 w-6 greenGradient cursor-pointer ${
                          primaryColor === primaryColorOptions.green  ? "border-b-4" : ""
                        }`}
                        onClick={() => setPrimaryColor(primaryColorOptions.green)}
                        variants={upItem}
                      ></motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )) ||
              (selectedExteriorType === "secondaryColor" && (
                <div className="flex flex-col w-full">
                  <span className="flex items-center font-space text-xs cursor-pointer" onClick={() => setSelectedExteriorType(null)}>
                    <div className="mr-4">
                      <ArrowBack />
                    </div>
                    Secondary color
                  </span>
                  <div className="w-full flex justify-center">
                    <motion.div className="flex justify-between mt-4 w-[25rem]">
                      <motion.div
                        className={`h-12 w-6 carbonGradient cursor-pointer ${
                          secondaryColor === secondaryColorOptions.carbon ? "border-b-4" : ""
                        }`}
                        onClick={() => setSecondaryColor(secondaryColorOptions.carbon)}
                      ></motion.div>
                      <motion.div
                        className={`h-12 w-6 silverGradient cursor-pointer ${
                          secondaryColor === secondaryColorOptions.silver ? "border-b-4" : ""
                        }`}
                        onClick={() => setSecondaryColor(secondaryColorOptions.silver)}
                      ></motion.div>
                      <motion.div
                        className={`h-12 w-6 blueGradient cursor-pointer ${
                          secondaryColor === secondaryColorOptions.blue ? "border-b-4" : ""
                        }`}
                        onClick={() => setSecondaryColor(secondaryColorOptions.blue)}
                      ></motion.div>
                      <motion.div
                        className={`h-12 w-6 redGradient cursor-pointer ${
                          secondaryColor === secondaryColorOptions.red ? "border-b-4" : ""
                        }`}
                        onClick={() => setSecondaryColor(secondaryColorOptions.red)}
                      ></motion.div>
                      <motion.div
                        className={`h-12 w-6 yellowGradient cursor-pointer ${
                          secondaryColor === secondaryColorOptions.yellow ? "border-b-4" : ""
                        }`}
                        onClick={() => setSecondaryColor(secondaryColorOptions.yellow)}
                      ></motion.div>
                      <motion.div
                        className={`h-12 w-6 greenGradient cursor-pointer ${
                          secondaryColor === secondaryColorOptions.green ? "border-b-4" : ""
                        }`}
                        onClick={() => setSecondaryColor(secondaryColorOptions.green)}
                      ></motion.div>
                    </motion.div>
                  </div>
                </div>
              )) ||
              (selectedExteriorType === "wheels" && (
                <div className="flex flex-col w-full">
                  <span
                    className="flex items-center font-space text-xs cursor-pointer"
                    onClick={() => setSelectedExteriorType(null)}
                  >
                    <div className="mr-4">
                      <ArrowBack />
                    </div>
                    Wheels
                  </span>
                  <div className="w-full flex justify-center">
                    <motion.div className="flex justify-between mt-4 w-[25rem]">
                      <motion.div
                        className={`${wheel === wheelOptions.original && 'border-b-4 border-[#E2B558]'} font-space text-xs cursor-pointer pb-1`}
                        onClick={() => setWheel(wheelOptions.original)}
                      >
                        <div className="mb-2">
                          <Wheels />
                        </div>
                        Original
                      </motion.div>
                      <motion.div
                        className={`font-space text-xs cursor-pointer ${wheel === wheelOptions.type01 && 'border-b-4 border-[#E2B558]'} pb-1`}
                        onClick={() => setWheel(wheelOptions.type01)}
                      >
                        <div className="mb-2">
                          <Wheels />
                        </div>
                        Type 01
                      </motion.div>
                      <motion.div
                        className={`font-space text-xs cursor-pointer ${wheel === wheelOptions.type02 && 'border-b-4 border-[#E2B558]'} pb-1`}
                        onClick={() => setWheel(wheelOptions.type02)}
                      >
                        <div className="mb-2">
                          <Wheels />
                        </div>
                        Type 02
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              )) ||
              (selectedExteriorType === "brakes" && (
                <div className="flex flex-col w-full">
                  <span className="flex items-center font-space text-xs cursor-pointer" onClick={() => setSelectedExteriorType(null)}>
                    <div className="mr-4">
                      <ArrowBack />
                    </div>
                    Brakes color
                  </span>
                  <div className="w-full flex justify-center">
                    <motion.div className="flex justify-between mt-4 w-[25rem]">
                      <motion.div
                        className={`h-12 w-6 limeGradient cursor-pointer ${
                          brakesColor === brakeColorOptions.green ? "border-b-4" : ""
                        }`}
                        onClick={() => setBrakeColor(brakeColorOptions.green)}
                      ></motion.div>
                      <motion.div
                        className={`h-12 w-6 blueGradient cursor-pointer ${
                          brakesColor === brakeColorOptions.blue ? "border-b-4" : ""
                        }`}
                        onClick={() => setBrakeColor(brakeColorOptions.blue)}
                      ></motion.div>
                      <motion.div
                        className={`h-12 w-6 redGradient cursor-pointer ${
                          brakesColor === brakeColorOptions.red ? "border-b-4" : ""
                        }`}
                        onClick={() => setBrakeColor(brakeColorOptions.red)}
                      ></motion.div>
                      <motion.div
                        className={`h-12 w-6 yellowGradient cursor-pointer ${
                          brakesColor === brakeColorOptions.yellow ? "border-b-4" : ""
                        }`}
                        onClick={() => setBrakeColor(brakeColorOptions.yellow)}
                      ></motion.div>
                      <motion.div
                        className={`h-12 w-6 blackGradient cursor-pointer ${
                          brakesColor === brakeColorOptions.black ? "border-b-4" : ""
                        }`}
                        onClick={() => setBrakeColor(brakeColorOptions.black)}
                      ></motion.div>
                    </motion.div>
                  </div>
                </div>
              ))
            )}
          </motion.div>
          <motion.div
            className="py-4 px-10 bg-black/30 text-white absolute top-[10%] backdrop-blur-sm z-10 m-auto left-0 right-0 w-[28rem] max-lg:w-[80vw]"
            animate={[
              interiorDesignToggle ? "open" : "closed",
              "selectedExteriorType",
            ]}
            variants={customBlockAnimation}
          >
            <span className="flex font-space text-xs">Leather color</span>
            <motion.div className="flex justify-between mt-4" variants={upItem} animate={"open"}>
              <motion.div
                className={`flex h-12 w-6 coffeeLeatherGradient cursor-pointer ${
                  leatherColor === leatherOptions.coffeeLeather? "border-b-4" : ""
                }`}
                onClick={() => setLeatherColor(leatherOptions.coffeeLeather)}
                variants={upItem}
              ></motion.div>
              <motion.div
                className={`flex h-12 w-6 lightLeatherGradient cursor-pointer ${
                  leatherColor === leatherOptions.lightLeather ? "border-b-4" : ""
                }`}
                onClick={() => setLeatherColor(leatherOptions.lightLeather)}
                variants={upItem}
              ></motion.div>
              <motion.div
                className={`flex h-12 w-6 greyLeatherGradient cursor-pointer ${
                  leatherColor === leatherOptions.greyLeather ? "border-b-4" : ""
                }`}
                onClick={() => setLeatherColor(leatherOptions.greyLeather)}
                variants={upItem}
              ></motion.div>
              <motion.div
                className={`flex h-12 w-6 blackLeatherGradient cursor-pointer ${
                  leatherColor === leatherOptions.blackLeather ? "border-b-4" : ""
                }`}
                onClick={() => setLeatherColor(leatherOptions.blackLeather)}
                variants={upItem}
              ></motion.div>
            </motion.div>
          </motion.div>
          {!loaded && <Loader progress={progress}/>}
          <Scene configs={configs} interiorEnvironment={interiorEnvironment}/>
        </div>
        { (loaded) && 
          <div className="flex items-center justify-center w-screen py-8 bg-[#161616] lg:hidden">
            <motion.div className="flex flex-col cursor-pointer absolute">
              <motion.div className="rounded-full bg-[#E2B558] w-3 opacity-0"animate={{y: [35,-5], opacity: [1,1,1,0], height: [12,18]}} transition={{duration: 0.5,repeat: Infinity, repeatDelay: 2, delay: 2, ease: 'circInOut'}}></motion.div>
            </motion.div>
          </div>
        }
        <div className="flex justify-center max-lg:w-full">
          <Summary handleUpdateEnvironment={handleUpdateEnvironment} configs={configs} loaded={loaded}/>
        </div>
      </div>
    </motion.div>
  );
};

const customBlockAnimation = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    // height: `${window.innerWidth > 1024 ? '79px' : '200px'}`,
    height: '79px',
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
  selectedExteriorType: {
    height: "112px",
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
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
