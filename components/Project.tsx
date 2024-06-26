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
          text="Este proyecto se creó para entregar al encuestado un resultado cuantitavo en lo que respecta a la polarización entre la opinión propia y la opinion que uno piensa que tiene el extremo opuesto de uno."
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
          text="Este blog se creó para poder dar una plataforma a la ONG de Surgencia donde ellos podrian compartir noticias, proyectos, colaboraciones, material descargable y compartir un mapa de conflictos y amenazas medioambientales"
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
          text="Esta es una página que permitira conectar a cuidadores con otros pares para compartir sus experiencias, encontrar material de ayuda, ver videos relevantes con el tema y poder generar comunidad."
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
          text="Este es un proyecto con autenticación con Clerk, que nos permite guardar archivos separados por usuario utilizando firebase para guardarlos. Estos archivos pueden ser borrados o descargados."
          title="Dropbox Clone"
          tech1="NextJS"
          tech2="Firebase"
          tech3="Clerk"
          tech4="Shadcn"
          image="/images/dropbox.png"
          link="https://dropbox-clone-dusky.vercel.app/"
          github="https://github.com/FelipeBurboa/dropbox-clone"
        />
      </div>
    </div>
  );
};

export default Project;
