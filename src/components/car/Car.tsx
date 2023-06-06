import React, { useState } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Porsche from "./scene/Porsche";
import ArrowDown from "../../assets/icons/arrow-down.svg";
import { CarConfigs } from "./interfaces";
import { motion } from "framer-motion";

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
    <div className="w-full h-[80vh] flex justify-center bg-customize bg-no-repeat bg-contain flex-col relative">
      <div className="flex justify-center items-center w-full h-14 bg-white/10 absolute top-0 backdrop-blur-sm z-10">
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
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
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
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
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
        className="py-4 px-10 bg-white/10 absolute top-[10%] backdrop-blur-sm z-10 m-auto left-0 right-0 w-[25rem]"
        animate={exteriorDesignToggle ? "open" : "closed"}
        variants={{
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
        }}
      >
        <motion.div
          variants={{
            open: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 300, damping: 24 },
            },
            closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
          }}
        >
          External
        </motion.div>
      </motion.div>
      <motion.div
        className="py-4 px-10 bg-white/10 absolute top-[10%] backdrop-blur-sm z-10 m-auto left-0 right-0 w-[25rem]"
        animate={interiorDesignToggle ? "open" : "closed"}
        variants={{
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
        }}
      >
        <motion.div
          variants={{
            open: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 300, damping: 24 },
            },
            closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
          }}
        >
          Internal
        </motion.div>
      </motion.div>
      <Canvas>
        <Stage environment={"city"}>
          <OrbitControls />
          <Porsche
            exteriorDesign={configs.exteriorDesign}
            interiorDesign={configs.interiorDesign}
          />
        </Stage>
      </Canvas>
    </div>
  );
};
