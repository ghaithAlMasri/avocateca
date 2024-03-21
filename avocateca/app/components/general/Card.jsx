import Image from "next/image";

const card = ({ text, color, classes, iconPath, textColor, subText, subTextColor }) => {
  return (
    <div
      className={`flex justify-center items-center flex-col shadow-cards bg-${color} rounded-lg p-3 lg:p-[2.2rem] text-[12px] md:text-[16px] transition-all ease-in-out hover:scale-110 duration-500 hover:shadow-lg ${classes} max-w-[300px]`}
    >
        <div className="flex justify-center items-start w-full max-w-40 max-h-30 flex-col gap-3">
            <Image src={iconPath} width={48} height={48} className="object-contain flex justify-center items-center md:w-10 md:h-10" alt="svgs" />
            <div className={`text-center font-martel text-[20px] font-bold 2xl:text-[30px] text-${textColor} leading-[32px] tracking-[0.1px]`}>{text}</div>
            <div className={`text-center font-sans text-[14px] 2xl:text-[16px] text-${subTextColor} leading-[20px] tracking-[0.1px] text-wrap max-w-[90%] md:text-sm`}>{subText}</div>
        </div>
    </div>
  );
};

export default card;