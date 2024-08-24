"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const contact = () => {
  return (
    <motion.div
      className="flex justify-center items-center flex-col relative py-20 bg-background-gradient-3 text-light-text-color gap-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-around items-center p-16 w-full h-full flex-wrap gap-5">
        <div className="flex justify-center items-center flex-wrap">
          <Image src={"/logo-white-transparent.png"} width={250} height={250} />
        </div>
        <div className="flex justify-center items-start flex-col gap-2">
          <h5 className="text-lg font-bold">Links</h5>
          <a
            href="#about"
            className="text-lg transition-all ease-in-out duration-150 hover:opacity-80"
          >
            Despre noi
          </a>
          <a
            href="#home"
            className="text-lg transition-all ease-in-out duration-150 hover:opacity-80"
          >
            Acasă
          </a>
          <a
            href="#contact"
            className="text-lg transition-all ease-in-out duration-150 hover:opacity-80"
          >
            Intrați în contact
          </a>
          <a
            href="#services"
            className="text-lg transition-all ease-in-out duration-150 hover:opacity-80"
          >
            Serviciile pe care le oferim
          </a>
        </div>
        <div className="flex justify-center items-start flex-wrap flex-col gap-2">
          <h5 className="text-lg font-bold">Socials</h5>

          <div className="flex justify-center items-start w-full flex-col gap-2">
            <div className="flex justify-center items-center gap-4">
              <a href="https://facebook.com" target="_blank" className="transition-all ease-in-out duration-150 hover:opacity-80">
                <FaFacebook className="w-9 h-9" />
              </a>
              <a href="https://wa.me/40723864444" target="_blank" className="transition-all ease-in-out duration-150 hover:opacity-80">
                <FaWhatsapp className="w-9 h-9" />
              </a>
            </div>
            <div className="flex justify-center items-center gap-4">
              <a href="tel:+40723864444" className="transition-all ease-in-out duration-150 hover:opacity-80">
                <FaPhone className="w-9 h-9" />
              </a>
              <a href="mailto:manuela.florea@yahoo.com" className="transition-all ease-in-out duration-150 hover:opacity-80">
                <MdOutlineEmail className="w-9 h-9" />
              </a>
            </div>

          </div>


        </div>
      </div>
      <div className="bg-white text-second-text-color w-full absolute bottom-0 left-0 text-center">
        @2024 AVOCATECA ALL RIGHTS RESERVED
      </div>
    </motion.div>
  );
};

export default contact;
