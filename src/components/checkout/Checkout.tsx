import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import ArrowDown from "../../assets/icons/arrow-down.svg";
import { Summary } from "../shared/summary/Summary";
import { CarConfigs, Item } from "../configurator/interfaces";
import { brakeColorOptions, leatherOptions, primaryColorOptions, secondaryColorOptions, wheelOptions } from "../configurator/carConfigs";
import InputMask from 'react-input-mask';
import Porsche from "../configurator/car/Porsche";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

import { arrowAnimation, collapsibleFormAnimation, initialFadeInAnimation } from "./animations";
import { generateInvoice } from "../shared/generatePdf";

export const Checkout = () => {
  const [expanded, setExpanded] = useState(0); // Collapsibles expansiveis por index

  const [wheel, setWheel] = useState<Item>(wheelOptions.original);
  const [primaryColor, setPrimaryColor] = useState<Item>(primaryColorOptions.silver);
  const [secondaryColor, setSecondaryColor] = useState<Item>(secondaryColorOptions.carbon);
  const [leatherColor, setLeatherColor] = useState<Item>(leatherOptions.lightLeather);
  const [brakesColor, setBrakeColor] = useState<Item>(brakeColorOptions.black);

  const configs: CarConfigs = {
    exteriorDesign: {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor,
      wheelType: wheel,
      brakesColor: brakesColor,
    },
    interiorDesign: {
      leatherColor: leatherColor,
    },
  };

  const [codeModalOpen, setCodeModalOpen] = useState(true);
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState(false);

  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [driverLicense, setDriverLicense] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');

  const reset = () => {
    setCode('');
    setCodeError(false);

    setPrimaryColor(primaryColorOptions.silver);
    setSecondaryColor(secondaryColorOptions.carbon);
    setLeatherColor(leatherOptions.lightLeather);
    setWheel(wheelOptions.original);
    setBrakeColor(brakeColorOptions.black);

    setFullName('');
    setDateOfBirth('');
    setDriverLicense('');
    setEmail('');
    setPhone('');

    setStreet('');
    setNumber('');
    setCity('');
    setState('');
    setZipCode('');

    setExpanded(0);
    setCodeModalOpen(true);
  }

  const getCodeInfo = () => {
    setCodeError(false)

    const params = Object.fromEntries(new URLSearchParams(code)); // Transforma o código em um objeto por meio de query params

    const pc = setCodeValue(params.pc, primaryColorOptions);
    const sc = setCodeValue(params.sc, secondaryColorOptions);
    const wt = setCodeValue(params.wt, wheelOptions);
    const bc = setCodeValue(params.bc, brakeColorOptions);
    const lc = setCodeValue(params.lc, leatherOptions);

    if (pc && sc && wt && bc && lc) { // Verifica se o código é valido
      setPrimaryColor(pc);
      setSecondaryColor(sc);
      setWheel(wt);
      setBrakeColor(bc);
      setLeatherColor(lc)

      setCodeModalOpen(false);
    } else setCodeError(true)

  }

  const setCodeValue = (code: string, options: Record<string, Item>) => {
    for (const key in options) { // Percorre as opções dentro de um item
      if (options.hasOwnProperty(key) && options[key].code === code) { // Procura a opção de personalicação referente ao código
        return options[key];
      }
    }
  };

  const validForm = () => {
    return (
      fullName.length > 0 &&
      dateOfBirth.length > 0 &&
      driverLicense.length > 0 &&
      email.length > 0 &&
      phone.length > 0 &&
      street.length > 0 &&
      number.length > 0 &&
      zipCode.length > 0 &&
      state.length > 0 &&
      city.length > 0
    );
  }

  const getConfigsPrice = () => {
    return (
      configs.exteriorDesign.primaryColor.price +
      configs.exteriorDesign.secondaryColor.price +
      configs.exteriorDesign.wheelType.price +
      configs.exteriorDesign.brakesColor.price +
      configs.interiorDesign.leatherColor.price
    );
  };

  const getArrivalDate = () => {
    const date = new Date(new Date().setDate(new Date().getDate() + 7));
    return `${date.toLocaleDateString('en-us', { weekday: 'short' })}, ${date.getDate()} ${date.toLocaleString('en-us', { month: 'short' })}`
  }

  return (
    <>
      <motion.div
        className="flex flex-col bg-[#1c1c1c] text-white w-full min-h-[calc(100vh-3.625rem)] bg-no-repeat py-12 px-28 max-lg:pt-28 lg:max-xl:py-10 md:max-xl:px-12 max-md:px-10 gap-11 md:max-xl:gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-between max-lg:flex-col">
          <h1 className="font-space font-medium text-3xl">{codeModalOpen ? "--/--" : '911 GT2'} Checkout</h1>
          <span className="text-[#676767] font-space text-xl">{codeModalOpen ? "--/--" : code}</span>
        </div>
        <div className="flex max-lg:flex-col-reverse gap-5">
          <div className="flex flex-col flex-1 justify-between max-lg:gap-8">
            <div className="flex flex-col gap-5">
              <motion.div
                className="flex flex-col py-3 px-8 bg-dark-primary rounded-[10px] text-white"
                initial="hidden"
                animate="visible"
                variants={initialFadeInAnimation}
                onClick={() => setExpanded(0)}
              >
                <div className="flex items-center justify-between font-inter text-base uppercase cursor-pointer">
                  buyer information
                  <motion.div
                    className="expand"
                    initial="collapsed"
                    animate={expanded === 0 ? "open" : "collapsed"}
                    variants={arrowAnimation}
                  >
                    <ArrowDown />
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {expanded === 0 && (
                    <motion.section
                      className="overflow-hidden gap-7 flex flex-col"
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={collapsibleFormAnimation}
                    >
                      <div className="flex max-lg:flex-col max-lg:gap-7">
                        <div className="flex flex-col lg:w-1/2">
                          <label htmlFor="full-name" className="primary-input-label">Full name</label>
                          <input type="text" id="full-name" className="primary-input" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                        </div>
                        <div className="flex flex-col lg:w-1/4 lg:px-7">
                          <label htmlFor="birth" className="primary-input-label">Date of birth</label>
                          <InputMask type="text" id="birth" mask="99/99/9999" className="primary-input" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                        </div>
                        <div className="flex flex-col lg:w-1/4">
                          <label htmlFor="driver-license" className="primary-input-label">Driver license</label>
                          <input type="number" id="driver-license" className="primary-input" value={driverLicense} onChange={(e) => setDriverLicense(e.target.value)} />
                        </div>
                      </div>
                      <div className="flex max-lg:flex-col max-lg:gap-7">
                        <div className="flex flex-col lg:w-1/2">
                          <label htmlFor="email" className="primary-input-label">Email</label>
                          <input type="text" id="email" className="primary-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="flex flex-col lg:w-1/4 lg:px-7">
                          <label htmlFor="phone" className="primary-input-label">Phone</label>
                          <input type="number" id="phone" className="primary-input" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                      </div>
                      
                    </motion.section>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                className="flex flex-col py-3 px-8 bg-dark-primary rounded-[10px] text-white"
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                variants={initialFadeInAnimation}
                onClick={() => setExpanded(1)}
              >
                <div className="flex items-center justify-between font-inter text-base uppercase cursor-pointer">
                  recipent address
                  <motion.div
                    className="expand"
                    initial="collapsed"
                    animate={expanded === 1 ? "open" : "collapsed"}
                    variants={arrowAnimation}
                  >
                    <ArrowDown />
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {expanded === 1 && (
                    <motion.section
                      className="overflow-hidden gap-7 flex flex-col"
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={collapsibleFormAnimation}
                    >
                      <div className="flex max-lg:flex-col">
                        <div className="flex flex-col lg:w-3/4">
                          <label htmlFor="street" className="primary-input-label">Street</label>
                          <input type="text" id="street" className="primary-input" value={street} onChange={(e) => setStreet(e.target.value)} />
                        </div>
                        <div className="flex flex-col lg:w-1/4 lg:pl-7 max-lg:pt-7">
                          <label htmlFor="number" className="primary-input-label">Number</label>
                          <input type="number" id="number" className="primary-input" value={number} onChange={(e) => setNumber(e.target.value)} />
                        </div>
                      </div>
                      <div className="flex max-lg:flex-col">
                        <div className="flex flex-col lg:w-1/5">
                          <label htmlFor="zip-code" className="primary-input-label">Zip code</label>
                          <input type="text" id="zip-code" className="primary-input" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                        </div>
                        <div className="flex flex-col lg:w-2/5 lg:px-7 max-lg:py-7">
                          <label htmlFor="state" className="primary-input-label">State</label>
                          <input type="text" id="state" className="primary-input" value={state} onChange={(e) => setState(e.target.value)} />
                        </div>
                        <div className="flex flex-col  lg:w-2/5">
                          <label htmlFor="city" className="primary-input-label">City</label>
                          <input type="text" id="city" className="primary-input" value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>
                      </div>
                    </motion.section>
                  )}
                </AnimatePresence>
              </motion.div>
              <div className="flex max-lg:flex-col lg:max-h-56 gap-5">
                <motion.div
                  className="flex flex-col py-3 px-8 bg-dark-primary rounded-[10px] text-white lg:w-1/2"
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 }}
                  variants={initialFadeInAnimation}
                >
                  <div className="font-inter uppercase text-base">
                    car preview
                  </div>
                  <div className="flex justify-center my-[1.375rem] md:max-xl:my-3">
                    {!codeModalOpen && 
                      <div className="">
                        <Canvas shadows>
                          <Stage>
                            <OrbitControls autoRotate enableRotate={false} enableZoom={false}/>
                            <Porsche
                              exteriorDesign={configs.exteriorDesign}
                              interiorDesign={configs.interiorDesign}
                            />
                          </Stage>
                        </Canvas>
                      </div>
                    }
                  </div>
                </motion.div>
                <motion.div
                  className="flex flex-col py-3 px-8 bg-dark-primary rounded-[10px] text-white lg:w-1/2"
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 }}
                  variants={initialFadeInAnimation}
                >
                  <div className="font-inter uppercase text-base">
                    arrival at
                  </div>
                  <div className="flex flex-col flex-1 items-center justify-center my-[1.375rem] md:max-xl:my-3">
                    <span className="font-space text-xl text-yellow-primary">{getArrivalDate()}</span>
                    <small className="font-space text-base">10:00</small>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="secondary-btn" onClick={reset}>Start over</div>
              <div className={`primary-btn ${!validForm() && 'disabled-btn'}`} onClick={() => validForm() && generateInvoice(fullName, street, number, city, state, zipCode, getConfigsPrice())}>Generate invoice</div>
            </div>
          </div>
          <div className="max-lg:w-full w-80">
            <Summary configs={configs} checkout={true}/>
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {codeModalOpen && 
          <motion.div className="flex items-center justify-center bg-opacity-50 h-screen w-screen fixed left-0 top-0 bottom-0 z-40" 
            animate={{background: '#00000080'}} 
            initial={{background: '#00000000'}} 
            exit={{background: '#00000000'}}
          >
            <motion.div className="flex absolute flex-col justify-between z-50 bg-[#1C1C1C] rounded-[10px] p-4 overflow-hidden" 
              animate={{height: '220px', width: `${window.innerWidth > 768 ? '375px' : '290px'}`, opacity: 1}} 
              initial={{height: 0, width: 0, opacity: 0}} 
              exit={{height: 0, width: 0, opacity: 0}} 
              transition={{type: "spring",stiffness: 250,damping: 24}}
            >
              <h3 className="text-white font-inter text-lg">Purchase code</h3>
              <p className="font-montserrat text-[#7E7E7E] text-sm">
                Insert your client's purchase code
              </p>
              <input type="text" value={code} onChange={(e) => setCode(e.target.value)} className={`primary-input ${codeError && 'border-[#E95652]'}`} />
              {codeError && <small className="font-montserrat text-[#E95652]">The code is incorrect!</small>}
              <div className="flex items-center justify-end">
                <div className="primary-btn" onClick={getCodeInfo}>Proceed</div>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </>
  );
};
