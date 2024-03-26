import React from "react";
import ProjectCard from "./Helper/ProjectCard";

const Project = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="text-center">
        <p className="heading__mini">Trabajos Recientes</p>
        <h1 className="heading__primary">
          Mis Mejores <span className="text-yellow-400">Proyectos</span>
        </h1>
      </div>
      <div data-aos="fade-left" data-aos-anchor-placement="top-center">
        <ProjectCard
          title="Test Polarizaciones"
          tech1="React"
          tech2="Tailwind"
          tech3="Zustand"
          tech4="Axios"
          image="/images/3xi.png"
          link="https://laboratoriocivico.vercel.app/"
          github="https://github.com/dlab-team/c14-frontend"
        />
      </div>
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="top-center"
        data-aos-delay="200"
      >
        <ProjectCard
          title="Blog Surgencia"
          tech1="NodeJS"
          tech2="Express"
          tech3="PostgreSQL"
          tech4="Docker"
          image="/images/surgencia.png"
          link="https://surgenciaong.cl/"
        />
      </div>
      <div
        data-aos="fade-left"
        data-aos-anchor-placement="top-center"
        data-aos-delay="400"
      >
        <ProjectCard
          title="Red Cuidadores"
          tech1="NodeJS"
          tech2="Express"
          tech3="PostgreSQL"
          tech4="Firebase"
          image="/images/ronda.png"
          link="https://c16-frontend.vercel.app/"
          github="https://github.com/dlab-team/C16-backend/tree/develop"
        />
      </div>
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="top-center"
        data-aos-delay="600"
      >
        <ProjectCard
          title="Dropbox Clone"
          tech1="NextJS"
          tech2="Firebase"
          tech3="Clerk"
          tech4="Shadcn"
          image="/images/dropbox.png"
          link="https://dropbox-clone-4n2islq1i-felipes-projects-70f271fa.vercel.app/"
          github="https://github.com/FelipeBurboa/dropbox-clone"
        />
      </div>
    </div>
  );
};

export default Project;
