import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import ArrowDown from "../../assets/icons/arrow-down.svg";
import { Summary } from "../shared/summary/Summary";
import { CarConfigs, Item } from "../configurator/interfaces";
import { brakeColorOptions, leatherOptions, primaryColorOptions, secondaryColorOptions, wheelOptions } from "../configurator/carConfigs";
import InputMask from 'react-input-mask';

export const Checkout = () => {
  const [expanded, setExpanded] = useState(0);

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

  const [codeModal, setCodeModal] = useState(true);
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

    setCodeModal(true);
  }

  const getCodeInfo = () => {
    setCodeError(false)

    const urlParams = new URLSearchParams(code);
    const params = Object.fromEntries(urlParams);

    const pc = setCodePrimaryColor(params.pc);
    const sc = setCodeSecondaryColor(params.sc);
    const wt = setCodeWheelType(params.wt);
    const bc = setCodeBrakeColor(params.bc);
    const lc = setCodeLeatherColor(params.lc)

    if (pc && sc && wt && bc && lc) {
      setPrimaryColor(pc);
      setSecondaryColor(sc);
      setWheel(wt);
      setBrakeColor(bc);
      setLeatherColor(lc)

      setCodeModal(false);
    } else setCodeError(true)

  }

  const setCodePrimaryColor = (code: string) => {
    for (const key in primaryColorOptions) {
      if (primaryColorOptions.hasOwnProperty(key) && primaryColorOptions[key].code === code) {
        return primaryColorOptions[key]
      }
    }
    return null
  }

  const setCodeSecondaryColor = (code: string) => {
    for (const key in secondaryColorOptions) {
      if (secondaryColorOptions.hasOwnProperty(key) && secondaryColorOptions[key].code === code) {
        return secondaryColorOptions[key]
      }
    }
    return null
  }

  const setCodeWheelType = (code: string) => {
    for (const key in wheelOptions) {
      if (wheelOptions.hasOwnProperty(key) && wheelOptions[key].code === code) {
        return wheelOptions[key]
      }
    }
    return null
  }

  const setCodeBrakeColor = (code: string) => {
    for (const key in brakeColorOptions) {
      if (brakeColorOptions.hasOwnProperty(key) && brakeColorOptions[key].code === code) {
        return brakeColorOptions[key]
      }
    }
    return null
  }

  const setCodeLeatherColor = (code: string) => {
    for (const key in leatherOptions) {
      if (leatherOptions.hasOwnProperty(key) && leatherOptions[key].code === code) {
        return leatherOptions[key]
      }
    }
    return null
  }

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

  const generateInvoice = () => {
    console.log(fullName, dateOfBirth, driverLicense, phone, email)
  }

  return (
    <>
      <motion.div
        className="flex flex-col bg-[#1c1c1c] text-white bg-topography w-full h-[calc(100vh-72px)] bg-no-repeat py-12 px-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-between">
          <h1 className="font-space font-medium text-3xl">{codeModal ? "--/--" : '911 GT2'} Checkout</h1>
          <span className="text-[#676767] font-space text-xl">{codeModal ? "--/--" : code}</span>
        </div>
        <div className="flex mt-11">
          <div className="flex flex-col flex-1 justify-between mr-5">
            <div className="flex flex-col">
              <motion.div
                className="flex flex-col py-3 px-8 bg-[#161616] rounded-[10px] text-white cursor-pointer mb-5"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 100 },
                }}
                onClick={() => setExpanded(0)}
              >
                <div className="flex items-center justify-between font-inter text-base uppercase">
                  buyer information
                  <motion.div
                    className="expand"
                    initial="collapsed"
                    animate={expanded === 0 ? "open" : "collapsed"}
                    variants={{
                      open: { rotateZ: "180deg" },
                      collapsed: { rotateZ: "0deg" },
                    }}
                  >
                    <ArrowDown />
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {expanded === 0 && (
                    <motion.section
                      className="overflow-hidden"
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: {
                          opacity: 1,
                          height: "auto",
                          marginTop: "1.375rem",
                          marginBottom: "1.375rem",
                        },
                        collapsed: { opacity: 0, height: 0, marginTop: "0", marginBottom: 0 },
                      }}
                      transition={{ type: "spring", stiffness: 150, damping: 15 }}
                    >
                      <div className="flex">
                        <div className="flex flex-col w-1/2">
                          <label htmlFor="full-name" className="font-inter text-xs ml-2 mb-1">Full name</label>
                          <input type="text" id="full-name" className="primary-input" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                        </div>
                        <div className="flex flex-col w-1/4 px-7">
                          <label htmlFor="birth" className="font-inter text-xs ml-2 mb-1">Date of birth</label>
                          <InputMask type="text" id="birth" mask="99/99/9999" className="primary-input" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                        </div>
                        <div className="flex flex-col w-1/4">
                          <label htmlFor="driver-license" className="font-inter text-xs ml-2 mb-1">Driver license</label>
                          <input type="number" id="driver-license" className="primary-input" value={driverLicense} onChange={(e) => setDriverLicense(e.target.value)} />
                        </div>
                      </div>
                      <div className="flex mt-7">
                        <div className="flex flex-col w-1/2">
                          <label htmlFor="email" className="font-inter text-xs ml-2 mb-1">Email</label>
                          <input type="text" id="email" className="primary-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="flex flex-col w-1/4 px-7">
                          <label htmlFor="phone" className="font-inter text-xs ml-2 mb-1">Phone</label>
                          <input type="number" id="phone" className="primary-input" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                      </div>
                      
                    </motion.section>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                className="flex flex-col py-3 px-8 bg-[#161616] rounded-[10px] text-white cursor-pointer mb-5"
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 100 },
                }}
                onClick={() => setExpanded(1)}
              >
                <div className="flex items-center justify-between font-inter text-base uppercase">
                  recipent address
                  <motion.div
                    className="expand"
                    initial="collapsed"
                    animate={expanded === 1 ? "open" : "collapsed"}
                    variants={{
                      open: { rotateZ: "180deg" },
                      collapsed: { rotateZ: "0deg" },
                    }}
                  >
                    <ArrowDown />
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {expanded === 1 && (
                    <motion.section
                      className="overflow-hidden"
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: {
                          opacity: 1,
                          height: "auto",
                          marginTop: "1.375rem",
                          marginBottom: "1.375rem"
                        },
                        collapsed: { opacity: 0, height: 0, marginTop: "0", marginBottom: 0 },
                      }}
                      transition={{ type: "spring", stiffness: 150, damping: 15 }}
                    >
                      <div className="flex">
                        <div className="flex flex-col w-3/4">
                          <label htmlFor="street" className="font-inter text-xs ml-2 mb-1">Street</label>
                          <input type="text" id="street" className="primary-input" value={street} onChange={(e) => setStreet(e.target.value)} />
                        </div>
                        <div className="flex flex-col w-1/4 pl-7">
                          <label htmlFor="number" className="font-inter text-xs ml-2 mb-1">Number</label>
                          <input type="number" id="number" className="primary-input" value={number} onChange={(e) => setNumber(e.target.value)} />
                        </div>
                      </div>
                      <div className="flex mt-7">
                        <div className="flex flex-col w-1/5">
                          <label htmlFor="zip-code" className="font-inter text-xs ml-2 mb-1">Zip code</label>
                          <input type="text" id="zip-code" className="primary-input" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                        </div>
                        <div className="flex flex-col w-2/5 px-7">
                          <label htmlFor="state" className="font-inter text-xs ml-2 mb-1">State</label>
                          <input type="text" id="state" className="primary-input" value={state} onChange={(e) => setState(e.target.value)} />
                        </div>
                        <div className="flex flex-col  w-2/5">
                          <label htmlFor="city" className="font-inter text-xs ml-2 mb-1">City</label>
                          <input type="text" id="city" className="primary-input" value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>
                      </div>
                    </motion.section>
                  )}
                </AnimatePresence>
              </motion.div>

            </div>
            <div className="flex justify-between">
              <div className="secondary-btn" onClick={reset}>Start over</div>
              <div className={`primary-btn ${!validForm() && 'disabled-btn'}`} onClick={generateInvoice}>Generate invoice</div>
            </div>
          </div>
          <Summary configs={configs} checkout={true}/>
        </div>
      </motion.div>
      <AnimatePresence>
        {codeModal && 
          <motion.div className="flex items-center justify-center bg-opacity-50 h-screen w-screen fixed left-0 top-0 bottom-0 z-40" 
            animate={{background: '#00000080'}} 
            initial={{background: '#00000000'}} 
            exit={{background: '#00000000'}}
          >
            <motion.div className="flex absolute flex-col justify-between h-[220px] w-[375px] z-50 bg-[#1C1C1C] rounded-[10px] p-4 overflow-hidden shadow-md" 
              animate={{height: '220px', width: '375px', opacity: 1}} 
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
