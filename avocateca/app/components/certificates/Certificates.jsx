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
            <Image width={145} height={145} className='object-contain md:w-auto md:h-auto w-30 h-30' src={cert1}/>
            <Image width={150} height={150} className='object-contain md:w-auto md:h-auto w-20 h-20' src={cert2}/>
        </div>

        <div 
        className='flex justify-center md:justify-around items-center w-[90%] h-fit rounded-sm p-8 flex-col md:flex-row gap-8' 
        style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(270deg, #295C7A -1.04%, #0072B5 100%)'}}>
            <h3 className='text-white font-martel font-bold text-center text-xl'>Experți profesioniști <br/>certificați la dispoziția dumneavoastră</h3>
            <a href='#contact' className='bg-primary-color border border-primary-color text-light-text-color font-martel font-normal text-sm leading-7 px-4 py-2 rounded-md transition-all hover:opacity-80 hover:scale-95 ease-in-out'> Contactați-ne </a>
        </div>
    </div>

    
    <div className='absolute bottom-0 left-0 bg-dark-background-color w-full h-24'/>  
    </motion.div>
  )
}

export default Certificates
