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
import { Loader, useProgress } from "@react-three/drei";
import { customBlockAnimation, rotateArrowAnimation, toggleAnimation, toggleHolderAnimation, upItem } from "./animations";
import { debounce } from "../shared/utils";

export const Configurator = () => {
  const [wheel, setWheel] = useState<Item>(wheelOptions.original);
  const [primaryColor, setPrimaryColor] = useState<Item>(primaryColorOptions.silver);
  const [secondaryColor, setSecondaryColor] = useState<Item>(secondaryColorOptions.carbon);
  const [leatherColor, setLeatherColor] = useState<Item>(leatherOptions.lightLeather);
  const [brakesColor, setBrakeColor] = useState<Item>(brakeColorOptions.black);

  const [exteriorDesignToggle, setExteriorDesignToggle] = useState(false);
  const [interiorDesignToggle, setInteriorDesignToggle] = useState(false);

  const [interiorEnvironment, setInteriorEnvironment] = useState(false);

  const [highQuality, setHighQuality] = useState(false) // Ativa ou desativa o post processing

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

  const [selectedExteriorType, setSelectedExteriorType] = useState<'primaryColor' | 'secondaryColor' | 'wheels' | 'brakes' | null>(null);

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

  const handleUpdateEnvironment = (data: boolean) => { // Recebe os dados do toggle de ambientes do summary
    setInteriorEnvironment(data)
  };

  const { progress } = useProgress(); // Função do Drei que pega de 0 a 100 o carregamento da cena, 
  // porém o useProgress flicka quando chega em 100 se trocarmos o cenario, por isso usamos o debounce

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if(progress === 100) debouncedFunction()
    else setLoaded(false)
  },[progress])

  // debounce é uma técnica usada para controlar a frequência com que uma função é chamada em resposta a um evento, 
  // como por exemplo um evento de digitação. Isso é útil para evitar execuções desnecessárias e melhorar a eficiência do código.

  const debouncedFunction = debounce(() => {
    setLoaded(true);
  }, 3000);

  return (
    <motion.div
      className="w-full lg:h-[calc(100vh-72px)] max-lg:mt-[72px] bg-dark-primary flex justify-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex max-lg:flex-col">
        <div className="w-[calc(100vw-320px)] max-lg:w-screen max-lg:h-[68vh] relative">
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
              <motion.div className="arrow" variants={rotateArrowAnimation} transition={{ duration: 0.2 }} style={{ originY: 0.55 }}>
                <ArrowDown />
              </motion.div>
              <motion.hr className="active-border" variants={{open: { width: "33%" },closed: { width: 0 }}}
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
              <motion.div className="arrow" variants={rotateArrowAnimation} transition={{ duration: 0.2 }} style={{ originY: 0.55 }}>
                <ArrowDown />
              </motion.div>
              <motion.hr className="active-border" variants={{open: { width: "33%" }, closed: { width: 0 }}}
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
                  className="flex flex-col font-space text-xs cursor-pointer" variants={upItem}
                  onClick={() => setSelectedExteriorType("primaryColor")}
                >
                  <div className="mb-2">
                    <PrimaryColor />
                  </div>
                  <span className="max-lg:hidden">Primary color</span>
                </motion.div>
                <motion.div
                  className="flex flex-col font-space text-xs cursor-pointer" variants={upItem}
                  onClick={() => setSelectedExteriorType("secondaryColor")}
                >
                  <div className="mb-2">
                    <SecondaryColor />
                  </div>
                  <span className="max-lg:hidden">Secondary color</span>
                </motion.div>
                <motion.div
                  className="flex flex-col font-space text-xs cursor-pointer" variants={upItem}
                  onClick={() => setSelectedExteriorType("wheels")}
                >
                  <div className="mb-2">
                    <Wheels />
                  </div>
                  <span className="max-lg:hidden">Wheels</span>
                </motion.div>
                <motion.div
                  className="flex flex-col font-space text-xs cursor-pointer" variants={upItem}
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
                <div className="flex flex-col w-full">
                  <span className="flex items-center font-space text-xs cursor-pointer" onClick={() => setSelectedExteriorType(null)}>
                    <div className="mr-4">
                      <ArrowBack />
                    </div>
                    Primary color
                  </span>
                  <div className="w-full flex justify-center">
                    <div className="flex justify-between mt-4 w-[25rem]">
                      {Object.keys(primaryColorOptions).map((option) => ( // transforma as opções em um array com as chaves dos objetos
                        <div 
                          className={`flex h-12 w-6 ${option}Gradient cursor-pointer 
                          ${primaryColor === primaryColorOptions[option] && "border-b-4"}`}
                          onClick={() => setPrimaryColor(primaryColorOptions[option])}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
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
                    <div className="flex justify-between mt-4 w-[25rem]">
                      {Object.keys(secondaryColorOptions).map((option) => ( // transforma as opções em um array com as chaves dos objetos
                        <div 
                          className={`flex h-12 w-6 ${option}Gradient cursor-pointer 
                          ${secondaryColor === secondaryColorOptions[option] && "border-b-4"}`}
                          onClick={() => setSecondaryColor(secondaryColorOptions[option])}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              )) ||
              (selectedExteriorType === "wheels" && (
                <div className="flex flex-col w-full">
                  <span className="flex items-center font-space text-xs cursor-pointer" onClick={() => setSelectedExteriorType(null)}>
                    <div className="mr-4">
                      <ArrowBack />
                    </div>
                    Wheels
                  </span>
                  <div className="w-full flex justify-center">
                    <div className="flex justify-between mt-4 w-[25rem]">
                      {Object.keys(wheelOptions).map((option) => ( // transforma as opções em um array com as chaves dos objetos
                        <div 
                          className={`${wheel === wheelOptions[option] && 'border-b-4 border-yellow-primary'} font-space text-xs cursor-pointer pb-1`}
                          onClick={() => setWheel(wheelOptions[option])}
                        >
                          <div className="mb-2">
                            <Wheels />
                          </div>
                          {wheelOptions[option].value}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )) ||
              (selectedExteriorType === "brakes" && (
                <div className="flex flex-col w-full">
                  <span
                    className="flex items-center font-space text-xs cursor-pointer"
                    onClick={() => setSelectedExteriorType(null)}
                  >
                    <div className="mr-4">
                      <ArrowBack />
                    </div>
                    Brakes color
                  </span>
                  <div className="w-full flex justify-center">
                    <div className="flex justify-between mt-4 w-[25rem]">
                      {Object.keys(brakeColorOptions).map((option) => ( // transforma as opções em um array com as chaves dos objetos
                        <div 
                          className={`flex h-12 w-6 ${option}Gradient cursor-pointer 
                          ${brakesColor === brakeColorOptions[option] && "border-b-4"}`}
                          onClick={() => setBrakeColor(brakeColorOptions[option])}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )}
          </motion.div>
          <motion.div
            className="py-4 px-10 bg-black/30 text-white absolute top-[10%] backdrop-blur-sm z-10 m-auto left-0 right-0 w-[28rem] max-lg:w-[80vw]"
            animate={[interiorDesignToggle ? "open" : "closed", "selectedExteriorType"]} variants={customBlockAnimation}
          >
            <span className="flex font-space text-xs">Leather color</span>
            <div className="flex justify-between mt-4">
              {Object.keys(leatherOptions).map((option) => ( // transforma as opções em um array com as chaves dos objetos
                <div 
                  className={`flex h-12 w-6 ${option}Texture cursor-pointer 
                  ${leatherColor === leatherOptions[option] && "border-b-4"}`}
                  onClick={() => setLeatherColor(leatherOptions[option])}
                ></div>
              ))}
            </div>
          </motion.div>
          <motion.div className="absolute rounded-[10px] border border-yellow-primary bg-dark-primary w-16 p-[2px] z-10 bottom-4 left-10"
            animate={highQuality ? "on" : "off"} variants={toggleHolderAnimation}
          >
            <motion.div 
              className="flex font-inter uppercase font-medium text-xs cursor-pointer text-white bg-yellow-primary w-fit rounded-[8px] p-[6px]" 
              onClick={() => setHighQuality(!highQuality)} animate={highQuality ? "on" : "off"} variants={toggleAnimation}
            >
              HQ
            </motion.div>
          </motion.div>
          {/* Componente de loader do drei */}
          {!loaded && <Loader dataInterpolation={(p) => `Loading ${Math.trunc(p)}%`} barStyles={{background: '#E2B558'}} />}
          <Scene configs={configs} interiorEnvironment={interiorEnvironment} highQuality={highQuality}/>
        </div>
        <div className="flex justify-center max-lg:w-full">
          <Summary handleUpdateEnvironment={handleUpdateEnvironment} configs={configs} loaded={loaded}/>
        </div>
      </div>
    </motion.div>
  );
};
