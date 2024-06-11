"use client"
import {animate, motion, spring} from 'framer-motion'
import Card from '@/app/components/general/Card.jsx'


const Services = () => {
  return (
    <motion.div
    className='flex justify-center items-center flex-col pb-20 p-8 bg-light-background-color gap-8 overflow-hidden'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1}}
    id='services'
    >
      <div className='flex justify-center items-center flex-col md:max-w-[50%] sm:max-w-[90%] text-wrap align-middle text-center gap-3 p-10'>
        <h2 className='font-martel font-bold text-[30px] md:text-[40px] text-dark-background-color 2xl:text-[50px] 3xl:text-[60px]'>Specialitatea noastră</h2>
        <p className='font-serif md:text-sm text-second-text-color 2xl:text-2xl 3xl:text-3xl'>Serviciile noastre includ și nu se limitează la</p>
      </div>



      <motion.div
        className="flex justify-center items-center text-center w-full gap-10 text-wrap flex-wrap"
        initial = {{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
      >
        <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView = {{ opacity:1, rotate: [-180, 0], scale: [0.5,1,1.2,1], transition: {type: "spring", stiffness: 80, damping: 10} }}

        >
          <Card text={"Fraudă sau induce în eroare"} iconPath={"/service1.jpg"} color="light-background-color" textColor={"text-color"} subText={"Deslușind complexitatea activităților frauduloase și a practicilor înșelătoare, suntem specializați în protejarea clienților de prejudicii financiare și de afectarea reputației prin intervenții juridice strategice și investigații amănunțite."} subTextColor={"second-text-color"} type={3}/>
        </motion.div>

        <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView = {{ opacity:1, rotate: [-180, 0], scale: [0.5,1,1.2,1], transition: {type: "spring", stiffness: 80, damping: 10, delay: 0.2} }}
        >
          <Card text={"Cauțiuni sau mandate"} iconPath={"/service2.jpg"} color="light-background-color" textColor={"text-color"} subText={"Oferind asistență rapidă în parcurgerea complexității cauțiunilor și a mandatelor de cauțiune, expertiza noastră asigură rezolvarea în timp util și liniștea sufletească a clienților care se confruntă cu provocări juridice, facilitând revenirea lor rapidă la normalitate."} subTextColor={"second-text-color"} type={3}/>
        </motion.div>

        <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView = {{ opacity:1, rotate: [-180, 0], scale: [0.5,1,1.2,1], transition: {type: "spring", stiffness: 80, damping: 10, delay: 0.4} }}

        >
          <Card text={"Infracțiuni federale privind drogurile"} iconPath={"/service3.jpg"} color="light-background-color" textColor={"text-color"} subText={"Cu o înțelegere profundă a legilor și reglementărilor federale, oferim strategii de apărare cuprinzătoare adaptate pentru a atenua consecințele grave ale acuzațiilor federale de droguri, protejând drepturile și viitorul clienților noștri."} subTextColor={"second-text-color"} type={3}/>
        </motion.div>

        <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView = {{ opacity:1, rotate: [-180, 0], scale: [0.5,1,1.2,1], transition: {type: "spring", stiffness: 80, damping: 10, delay: 0.6} }}

        >
          <Card text={"Infracțiuni legate de trafic"} iconPath={"/service3.jpg"} color="light-background-color" textColor={"text-color"} subText={"Combatting the serious implications of trafficking offenses, our specialized legal team employs a proactive approach to defense, crafting robust strategies to challenge allegations and protect the liberties of those accused."} subTextColor={"second-text-color"} type={3}/>
        </motion.div>
      </motion.div>


    </motion.div>
  )
}

export default Services
