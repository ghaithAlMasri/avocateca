"use client";
import { motion } from "framer-motion";
import buroImage from "/public/legalOffice.jpg";
import Image from "next/image";

const About = () => {
  return (
    <motion.div
      className="flex justify-center items-center flex-col pb-20 p-8 bg-white md:gap-8 gap-0 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      id="about"
    >
      <div className="flex justify-center items-center flex-col md:max-w-[50%] sm:max-w-[90%] text-wrap align-middle text-center gap-3 p-10">
        <h2 className="font-martel font-bold text-[30px] md:text-[40px] text-dark-background-color 2xl:text-[50px] 3xl:text-[60px]">
            Cine <span className="text-primary-color">sunt</span>?
        </h2>
        <p className="font-serif md:text-sm text-second-text-color 2xl:text-2xl 3xl:text-3xl">
        Un avocat cu 10 ani experiență în drept, excelând în diverse specialități cum ar fi obținerea despăgubirilor pentru accidente rutiere, divorț, divorț cu copil, dreptul familiei, înființări de firme, si multe altele, oferind rezultate deosebite, cu un sens al corectitudinii de neegalat privind justiția. 
        </p>
      </div>

      <div className="flex justify-center items-center p-10 md:flex-row flex-col">
        <Image
          src={buroImage}
          alt={"buro image"}
          width={1000000}
          height={1000000}
          className=" w-1/2 rounded-3xl h-full hover:opacity-90 hover:scale-95 transition-all duration-[1000ms] ease-in-out shadow-2xl"
        />

        <div className="flex justify-center items-center flex-col">

          <div className="flex md:justify-start md:items-start items-center justify-center flex-col max-w-[80%] md:text-start text-center text-wrap align-middle gap-3 p-5">
            <h2 className="font-martel font-bold text-[30px] md:text-[40px] text-dark-background-color 2xl:text-[50px] 3xl:text-[60px]">
              Cea mai de<br/> încredere în
            </h2>
            <p className="font-serif md:text-sm text-second-text-color 2xl:text-2xl 3xl:text-3xl">
              Expertiza noastră de neegalat, dedicarea noastră de nezdruncinat
              pentru succesul clienților și un palmares de rezultate
              excepționale ne fac să fim cel mai de încredere nume din domeniul
              nostru.
            </p>
          </div>

          <div className="flex md:justify-start md:items-start items-center justify-center gap-5 w-full text-start p-5 max-w-[80%]">
            <Image src={"/about1.svg"} width={40} height={40}/>

            <div className="flex justify-start items-start flex-col overflow-hidden">
              <h5 className="font-bold text-lg text-text-color text-start">Te scoatem din necazuri</h5>
              <h4 className="text-start text-second-text-color text-sm">Rapid cu profesioniști cu experiență...</h4>
            </div>

          </div>

          <div className="flex md:justify-start md:items-start justify-center items-center gap-5 w-full text-start p-5 max-w-[80%] overflow-hidden">
            <Image src={"/about2.svg"} width={40} height={40}/>

            <div className="flex justify-start items-start flex-col">
              <h5 className="font-bold text-lg text-text-color text-start">Vă ajutăm să vă recuperați banii</h5>
              <h4 className="text-start text-second-text-color text-sm">La fel de ușor ca "Bună ziua"</h4>
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default About;
