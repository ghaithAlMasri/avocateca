"use client";
import ContactCard from '@/app/components/general/ContactCard'

import { motion } from "framer-motion";

const contact = () => {
  return (
    <motion.div
      className="flex justify-center items-center flex-col relative pb-20 p-8 bg-light-background-color"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      id='contact'
    >

      <div className="flex justify-center items-center flex-col md:max-w-[50%] sm:max-w-[90%] text-wrap align-middle text-center gap-3 p-10">
        <h2 className="font-martel font-bold text-[30px] md:text-[40px] text-dark-background-color 2xl:text-[50px] 3xl:text-[60px]">
        Intrați în contact
        </h2>
        <p className="font-serif md:text-sm text-second-text-color 2xl:text-2xl 3xl:text-3xl">
          Obțineți o consultație gratuită astăzi!
        </p>
      </div>


      <div className="w-[95%] md:h-[490px] flex justify-center items-center gap-8 flex-col md:gap-0 md:flex-row">
        <ContactCard textTop = "Sunați-ne" color={'white'} height = {"90%"} logoPath={'/phone.svg'} link={"tel:+40723864444"} textBottom="Trimiteți o cerere"/>
        <ContactCard textTop = "Locația noastră" color={'dark-background-color'} height = {"full"} logoPath={'/maps.svg'} link={"https://maps.app.goo.gl/QxGZbCPG6Fi6NLCdA"} className="flex justify-center items-center" textBottom="Trimiteți o cerere"/>
        <ContactCard textTop = "Trimiteți-ne un e-mail" color={'white'} height = {"90%"} logoPath={'/mail.svg'} textBottom="Trimiteți o cerere" link={"mailto:manuela.florea@yahoo.com"}/>
      </div>

    </motion.div>
  );
};

export default contact;
