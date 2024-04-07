import React, { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

interface FormData {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", formData);
      toast.success("¡Email enviado con éxito, pronto estaré en contacto!");
      setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
    } catch (error) {
      toast.error("Aww, hubo un error al enviar el email");
    }
  };

  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
            fontSize: "15px",
          },
        }}
      />
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
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
              <input
                className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
                type="text"
                placeholder="Nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
              <input
                className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              placeholder="Asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              className="py-[0.7rem] outline-none text-white w-full bg-gray-800 rounded-md px-4 mt-[1.5rem]"
            />
            <textarea
              placeholder="Mensaje"
              rows={4}
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4 mt-[1.5rem]"
            ></textarea>
            <button
              type="submit"
              className="py-[0.7rem] outline-none text-white w-full bg-blue-700 hover:bg-blue-800 rounded-md px-4 mb-[1.5rem]"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
