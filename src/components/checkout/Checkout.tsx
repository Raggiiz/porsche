import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import ArrowDown from "../../assets/icons/arrow-down.svg";

export const Checkout = () => {

  const [expanded, setExpanded] = useState(0);

  return (
    <motion.div
      className="flex flex-col bg-[#1c1c1c] text-white bg-topography w-full h-[calc(100vh-72px)] bg-no-repeat py-12 px-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-between">
        <h1 className="font-space font-medium text-3xl">{"--/--"} Checkout</h1>{" "}
        <span className="text-[#676767] font-space text-xl">{"--/--"}</span>
      </div>
      <div className="flex flex-col justify-between mt-11">
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
            <div className="flex items-center justify-between font-space text-base uppercase">
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
                    open: { opacity: 1, height: "auto", marginTop: "1.375rem" },
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
            transition={{delay: 0.2}}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            onClick={() => setExpanded(1)}
          >
            <div className="flex items-center justify-between font-space text-base uppercase">
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
                    open: { opacity: 1, height: "auto", marginTop: "1.375rem" },
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
            transition={{delay: 0.4}}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            onClick={() => setExpanded(2)}
          >
            <div className="flex items-center justify-between font-space text-base uppercase">
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
                    open: { opacity: 1, height: "auto", marginTop: "1.375rem" },
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
          <div className="secondary-btn">Generate invoice</div>
          <div className="primary-btn">Generate invoice</div>
        </div>
      </div>
    </motion.div>
  );
};
