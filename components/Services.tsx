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
        <div>
          <ServiceCard title="Fullstack Apps" num="01" />
        </div>
        <div>
          <ServiceCard title="React Website" num="02" />
        </div>
        <div>
          <ServiceCard title="Node JS Api" num="03" />
        </div>
        <div>
          <ServiceCard title="Base De Datos" num="04" />
        </div>
        <div>
          <ServiceCard title="Diseño Responsive" num="05" />
        </div>
        <div>
          <ServiceCard title="Scrum" num="06" />
        </div>
      </div>
    </div>
  );
};

export default Services;
