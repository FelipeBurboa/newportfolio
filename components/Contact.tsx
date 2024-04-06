import React from "react";

const Contact = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
        <div>
          <p className="heading__mini">Contáctame</p>
          <h1 className="heading__primary">
            Construyamos algo <span className="text-yellow-400">Genial</span>{" "}
            juntos
          </h1>
          <p className="text-[15px] text-white mt-[1rem] opacity-75 text-justify">
            Estoy aquí para convertir tus ideas en realidad. Si buscas llevar tu
            proyecto al siguiente nivel, contáctame y trabajemos juntos para
            hacerlo posible. ¡Espero con ansias poder colaborar contigo y crear
            algo extraordinario!
          </p>
          <h1 className="mt-[2rem] mb-[2rem] text-[30px] text-yellow-400 font-bold underline">
            +56 9 86057802
          </h1>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
            <input
              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
              type="text"
              placeholder="Nombre"
            />
            <input
              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            type="text"
            placeholder="Asunto"
            className="py-[0.7rem] outline-none text-white w-full bg-gray-800 rounded-md px-4 mt-[1.5rem]"
          />
          <textarea
            placeholder="Mensaje"
            rows={4}
            className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4 mt-[1.5rem]"
          ></textarea>
          <button className="py-[0.7rem] outline-none text-white w-full bg-blue-700 hover:bg-blue-800 rounded-md px-4 mb-[1.5rem]">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
