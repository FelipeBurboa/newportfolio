import {
  CircleStackIcon,
  CodeBracketIcon,
  CommandLineIcon,
  ClipboardDocumentCheckIcon,
  ComputerDesktopIcon,
  PaintBrushIcon,
} from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  title: string;
  num: string;
}

const iconMapping = {
  "01": CodeBracketIcon,
  "02": ComputerDesktopIcon,
  "03": CommandLineIcon,
  "04": CircleStackIcon,
  "05": PaintBrushIcon,
  "06": ClipboardDocumentCheckIcon,
};

const ServiceCard = ({ title, num }: Props) => {
  const IconComponent =
    (iconMapping as Record<string, React.ElementType>)[num] || CommandLineIcon;

  return (
    <div className="bg-black custom__service z-[100] relative transform rounded-2xl text-center p-6 shadow-md">
      <IconComponent className="w-[5rem] relative z-[1] mx-auto h-[5rem] text-yellow-400" />
      <h1 className="text-[25px] relative z-[1] text-white mt-[1rem]">
        {title}
      </h1>
      <p className="text-white text-[15px] opacity-60 mt-[0.8rem]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
        delectus sunt, ex placeat voluptates quasi molestias quam atque qui
        officia ratione.
      </p>
      <p className="text-white text-[1.6rem] font-bold absolute top-3 right-4">
        {num}
      </p>
    </div>
  );
};

export default ServiceCard;
