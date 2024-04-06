import React from "react";
import ServiceCard from "./Helper/ServiceCard";

const Services = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#0b0c13]">
      <div className="text-center">
        <p className="heading__mini">Servicios Populares</p>
        <h1 className="heading__primary">
          Mis <span className="text-yellow-400">servicios</span> especiales para
          ti
        </h1>
      </div>
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        <div data-aos="fade-down" data-aos-anchor-placement="top-center">
          <ServiceCard
            title="Fullstack Apps"
            num="01"
            text="Desarrollo Fullstack con enfoque integral, desde la interfaz de usuario hasta la gestión de datos, garantizando soluciones de calidad."
          />
        </div>
        <div
          data-aos="fade-down"
          data-aos-anchor-placement="top-center"
          data-aos-delay="50"
        >
          <ServiceCard
            title="React Website"
            num="02"
            text="Creo sitios web dinámicos y modernos, ofreciendo una experiencia excepcional en todos los dispositivos."
          />
        </div>
        <div
          data-aos="fade-down"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <ServiceCard
            title="Node JS Api"
            num="03"
            text="Desarrollo APIs escalables y eficientes con Node.js, facilitando la comunicación entre sistemas y servicios."
          />
        </div>
        <div
          data-aos="fade-down"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
        >
          <ServiceCard
            title="Base De Datos"
            num="04"
            text="Ofrezco servicios de diseño, implementación y optimización de bases de datos para garantizar un rendimiento óptimo."
          />
        </div>
        <div
          data-aos="fade-down"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <ServiceCard
            title="Responsive"
            num="05"
            text="Especializado en el desarrollo de sitios web totalmente receptivos que se adaptan a cualquier dispositivo y tamaño de pantalla."
          />
        </div>
        <div
          data-aos="fade-down"
          data-aos-anchor-placement="top-center"
          data-aos-delay="250"
        >
          <ServiceCard
            title="Scrum"
            num="06"
            text="Implemento la metodología ágil Scrum para gestionar proyectos de desarrollo de software de manera eficiente y colaborativa."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
