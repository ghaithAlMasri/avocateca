import Image from "next/image";

const card = ({ text, color, classes, iconPath, textColor, subText, subTextColor, type =1 }) => {
  return (
    <div
      className={`flex justify-center items-center flex-col shadow-cards bg-${color} rounded-lg p-3 lg:p-[2.2rem] text-[12px] md:text-[16px] transition-all ease-in-out hover:scale-110 duration-500 hover:shadow-lg ${classes}`}
    >
      {
        type === 1 ? 
        <div className={"flex justify-center items-start w-[10rem] h-[10rem] 3xl:w-[25rem] 3xl:h-[25rem] flex-col gap-3"}>
            <Image src={iconPath} width={48} height={48} className="object-contain flex justify-center items-center md:w-10 md:h-10 3xl:w-[5rem] 3xl:h-[5rem]" alt="svgs" />
            <div className={`text-center font-martel text-[20px] font-bold 2xl:text-[30px] 3xl:text-[40px] text-${textColor} leading-[32px] tracking-[0.1px]`}>{text}</div>
            <div className={`text-center font-sans text-[14px] 2xl:text-[16px] 3xl:text-[24px] 3xl:leading-[24px] text-${subTextColor} leading-[20px] tracking-[0.1px] text-wrap max-w-[90%] md:text-sm`}>{subText}</div>
        </div> : type === 2 ? 
        
        <div className={"flex justify-center items-center md:w-[111px] md:h-[121px] w-[130px] h-[111px] 3xl:w-[15rem] 3xl:h-[15rem] flex-col gap-3"}>
            <Image src={iconPath} width={24} height={24} className="object-contain flex justify-center items-center md:w-10 md:h-10 3xl:w-[3rem] 3xl:h-[3rem]" alt="svgs" />
            <div className={`text-center font-martel text-[13px] font-bold 2xl:text-[20px] 3xl:text-[30px] text-${textColor} leading-[32px] tracking-[0.1px]`}>{text}</div>
            <div className={`text-center font-sans text-[12px] 2xl:text-[16px] text-${subTextColor} 3xl:text-[24px] 3xl:leading-[24px] leading-[20px] tracking-[0.1px] text-wrap max-w-[90%] md:text-sm`}>{subText}</div>
        </div> :

        <div className={"flex justify-center items-center flex-col h-60 3xl:h-80 gap-3 p-8"}>
          <div className={`text-center font-martel md:text-[15px] font-bold 2xl:text-[20px] 3xl:text-[30px] text-${textColor} leading-[32px] tracking-[0.1px]`}>{text}</div>
          <Image src={iconPath} width={120000} height={120000} className="object-contain flex justify-center items-center w-[90%] 3xl:w-[40%]" alt="svgs" />
        </div>
      }
    </div>
  );
};

export default card;
