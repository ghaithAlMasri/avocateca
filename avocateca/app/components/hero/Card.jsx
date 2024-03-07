import Image from "next/image";

const card = ({ text, color, classes, iconPath, textColor }) => {
  return (
    <div
      className={`flex justify-center items-center flex-col shadow-cards bg-${color} rounded-lg p-20 lg:p-[5.5rem] text-[12px] md:text-[16px] transition-all ease-in-out hover:scale-110 duration-500 hover:shadow-lg ${classes}`}
    >
        <div className="flex justify-center items-start w-full flex-col gap-3">
            <Image src={iconPath} width={48} height={48} className="object-contain flex justify-center items-center" />
            <div className={`text-center font-martel text-[20px] 2xl:text-[30px] text-${textColor} leading-[32px] tracking-[0.1px]`}>{text}</div>
        </div>
    </div>
  );
};

export default card;
