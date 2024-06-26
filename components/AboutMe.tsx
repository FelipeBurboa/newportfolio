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
          <p className="text-[15px] mt-[1.3rem] text-white opacity-75 text-justify">
            Como desarrollador, ofrezco soluciones integrales para mejorar tu
            negocio en línea. Desde el diseño frontend hasta el backend, mi
            enfoque abarca todos los aspectos del desarrollo web, incluyendo la
            creación de API y la gestión de bases de datos. Estoy comprometido a
            proporcionarte las herramientas necesarias para el éxito de tu
            proyecto.
          </p>
          <div
            data-aos="fade-right"
            data-aos-placement="top-center"
            data-aos-delay="200"
            className="mt-[2rem] space-y-3"
          >
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
            <div
              data-aos="fade-left"
              data-aos-placement="top-center"
              data-aos-delay="400"
              className="p-6 text-center bg-yellow-500"
            >
              <p className="text-[50px] text-black font-bold">2</p>
              <p className="text-[20px] text-black font-600">
                Años Experiencia
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-placement="top-center"
              data-aos-delay="500"
              className="p-6 text-center bg-yellow-500"
            >
              <p className="text-[50px] text-black font-bold">3</p>
              <p className="text-[20px] text-black font-600">
                Proyectos Reales
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-placement="top-center"
              data-aos-delay="600"
              className="p-6 text-center bg-yellow-500"
            >
              <p className="text-[50px] text-black font-bold">5+</p>
              <p className="text-[20px] text-black font-600">
                Clientes Satisfechos
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-placement="top-center"
              data-aos-delay="700"
              className="p-6 text-center bg-yellow-500"
            >
              <p className="text-[50px] text-black font-bold">10+</p>
              <p className="text-[20px] text-black font-600">
                Proyectos Propios
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
