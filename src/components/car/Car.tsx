import React, { useMemo, useRef, useState } from "react";
import { OrbitControls, Stage, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Porsche from "./scene/Porsche";
import ArrowDown from "../../assets/icons/arrow-down.svg";
import { CarConfigs } from "./interfaces";
import { motion } from "framer-motion";
import { Garage } from "./scene/Garage";
import { DirectionalLightHelper, PointLightHelper, SpotLightHelper } from "three";
import Room from "./scene/Room";
import Warehouse from "./scene/Warehouse";
import * as THREE from 'three'
import Wareroom from "./scene/Wareroom";
import { InteriorGarage } from "./scene/InteriorGarage";

export const Car = () => {
  const [wheel, setWheel] = useState<"originalWheel" | "wheelExtra" | "wheelExtra2">("originalWheel");
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
    <motion.div className="w-full h-[calc(100vh-72px)] bg-[#e4f3f5] flex justify-center flex-col relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1  }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
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
        className="py-4 px-10 bg-white/10 absolute top-[10%] backdrop-blur-sm z-10 m-auto left-0 right-0 w-[25rem]"
        animate={exteriorDesignToggle ? "open" : "closed"}
        variants={customBlockAnimation}
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
        variants={customBlockAnimation}
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
      <Canvas shadows >
        {/* <Stage environment={"night"} intensity={0.001} preset={'rembrandt'} castShadow adjustCamera > */}
          <OrbitControls />
          <Porsche
            exteriorDesign={configs.exteriorDesign}
            interiorDesign={configs.interiorDesign}
          />
          <Lights />
          
          {/* <Garage /> */}
          {/* <Room /> */}
          {/* <Warehouse /> */}
          {/* <Wareroom /> */}
          <InteriorGarage />
        {/* </Stage> */}
      </Canvas>
    </motion.div>
  );
};

export const Lights = () => {
  const pointLightRef = useRef<any>(null);
  useHelper(pointLightRef, PointLightHelper, 1, "red");

  const directionalRef = useRef<any>(null);
  useHelper(directionalRef, DirectionalLightHelper, 1)

  const spotLightHelper = useRef<any>(null);
  useHelper(spotLightHelper, SpotLightHelper, 1)

  const spotlight = useMemo(() => new THREE.SpotLight('#ede7d3'), []);
  const spotlight2 = useMemo(() => new THREE.SpotLight('#ede7d3'), []);
  const spotlight3 = useMemo(() => new THREE.SpotLight('#ede7d3'), []);
  const spotlight4 = useMemo(() => new THREE.SpotLight('#ede7d3'), []);

  const spotlight5 = useMemo(() => new THREE.SpotLight('#ede7d3'), []);
  const spotlight6 = useMemo(() => new THREE.SpotLight('#ede7d3'), []);
  const spotlight7 = useMemo(() => new THREE.SpotLight('#ede7d3'), []);
  const spotlight8 = useMemo(() => new THREE.SpotLight('#ede7d3'), []);
  const spotlight9 = useMemo(() => new THREE.SpotLight('#ede7d3'), []);

  return (
    <>
      {/* <pointLight position={[0,8,5]} intensity={1} castShadow ref={pointLightRef}/> */}
      {/* <directionalLight position={[0,18,0]} intensity={0.5} castShadow ref={directionalRef}/> */}
      {/* <spotLight position={[0,18,0]} intensity={0.7} angle={0.8} castShadow penumbra={1} ref={spotLightHelper} /> */}
      <ambientLight intensity={0.2}/>
      <group>
        <primitive
          object={spotlight}
          position={[0,14,0]} intensity={1.5} angle={1} castShadow penumbra={0.9}
          shadow-radius={10}
          shadow-bias={-0.0001}
          />
        <primitive object={spotlight.target} position={[0, 0, 0]} />
      </group>

      <group>
        <primitive
          object={spotlight2}
          position={[19,14,15]} intensity={0.7} angle={0.6} castShadow penumbra={0.9}
          shadow-radius={10}
          shadow-bias={-0.0001}
          />
        <primitive object={spotlight2.target} position={[19,-4,15]} />
      </group>

      <group>
        <primitive
          object={spotlight3}
          position={[19,14,0]} intensity={0.7} angle={0.6} castShadow penumbra={0.9}
          shadow-radius={10}
          shadow-bias={-0.0001}
          />
        <primitive object={spotlight3.target} position={[19,-4,0]} />
      </group>

      <group>
        <primitive
          object={spotlight4}
          position={[19,14,-15]} intensity={0.7} angle={0.6} castShadow penumbra={0.9}
          shadow-radius={10}
          shadow-bias={-0.0001}
          />
        <primitive object={spotlight4.target} position={[19,-4,-15]} />
      </group>

      <group>
        <primitive
          object={spotlight8}
          position={[13,14,-15]} intensity={0.5} angle={0.9} castShadow penumbra={0.9}
          shadow-radius={10}
          shadow-bias={-0.0001}
          ref={spotLightHelper}
          />
        <primitive object={spotlight8.target} position={[13,-4,-15]} />
      </group>

      <group>
        <primitive
          object={spotlight5}
          position={[-19,14,15]} intensity={0.7} angle={0.6} castShadow penumbra={0.9}
          shadow-radius={10}
          shadow-bias={-0.0001}
          />
        <primitive object={spotlight5.target} position={[-19,-4,15]} />
      </group>

      <group>
        <primitive
          object={spotlight6}
          position={[-19,14,0]} intensity={0.7} angle={0.6} castShadow penumbra={0.9}
          shadow-radius={10}
          shadow-bias={-0.0001}
          />
        <primitive object={spotlight6.target} position={[-19,-4,0]} />
      </group>

      <group>
        <primitive
          object={spotlight7}
          position={[-19,14,-15]} intensity={0.7} angle={0.6} castShadow penumbra={0.9}
          shadow-radius={10}
          shadow-bias={-0.0001}
          />
        <primitive object={spotlight7.target} position={[-19,-4,-15]} />
      </group>

      <group>
        <primitive
          object={spotlight8}
          position={[-13,14,-15]} intensity={0.5} angle={0.9} castShadow penumbra={0.9}
          shadow-radius={10}
          shadow-bias={-0.0001}
          />
        <primitive object={spotlight8.target} position={[-13,-4,-15]} />
      </group>

    </>
  )
}

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
}

const rotateArrowAnimation = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
}