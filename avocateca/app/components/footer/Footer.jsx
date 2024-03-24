"use client"
import {motion} from 'framer-motion'

const contact = () => {
  return (
    <motion.div
    className="flex justify-center items-center flex-col relative py-20 p-8 bg-background-gradient-3 text-light-text-color"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    >
      Footer
    </motion.div>
  )
}

export default contact
