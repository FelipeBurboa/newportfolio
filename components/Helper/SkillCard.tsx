import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  image: string;
}

const SkillCard = ({ title, image }: Props) => {
  return (
    <div className="p-6 hover:bg-red-700 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900 min-h-[170px]">
      <Image
        src={`${image}`}
        width={80}
        height={80}
        alt={title}
        className="object-cover mx-auto"
      />
      <h1 className="text-[18px] mt-[1rem] text-white font-[600] align-bottom">
        {title}
      </h1>
    </div>
  );
};

export default SkillCard;
