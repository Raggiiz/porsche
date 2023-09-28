import { motion } from 'framer-motion'
import React from 'react'

export const Loader = ({progress}: {progress: number}) => {
  return (
    <div className='flex flex-col absolute z-50 left-0 top-0 items-center justify-center h-full w-full bg-dark-primary'>
        <span className='font-space font-medium text-white'>{progress.toFixed(0)}%</span>
        <div className="w-44 mt-4">
            <motion.div className="h-[2px] bg-yellow-primary max-w-full" animate={{ width: progress + "%" }}></motion.div>
        </div>
    </div>
  )
}
