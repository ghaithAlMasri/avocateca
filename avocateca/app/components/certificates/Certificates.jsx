"use client"
import Image from 'next/image'
import cert1 from "/public/cert1.png";
import cert2 from "/public/cert2.png";


import {motion} from 'framer-motion'

const Certificates = () => {
  return (
    <motion.div 
    className="flex justify-center items-center flex-col relative pb-20 p-8 h-fit md:h-96 bg-light-background-color md:gap-8 gap-0 border"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    >
      
    <div className='flex justify-center items-center w-full p-8 flex-col gap-4 z-10'>

        <div className='flex justify-around items-center w-full flex-col md:flex-row z-10'>
            <Image width={145} height={145} className='object-contain md:w-auto md:h-auto 3xl:w-50 3xl:h-50' src={cert1}/>
            <Image width={150} height={150} className='object-contain md:w-auto md:h-auto w-20 h-20 3xl:w-50 3xl:h-50' src={cert2}/>
        </div>

        <div 
        className='flex justify-center md:justify-around items-center w-[90%] h-fit rounded-sm p-8 flex-col md:flex-row gap-8 bg-background-gradient-3' 
        >
            <h3 className='text-white font-martel font-bold text-center text-xl w-full md:w-[45%] 3xl:text-2xl'>Experți profesioniști certificați la dispoziția dumneavoastră</h3>
            <a href='#contact' className='bg-primary-color border border-primary-color text-light-text-color font-martel font-normal text-sm leading-7 px-4 py-2 rounded-md transition-all hover:opacity-80 duration-300 hover:scale-95 ease-in-out 3xl:text-2xl'> Contactați-ne </a>
        </div>
    </div>

    
    <div className='absolute bottom-0 left-0 bg-dark-background-color w-full h-24 rounded-none'/>  
    </motion.div>
  )
}

export default Certificates
