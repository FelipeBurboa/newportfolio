import React from "react";
import SkillCard from "./Helper/SkillCard";

const Skills = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
        <div
          className="col-span-3"
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
        >
          <p className="heading__mini">Mis habilidades</p>
          <h1 className="heading__primary">
            Vamos a explorar mis
            <span className="text-yellow-400"> Habilidades</span>
          </h1>
          <p className="text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem] text-justify">
            Con experiencia sólida en tecnologías como React, JavaScript,
            Node.js y PostgreSQL, estoy preparado para desarrollar soluciones
            web eficientes y modernas. Mi enfoque se centra en la creación de
            aplicaciones escalables y receptivas que satisfagan las necesidades
            del mercado actual.
          </p>
        </div>
        <div
          className="col-span-4"
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center">
            <div>
              <SkillCard title="React" image="/images/react.svg" />
            </div>
            <div>
              <SkillCard title="Tailwind" image="/images/tailwind.svg" />
            </div>
            <div>
              <SkillCard title="JavaScript" image="/images/js.svg" />
            </div>
            <div>
              <SkillCard title="HTML" image="/images/html.svg" />
            </div>
            <div>
              <SkillCard title="Node JS" image="/images/node.svg" />
            </div>
            <div>
              <SkillCard title="Express" image="/images/express.svg" />
            </div>
            <div>
              <SkillCard title="Docker" image="/images/docker.svg" />
            </div>
            <div>
              <SkillCard title="PostgreSQL" image="/images/postgresql.svg" />
            </div>
            <div className="hidden lg:block xl:hidden">
              <SkillCard title="TypeScript" image="/images/ts.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
