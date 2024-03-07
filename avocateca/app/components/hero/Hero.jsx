"use client";
import Image from "next/image";
import cover from "/public/cover.png";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="w-full h-screen relative flex justify-start items-center flex-col bg-light-background-color overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, type: 'tween' }}
      id="home"
    >
      <div className="w-full h-[80vh] absolute z-[0]">
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
        />
      </div>

      <div className="flex justify-start items-start w-full flex-col p-20 z-[1] gap-60">
        <div className="flex justify-start items-start gap-5 flex-col">

          <div className="flex md:justify-start md:items-start justify-center items-center flex-col gap-7">
            <h1 className="text-text-color text-center md:text-left font-martel md:text-[62px] tracking-[0.2px] leading-[65px] text-[42px] font-black">
              Navigarea complexității
              <br /> juridice cu Avocateca
            </h1>
            <h2 className="font-sans text-[21px] text-black font-medium md:text-[20px] leading-[30px] tracking-[0.2px] md:text-second-text-color text-center md:text-left">
              Unde se întâlnește integritatea cu advocacy.
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
        <div>ROW 2</div>
      </div>
    </motion.div>
  );
};

export default Hero;