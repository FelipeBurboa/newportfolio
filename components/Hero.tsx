import React from "react";
import TypeWriterEffect from "./Helper/TypeWriterEffect";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] custom-bg">
      <div className="flex justify-center flex-col w-[80%] h-[100%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center">
          <div className="">
            <h1 data-aos="fade-right" className="text-[#c4cfde] mb-[1.3rem]">
              BIENVENIDO A MI PORTAFOLIO
            </h1>
            <div data-aos="fade-right" data-aos-delay="400">
              <h1 className="xl:text-[50px] lg:text-[40px] md:text-[35px] text-[25px] font-semibold leading-[2.6rem] text-white">
                Hola, soy <span className="text-yellow-300">Felipe</span>
              </h1>
              <TypeWriterEffect />
            </div>
            <p
              className="mt-[1.2rem] text-[15px] md:text-[17px] text-[#c4cfde] text-justify"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Aquí encontrarás un vistazo a mi trabajo y mi pasión por la
              tecnología. ¿Estás listo para explorar juntos cómo podemos hacer
              brillar tus proyectos? ¡Adelante, déjame mostrarte lo que puedo
              hacer por ti!"
            </p>
            <div className="mt-[2rem] flex items-center space-x-6">
              <button
                onClick={() => window.open("/files/CVFelipeBurboa.pdf")}
                data-aos="zoom-out"
                data-aos-delay="1600"
                className="before:ease-out relative h-12 w-40 overflow-hidden bg-orange-600 text-white font-semibold shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-green-700 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 rounded-md"
              >
                <span className="relative z-10">Descarga CV</span>
              </button>
              <Image
                src="/images/github.svg"
                alt="github"
                width={45}
                height={45}
                data-aos="zoom-out"
                data-aos-delay="1600"
                className="object-cover mx-auto cursor-pointer opacity-80"
                onClick={() => window.open("https://github.com/FelipeBurboa")}
              />
              <Image
                src="/images/linkedin.svg"
                alt="github"
                width={47}
                height={47}
                data-aos="zoom-out"
                data-aos-delay="1600"
                className="object-cover mx-auto cursor-pointer opacity-80"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/felipe-burboa/")
                }
              />
            </div>
          </div>
          <div
            className="hidden md:block"
            data-aos="fade-left"
            data-aos-delay="2000"
          >
            <Image
              src="/images/hero.png"
              alt="hero"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
