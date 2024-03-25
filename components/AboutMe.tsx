import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";

const AboutMe = () => {
  return (
    <div className="mt-[-4rem] bg-black pb-[3rem]">
      <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
        <div>
          <p className="heading__mini">Sobre Mí</p>
          <h1 className="heading__primary">
            Soluciones <span className="text-yellow-400">profesionales</span>{" "}
            para tu negocio
          </h1>
          <p className="text-[15px] mt-[1.3rem] text-white opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            aliquid ad dignissimos mollitia assumenda eveniet, ducimus expedita
            odit, itaque sint molestias autem iste corrupti porro odio voluptas
            exercitationem non reprehenderit
          </p>
          <div className="mt-[2rem] space-y-3">
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white opacity-75">
                Desarrollo Frontend
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white opacity-75">
                Desarrollo Backend
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white opacity-75">
                Desarrollo Api
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white opacity-75">
                Desarrollo Base de Datos
              </p>
            </div>
          </div>
        </div>
        <div className="lg:ml-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]">
            <div className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold">2</p>
              <p className="text-[20px] text-black font-600">
                Años Experiencia
              </p>
            </div>
            <div className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold">3</p>
              <p className="text-[20px] text-black font-600">
                Proyectos Reales
              </p>
            </div>
            <div className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold">5+</p>
              <p className="text-[20px] text-black font-600">
                Clientes Satisfechos
              </p>
            </div>
            <div className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold">10+</p>
              <p className="text-[20px] text-black font-600">
                Proyectos Personales
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
