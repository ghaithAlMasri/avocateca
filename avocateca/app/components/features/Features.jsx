"use client"
import { motion } from 'framer-motion'
import Card from '@/app/components/general/Card.jsx'

const Features = () => {
  return (
    <motion.div 
      className='flex justify-center items-center flex-col p-8 bg-light-background-color'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1}}
    >
      <div className='flex justify-center items-center flex-col md:max-w-[50%] sm:max-w-[90%] text-wrap align-middle text-center gap-3 p-10'>
        <h2 className='font-martel font-bold text-[30px] md:text-[40px] text-dark-background-color 2xl:text-[50px] 3xl:text-[60px]'>ne place să lăsăm cifrele să <span className='text-primary-color'>vorbească</span></h2>
        <p className='font-serif md:text-sm text-second-text-color 2xl:text-2xl 3xl:text-3xl'>Cu un palmares dovedit de nenumărate victorii juridice, suntem echipa în care puteți avea încredere. Explorați statisticile noastre impresionante și vedeți de ce ne aleg clienții pentru rezultate de neegalat. Când succesul contează, alegeti-ne pe noi</p>
      </div>

      <motion.div
        className="flex justify-center items-center text-center w-full gap-10 text-wrap flex-wrap"
        initial = {{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
      >
        <motion.div
          initial = {{scale: 0}}
          whileInView={{scale: 1, transition: {delay: 0.1, type:"spring", duration:1.4}}}
        >
          <Card text={"+1000"} iconPath={"/icon1-gold.svg"} color="light-background-color" textColor={"text-color"} subText={"Încredere în clienți"} subTextColor={"second-text-color"} type={2}/>
        </motion.div>

        <motion.div
          initial = {{scale: 0}}
          whileInView={{scale: 1, transition: {delay: 0.2, type:"spring", duration:1.4}}}
        >
          <Card text={"+780 000 €"} iconPath={"/icon2-gold.svg"} color="light-background-color" textColor={"text-color"} subText={"Recuperați pentru clienți"} subTextColor={"second-text-color"} type={2}/>
        </motion.div>

        <motion.div
          initial = {{scale: 0}}
          whileInView={{scale: 1, transition: {delay: 0.3, type:"spring", duration:1.4}}}

        >
          <Card text={"90%"} iconPath={"/icon3-gold.svg"} color="light-background-color" textColor={"text-color"} subText={"Dosare castigate"} subTextColor={"second-text-color"} type={2}/>
        </motion.div>

        <motion.div
          initial = {{scale: 0}}
          whileInView={{scale: 1, transition: {delay: 0.4, type:"spring", duration:1.4}}}

        >
          <Card text={"+70"} iconPath={"/icon4-gold.svg"} color="light-background-color" textColor={"text-color"} subText={"Asociații înființate"} subTextColor={"second-text-color"} type={2}/>
        </motion.div>
      </motion.div>

    </motion.div>
  )
}

export default Features
