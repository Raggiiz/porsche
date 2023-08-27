import { motion } from 'framer-motion'
import React from 'react'

export const Loader = ({progress}: {progress: number}) => {
  return (
    <div className='flex flex-col items-center justify-center h-full bg-[#161616]'>
        <span className='font-space font-medium text-white'>{progress.toFixed(0)}%</span>
        <div className="w-44 mt-4">
            <motion.div className="h-[2px] bg-[#E2B558] max-w-full" animate={{ width: progress + "%" }}></motion.div>
        </div>
    </div>
  )
}
