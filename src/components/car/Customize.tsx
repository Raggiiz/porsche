import React, { useState } from "react";
import ArrowDown from "../../assets/icons/arrow-down.svg";
import { CarConfigs } from "./interfaces";
import { AnimatePresence, motion } from "framer-motion";
import { Scene } from "./scene/Scene";
import PrimaryColor from "../../assets/icons/primary-color.svg";
import SecondaryColor from "../../assets/icons/secondary-color.svg";
import Wheels from "../../assets/icons/wheels.svg";
import Brakes from "../../assets/icons/brakes.svg";
import ArrowBack from "../../assets/icons/back-arrow.svg";
import { Summary } from "./Summary";

export const Car = () => {
  const [wheel, setWheel] = useState<
    "originalWheel" | "wheelExtra" | "wheelExtra2"
  >("originalWheel");
  const [primaryColor, setPrimaryColor] = useState<string>("#ededed");
  const [secondaryColor, setSecondaryColor] = useState<string>("carbon");
  const [internalColor, setInternalColor] = useState<string>("#c7b695");
  const [brakesColor, setBrakeColor] = useState<string>("#12ff4d");

  const [exteriorDesignToggle, setExteriorDesignToggle] = useState(false);
  const [interiorDesignToggle, setInteriorDesignToggle] = useState(false);

  const [interiorEnvironment, setInteriorEnvironment] = useState(false);

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

  const [selectedExterior, setSelectedExterior] = useState<string | null>(null);

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

  const handleUpdateEnviroment = (data: any) => {
    setInteriorEnvironment(data)
  };

  return (
    <motion.div
      className="w-full h-[calc(100vh-72px)] bg-[#e4f3f5] flex justify-center flex-col relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex  h-[calc(100vh-72px)]">
        <div className="w-[80vw] relative">
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
            className="flex justify-between py-4 px-10 bg-black/30 text-white absolute top-[10%] backdrop-blur-sm z-10 m-auto left-0 right-0 w-[46rem]"
            animate={[
              exteriorDesignToggle ? "open" : "closed",
              selectedExterior ? "selectedExterior" : "",
            ]}
            variants={customBlockAnimation}
          >
            {!selectedExterior ? (
              <>
                <motion.div
                  className="flex flex-col font-space text-xs cursor-pointer"
                  variants={upItem}
                  onClick={() => setSelectedExterior("primaryColor")}
                >
                  <div className="mb-2">
                    <PrimaryColor />
                  </div>
                  Primary color
                </motion.div>
                <motion.div
                  className="flex flex-col font-space text-xs cursor-pointer"
                  variants={upItem}
                  onClick={() => setSelectedExterior("secondaryColor")}
                >
                  <div className="mb-2">
                    <SecondaryColor />
                  </div>
                  Secondary color
                </motion.div>
                <motion.div
                  className="flex flex-col font-space text-xs cursor-pointer"
                  variants={upItem}
                  onClick={() => setSelectedExterior("wheels")}
                >
                  <div className="mb-2">
                    <Wheels />
                  </div>
                  Wheels
                </motion.div>
                <motion.div
                  className="flex flex-col font-space text-xs cursor-pointer"
                  variants={upItem}
                  onClick={() => setSelectedExterior("brakes")}
                >
                  <div className="mb-2">
                    <Brakes />
                  </div>
                  Brakes color
                </motion.div>
              </>
            ) : (
              (selectedExterior === "primaryColor" && (
                <motion.div
                  className="flex flex-col w-full"
                  variants={upItem}
                  animate={"open"}
                >
                  <span className="flex items-center font-space text-xs cursor-pointer" onClick={() => setSelectedExterior(null)}>
                    <div className="mr-4">
                      <ArrowBack />
                    </div>
                    Primary color
                  </span>
                  <motion.div className="w-full flex justify-center" variants={upItem} animate={"open"}>
                    <motion.div
                      className="flex justify-between mt-4 w-[28rem] px-10"
                      variants={upItem}
                      animate={"open"}
                    >
                      <motion.div
                        className={`flex h-12 w-6 silverGradient cursor-pointer ${
                          primaryColor === "#ededed" ? "border-b-4" : ""
                        }`}
                        onClick={() => setPrimaryColor("#ededed")}
                        variants={upItem}
                      ></motion.div>
                      <motion.div
                        className={`flex h-12 w-6 blackGradient cursor-pointer ${
                          primaryColor === "#000" ? "border-b-4" : ""
                        }`}
                        onClick={() => setPrimaryColor("#000")}
                        variants={upItem}
                      ></motion.div>
                      <motion.div
                        className={`flex h-12 w-6 blueGradient cursor-pointer ${
                          primaryColor === "#1a6dd9" ? "border-b-4" : ""
                        }`}
                        onClick={() => setPrimaryColor("#1a6dd9")}
                        variants={upItem}
                      ></motion.div>
                      <motion.div
                        className={`flex h-12 w-6 redGradient cursor-pointer ${
                          primaryColor === "#ff3838" ? "border-b-4" : ""
                        }`}
                        onClick={() => setPrimaryColor("#ff3838")}
                        variants={upItem}
                      ></motion.div>
                      <motion.div
                        className={`flex h-12 w-6 yellowGradient cursor-pointer ${
                          primaryColor === "#ffee05" ? "border-b-4" : ""
                        }`}
                        onClick={() => setPrimaryColor("#ffee05")}
                        variants={upItem}
                      ></motion.div>
                      <motion.div
                        className={`flex h-12 w-6 greenGradient cursor-pointer ${
                          primaryColor === "#228067" ? "border-b-4" : ""
                        }`}
                        onClick={() => setPrimaryColor("#228067")}
                        variants={upItem}
                      ></motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )) ||
              (selectedExterior === "secondaryColor" && (
                <div className="flex flex-col w-full">
                  <span className="flex items-center font-space text-xs cursor-pointer" onClick={() => setSelectedExterior(null)}>
                    <div className="mr-4">
                      <ArrowBack />
                    </div>
                    Secondary color
                  </span>
                  <div className="w-full flex justify-center">
                    <motion.div className="flex justify-between mt-4 w-[25rem]">
                      <motion.div
                        className={`h-12 w-6 carbonGradient cursor-pointer ${
                          secondaryColor === "carbon" ? "border-b-4" : ""
                        }`}
                        onClick={() => setSecondaryColor("carbon")}
                      ></motion.div>
                      <motion.div
                        className={`h-12 w-6 silverGradient cursor-pointer ${
                          secondaryColor === "#ededed" ? "border-b-4" : ""
                        }`}
                        onClick={() => setSecondaryColor("#ededed")}
                      ></motion.div>
                      <motion.div
                        className={`h-12 w-6 blueGradient cursor-pointer ${
                          secondaryColor === "#1a6dd9" ? "border-b-4" : ""
                        }`}
                        onClick={() => setSecondaryColor("#1a6dd9")}
                      ></motion.div>
                      <motion.div
                        className={`h-12 w-6 redGradient cursor-pointer ${
                          secondaryColor === "#ff3838" ? "border-b-4" : ""
                        }`}
                        onClick={() => setSecondaryColor("#ff3838")}
                      ></motion.div>
                      <motion.div
                        className={`h-12 w-6 yellowGradient cursor-pointer ${
                          secondaryColor === "#ffee05" ? "border-b-4" : ""
                        }`}
                        onClick={() => setSecondaryColor("#ffee05")}
                      ></motion.div>
                      <motion.div
                        className={`h-12 w-6 greenGradient cursor-pointer ${
                          secondaryColor === "#228067" ? "border-b-4" : ""
                        }`}
                        onClick={() => setSecondaryColor("#228067")}
                      ></motion.div>
                    </motion.div>
                  </div>
                </div>
              )) ||
              (selectedExterior === "wheels" && (
                <div className="flex flex-col w-full">
                  <span
                    className="flex items-center font-space text-xs cursor-pointer"
                    onClick={() => setSelectedExterior(null)}
                  >
                    <div className="mr-4">
                      <ArrowBack />
                    </div>
                    Wheels
                  </span>
                  <div className="w-full flex justify-center">
                    <motion.div className="flex justify-between mt-4 w-[25rem]">
                      <motion.div
                        className="font-space text-xs cursor-pointer"
                        onClick={() => setWheel("originalWheel")}
                      >
                        <div className="mb-2">
                          <Wheels />
                        </div>
                        Original
                      </motion.div>
                      <motion.div
                        className="font-space text-xs cursor-pointer"
                        onClick={() => setWheel("wheelExtra")}
                      >
                        <div className="mb-2">
                          <Wheels />
                        </div>
                        Type 01
                      </motion.div>
                      <motion.div
                        className="font-space text-xs cursor-pointer"
                        onClick={() => setWheel("wheelExtra2")}
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
              (selectedExterior === "brakes" && (
                <div className="flex flex-col w-full">
                  <span className="flex items-center font-space text-xs cursor-pointer" onClick={() => setSelectedExterior(null)}>
                    <div className="mr-4">
                      <ArrowBack />
                    </div>
                    Brakes color
                  </span>
                  <div className="w-full flex justify-center">
                    <motion.div className="flex justify-between mt-4 w-[25rem]">
                      <motion.div
                        className={`h-12 w-6 limeGradient cursor-pointer ${
                          brakesColor === "#12ff4d" ? "border-b-4" : ""
                        }`}
                        onClick={() => setBrakeColor("#12ff4d")}
                      ></motion.div>
                      <motion.div
                        className={`h-12 w-6 blueGradient cursor-pointer ${
                          brakesColor === "#1a6dd9" ? "border-b-4" : ""
                        }`}
                        onClick={() => setBrakeColor("#1a6dd9")}
                      ></motion.div>
                      <motion.div
                        className={`h-12 w-6 redGradient cursor-pointer ${
                          brakesColor === "#ff3838" ? "border-b-4" : ""
                        }`}
                        onClick={() => setBrakeColor("#ff3838")}
                      ></motion.div>
                      <motion.div
                        className={`h-12 w-6 yellowGradient cursor-pointer ${
                          brakesColor === "#ffee05" ? "border-b-4" : ""
                        }`}
                        onClick={() => setBrakeColor("#ffee05")}
                      ></motion.div>
                      <motion.div
                        className={`h-12 w-6 blackGradient cursor-pointer ${
                          brakesColor === "#000" ? "border-b-4" : ""
                        }`}
                        onClick={() => setBrakeColor("#000")}
                      ></motion.div>
                    </motion.div>
                  </div>
                </div>
              ))
            )}
          </motion.div>
          <motion.div
            className="py-4 px-10 bg-black/30 text-white absolute top-[10%] backdrop-blur-sm z-10 m-auto left-0 right-0 w-[28rem]"
            animate={[
              interiorDesignToggle ? "open" : "closed",
              "selectedExterior",
            ]}
            variants={customBlockAnimation}
          >
            <span className="flex font-space text-xs">Leather color</span>
            <motion.div className="flex justify-between mt-4" variants={upItem} animate={"open"}>
              <motion.div
                className={`flex h-12 w-6 coffeeLeatherGradient cursor-pointer ${
                  internalColor === "#593915" ? "border-b-4" : ""
                }`}
                onClick={() => setInternalColor("#593915")}
                variants={upItem}
              ></motion.div>
              <motion.div
                className={`flex h-12 w-6 lightLeatherGradient cursor-pointer ${
                  internalColor === "#c7b695" ? "border-b-4" : ""
                }`}
                onClick={() => setInternalColor("#c7b695")}
                variants={upItem}
              ></motion.div>
              <motion.div
                className={`flex h-12 w-6 greyLeatherGradient cursor-pointer ${
                  internalColor === "#9c9a95" ? "border-b-4" : ""
                }`}
                onClick={() => setInternalColor("#9c9a95")}
                variants={upItem}
              ></motion.div>
              <motion.div
                className={`flex h-12 w-6 blackLeatherGradient cursor-pointer ${
                  internalColor === "#1a1a1a" ? "border-b-4" : ""
                }`}
                onClick={() => setInternalColor("#1a1a1a")}
                variants={upItem}
              ></motion.div>
            </motion.div>
          </motion.div>
          <Scene configs={configs} interiorEnvironment={interiorEnvironment}/>
        </div>
        <Summary handleUpdateEnviroment={handleUpdateEnviroment}/>
      </div>
    </motion.div>
  );
};

const customBlockAnimation = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    height: "79px",
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
  selectedExterior: {
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
