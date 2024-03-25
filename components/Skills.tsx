import React from "react";

const Skills = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
        <div className="col-span-3">
          <p className="heading__mini">Mis habilidades</p>
          <h1 className="heading__primary">
            Vamos a explorar mis
            <span className="text-yellow-400"> habilidades</span> y experiencias
          </h1>
          <p className="text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            consequatur fuga! At distinctio est molestiae modi perspiciatis
            illo, corporis architecto aspernatur, repellendus quo maxime nemo
            tempora consectetur ab omnis eaque?
          </p>
          <button className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
            <span className="relative z-10">Aprende Más</span>
          </button>
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
