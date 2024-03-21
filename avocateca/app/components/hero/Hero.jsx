"use client";
import Image from "next/image";
import cover from "/public/cover2.jpg";
import Card from '@/app/components/general/Card.jsx'

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="w-full relative flex justify-start items-center flex-col bg-background-gradient-2 scroll-smooth overflow-y-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, type: 'tween' }}
      id="home"
    >

    <div className="absolute top-0 left-0 w-full h-full object-cover z-10 opacity-40 bg-black"/>
<div className="w-full h-[80vh] absolute top-0 left-0">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover contrast-[0.7] opacity-90 rounded-2xl shadow-2xl"
          src={cover}
          width={1000}
          height={1000}
          alt="cover image"
          priority
        />
  </div>

      <div className="flex justify-center items-center md:justify-start md:items-start w-full flex-col p-20 gap-[120px] 2xl:gap-[600px] z-20">
        <div className="flex md:justify-start justify-center items-center md:items-start gap-5 flex-col">

          <div className="flex md:justify-start md:items-start justify-center items-center flex-col 3xl:gap-[7rem] gap-7">
            <h1 className="text-primary-color text-center md:text-left font-martel md:text-[62px] 3xl:text-[120px] 3xl:leading-[120px] tracking-[0.2px] leading-[65px] text-[42px] font-black">
              Fiecare caz este o poveste. 
              <br />
              Avocateca este autorul <br /> succesului tău!
            </h1>
            <h2 className="font-sans text-[21px] text-light-text-color font-medium md:text-[20px] 3xl:text-[40px] 3xl:leading-[40px] leading-[30px] tracking-[0.2px] md:text-light-text-color text-center md:text-left">
                Unde drepturile sunt amenințate, <br/> Avocateca se ridică și apărarea învinge!
            </h2>
          </div>

          <div className="flex justify-center w-full items-center gap-5 3xl:gap-[5rem] md:gap-20 flex-col md:flex-row md:justify-start md:items-start">
            <a
              href="#contact"
              className={`text-center py-[5px] px-[28px] w-[153px] height-[36px] md:py-[10px] md:px-[36px] md:w-[182px] md:height-[48px] rounded-[37px] bg-secondary-color-2 text-white shadow-xl transition-all duration-500 ease-in-out border border-secondary-color-2 hover:bg-secondary-color-3 hover:text-white hover:shadow-none hover:border-secondary-color-3 hover:opacity-[0.98] 3xl:w-[303px] 3xl:h-[72.14px] 3xl:text-[30px]`}
            >
              Contactați-ne
            </a>

            <a
              href="#services"
              className="text-center py-[5px] px-[28px] w-[153px] height-[36px] md:py-[10px] md:px-[36px] md:w-[182px] md:height-[48px] rounded-[37px] bg-secondary-color-3 md:hover:text-secondary-color-3 text-white border-secondary-color-3 md:bg-transparent md:text-white shadow-xl transition-all duration-500 ease-in-out border md:border-white md:hover:bg-secondary-color-3 hover:text-secondary-color-3 hover:bg-transparent hover:shadow-none hover:border-secondary-color-3 hover:opacity-[0.98] md:hover:bg-transparent 3xl:w-[303px] 3xl:h-[72.14px] 3xl:text-[30px]"
            >
              Servicii
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center text-center w-full gap-10 text-wrap flex-wrap">
          <Card text={"Drept Penal"} iconPath={"/icon1.svg"} color="light-background-color" textColor={"text-color"} subText={"Apărare solidă pentru acuzații variate."} subTextColor={"second-text-color"} type={1}/>
          <Card text={"Dreptul Familiei"} iconPath={"/icon2.svg"} color="light-background-color" textColor={"text-color"} subText={"Rezolvarea cu compasiune a litigiilor."} subTextColor={"second-text-color"} type={1}/>
          <Card text={"Drept Comercial"} iconPath={"/icon3.svg"} color="none" classes="bg-secondary-color-4" textColor={"white"} subText={"Soluții personalizate pentru provocări de afaceri."} subTextColor={"white"} type={1}/>
        </div>
      </div>





    </motion.div>
  );
};

export default Hero;
