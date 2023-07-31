import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import ArrowDown from "../../assets/icons/arrow-down.svg";
import { Summary } from "../shared/summary/Summary";
import { CarConfigs, Item } from "../configurator/interfaces";
import { brakeColorOptions, leatherOptions, primaryColorOptions, secondaryColorOptions, wheelOptions } from "../configurator/carConfigs";

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
  const [codeError, setCodeError] = useState(false)

  const reset = () => {
    setCodeModal(true);
    setCode('');
    setCodeError(false);
    setPrimaryColor(primaryColorOptions.silver);
    setSecondaryColor(secondaryColorOptions.carbon);
    setLeatherColor(leatherOptions.lightLeather);
    setWheel(wheelOptions.original);
    setBrakeColor(brakeColorOptions.black)
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
                        },
                        collapsed: { opacity: 0, height: 0, marginTop: "0" },
                      }}
                      transition={{ type: "spring", stiffness: 150, damping: 15 }}
                    >
                      inputs
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
                        },
                        collapsed: { opacity: 0, height: 0, marginTop: "0" },
                      }}
                      transition={{ type: "spring", stiffness: 150, damping: 15 }}
                    >
                      inputs
                    </motion.section>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                className="flex flex-col py-3 px-8 bg-[#161616] rounded-[10px] text-white cursor-pointer mb-5"
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 100 },
                }}
                onClick={() => setExpanded(2)}
              >
                <div className="flex items-center justify-between font-inter text-base uppercase">
                  delivery options
                  <motion.div
                    className="expand"
                    initial="collapsed"
                    animate={expanded === 2 ? "open" : "collapsed"}
                    variants={{
                      open: { rotateZ: "180deg" },
                      collapsed: { rotateZ: "0deg" },
                    }}
                  >
                    <ArrowDown />
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {expanded === 2 && (
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
                        },
                        collapsed: { opacity: 0, height: 0, marginTop: "0" },
                      }}
                      transition={{ type: "spring", stiffness: 150, damping: 15 }}
                    >
                      inputs
                    </motion.section>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
            <div className="flex justify-between">
              <div className="secondary-btn" onClick={reset}>Start over</div>
              <div className="primary-btn">Generate invoice</div>
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
              <input type="text" value={code} onChange={(e) => setCode(e.target.value)} className={`bg-[#212121] rounded-[10px] outline-none text-white font-montserrat py-3 px-4 ${codeError ? 'border-[#E95652]' : 'border-transparent'} border`} />
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
