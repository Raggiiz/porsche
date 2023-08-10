import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

export const LoginModal = ({ loginModal, setLoginModal }: any) => {
  return (
    <AnimatePresence>
      {loginModal && (
        <>
          <motion.div
            className="h-screen bg-[#1C1C1C] absolute right-0 top-0 bottom-0 shadow-xl z-10 flex flex-col p-12"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "25vw", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{type: "spring",stiffness: 250,damping: 24}}
          >
            
          </motion.div>
          <motion.div
            className="absolute left-0 top-0 bottom-0 h-screen w-screen bg-black"
            animate={{ opacity: 0.5 }}
            initial={{ opacity: 0 }}
            exit={{opacity: 0}}
            onClick={() => setLoginModal(false)}
          />
        </>
      )}
    </AnimatePresence>
  )
}