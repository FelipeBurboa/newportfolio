import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[3rem] pb-[1.4rem] bg-black">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40">
        <div>
          <div className="font-logo text-white text-[18px]">
            <span className="text-[30px] md:text-[40px] text-yellow-400">
              F
            </span>
            elipe{" "}
            <span className="text-[30px] md:text-[40px] text-yellow-400">
              B
            </span>
            urboa
          </div>
          <h1 className="text-[14px] mt-[0.5rem] text-white opacity-70 text-justify">
            ¡Gracias por explorar mi portafolio!. Si estás listo para convertir
            tus proyectos en realidad, no dudes en contactarme. Recuerda, estoy
            aquí para ayudarte a alcanzar tus metas tecnológicas. ¡Espero con
            ansias colaborar contigo en el futuro cercano! ¡Hasta pronto!.
          </h1>
          <p className="mt-[1.3rem] text-yellow-400 underline font-semibold">
            felipeburboa1991@gmail.com
          </p>
        </div>

        <div className="lg:mx-auto mt-4">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Dirección
          </h1>
          <div className="flex items-center mt-[1rem] space-x-2">
            <MapIcon className="w-[1rem] h-[1rem] text-yellow-400" />
            <p className="text-[17px] font-normal text-white opacity-75">
              Antofagasta, Chile
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <EnvelopeIcon className="w-[1rem] h-[1rem] text-yellow-400" />
            <p className="text-[17px] font-normal text-white opacity-75">
              felipeburboa1991@gmail.com
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <PhoneIcon className="w-[1rem] h-[1rem] text-yellow-400" />
            <p className="text-[17px] font-normal text-white opacity-75">
              +56 9 86057802
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto mt-[1.4rem] text-white opacity-70">
        &#169; {new Date().getFullYear()} Felipe Burboa
      </div>
    </div>
  );
};

export default Footer;
