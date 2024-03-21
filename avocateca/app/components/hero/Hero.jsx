"use client";
import Image from "next/image";
import cover from "/public/cover.png";
import Card from '@/app/components/general/Card.jsx'

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="w-full relative flex justify-start items-center flex-col bg-white scroll-smooth"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, type: 'tween' }}
      id="home"
    >
      <div className="w-full h-[80vh] absolute">
        <div
          className="absolute top-0 left-0 w-full h-full bg-black opacity-15"
          style={{
            background:
              "radial-gradient(circle, #FFFFFF, #FBFBFB, #FAFAFA, #000000, #FAFAFA)",
          }}
        ></div>
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover contrast-[0.7] opacity-90"
          src={cover}
          width={1000}
          height={1000}
          alt="cover image"
          priority
        />
      </div>

      <div className="flex justify-center items-center md:justify-start md:items-start w-full flex-col p-20 z-[1] gap-[120px] 2xl:gap-[400px]">
        <div className="flex md:justify-start justify-center items-center md:items-start gap-5 flex-col">

          <div className="flex md:justify-start md:items-start justify-center items-center flex-col gap-7">
            <h1 className="text-text-color text-center md:text-left font-martel md:text-[62px] tracking-[0.2px] leading-[65px] text-[42px] font-black">
              Fiecare caz este o poveste. 
              <br />
              Avocateca este autorul <br /> succesului tău!
            </h1>
            <h2 className="font-sans text-[21px] text-black font-medium md:text-[20px] leading-[30px] tracking-[0.2px] md:text-second-text-color text-center md:text-left">
                Unde drepturile sunt amenințate, <br/> Avocateca se ridică și apărarea învinge!
            </h2>
          </div>

          <div className="flex justify-center w-full items-center gap-5 md:gap-20 flex-col md:flex-row md:justify-start md:items-start">
            <a
              href="#contact"
              className={`text-center py-[5px] px-[28px] w-[153px] height-[36px] md:py-[10px] md:px-[36px] md:w-[182px] md:height-[48px] rounded-[37px] bg-secondary-color-2 text-white shadow-xl transition-all duration-500 ease-in-out border border-secondary-color-2 hover:bg-secondary-color-3 hover:text-white hover:shadow-none hover:border-secondary-color-3 hover:opacity-[0.98]`}
            >
              Contactați-ne
            </a>

            <a
              href="#services"
              className="text-center py-[5px] px-[28px] w-[153px] height-[36px] md:py-[10px] md:px-[36px] md:w-[182px] md:height-[48px] rounded-[37px] bg-secondary-color-3 md:hover:text-secondary-color-3 text-white border-secondary-color-3 md:bg-transparent md:text-secondary-color-2 shadow-xl transition-all duration-500 ease-in-out border md:border-secondary-color-2 md:hover:bg-secondary-color-3 hover:text-secondary-color-3 hover:bg-transparent hover:shadow-none hover:border-secondary-color-3 hover:opacity-[0.98] md:hover:bg-transparent"
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
