import React from "react";
import Image from "next/image";
import { GlobeAltIcon } from "@heroicons/react/16/solid";

interface Props {
  text: string;
  title: string;
  tech1: string;
  tech2: string;
  tech3: string;
  tech4: string;
  image: string;
  link?: string;
  github?: string;
}

const ProjectCard = ({
  text,
  title,
  tech1,
  tech2,
  tech3,
  tech4,
  image,
  link,
  github,
}: Props) => {
  return (
    <div className="grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="p-4 rounded-xl relative cursor-pointer hover:rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md">
        <Image
          src={`${image}`}
          width={500}
          height={500}
          alt={title}
          className="object-cover rounded-xl mx-auto shadow-md"
        />
      </div>
      <div>
        <div className="flex items-center gap-x-3">
          <h1 className="text-[25px] text-white">{title}</h1>
          <GlobeAltIcon
            className="w-[32px] h-[32px] opacity-80 cursor-pointer text-white"
            onClick={() => window.open(`${link}`)}
          />
          {github && (
            <Image
              src="/images/github.svg"
              width={30}
              height={30}
              alt="github"
              className="opacity-80 cursor-pointer"
              onClick={() => window.open(`${github}`)}
            />
          )}
        </div>
        <p className="text-white opacity-65 text-[15px] mt-[1rem] text-justify">
          {text}
        </p>
        <div className="mt-[1.3rem] grid-cols-2 grid sm:grid-cols-3 xl:grid-cols-4 gap-[2rem]">
          <h1 className="px-6 py-3 bg-blue-700 text-white rounded-lg text-center">
            {tech1}
          </h1>
          <h1 className="px-6 py-3 bg-white text-black rounded-lg text-center">
            {tech2}
          </h1>
          <h1 className="px-2 py-3 bg-sky-500 text-black rounded-lg text-center">
            {tech3}
          </h1>
          <h1 className="px-6 py-3 bg-blue-500 text-white rounded-lg text-center">
            {tech4}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
