import Image from "next/image";

const ContactCard = ({ logoPath, textTop, textBottom, color, height,link }) => {
  const textColor = color === "white" ? "text-color" : "white";
  const isMap = !(link.startsWith("tel:") || link.startsWith("mailto:"));
  const heightDeterminator = height === "full" ? "100%" : "90%"
  return (
    <div
      className={`flex justify-center items-center gap-8 p-20 flex-col w-full h-fit rounded-lg shadow-lg bg-${color} text-${textColor} transition-all ease-in-out hover:scale-[1.01] duration-500`}
      style={{height:heightDeterminator}}

    >
      <Image src={logoPath} width={75} height={75} className="w-auto h-auto" alt="contact svg"/>
      <h5 className="font-bold text-lg text-center align-middle w-full">{textTop}</h5>
      {isMap ? 
        <a href={link} className="px-[10px] py-[10px] bg-transparent border border-primary-color rounded-md text-primary-color font-bold transition-all ease-in-out duration-300 hover:bg-primary-color hover:text-white hover:opacity-95 hover:scale-110" target="_blank">{textBottom}</a> :
        <a href={link} className="px-[10px] py-[10px] bg-transparent border border-primary-color rounded-md text-primary-color font-bold transition-all ease-in-out duration-300 hover:bg-primary-color hover:text-white hover:opacity-95 hover:scale-110">{textBottom}</a>  
    }
    </div>
  );
};

export default ContactCard;
