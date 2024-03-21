"use client"

import {motion} from 'framer-motion'

const Features = () => {
  return (
    <motion.div 
    className='flex justify-center items-center flex-col p-8 bg-light-background-color'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    >
      FEATURES
    </motion.div>
  )
}

export default Features
