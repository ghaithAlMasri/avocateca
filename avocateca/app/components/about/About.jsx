"use client"
import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.div
    className='flex justify-center items-center flex-col pb-20 p-8 bg-white gap-8 overflow-hidden'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1}}
    id='about'
    >
      <div className='flex justify-center items-center flex-col md:max-w-[50%] sm:max-w-[90%] text-wrap align-middle text-center gap-3 p-10'>
        <h2 className='font-martel font-bold text-[30px] md:text-[40px] text-dark-background-color 2xl:text-[50px] 3xl:text-[60px]'>Cine suntem noi?</h2>
        <p className='font-serif md:text-sm text-second-text-color 2xl:text-2xl 3xl:text-3xl'>Suntem o forță juridică de top, excelând în diverse specialități, cum ar fi frauda, cauțiunea, infracțiunile federale de droguri și traficul de droguri, oferind rezultate de neegalat cu o pasiune pentru justiție.</p>
      </div>

    </motion.div>
  )
}

export default About
