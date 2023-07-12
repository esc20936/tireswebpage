import React from "react";
import Navbar from "@/Components/Nav/Nav";

import "@/app/globals.css";
const routes = [
  {
    path: "/",
    name: "Inicio",
  },
  {
    path: "/productos",
    name: "Productos",
  },
  {
    path: "/sobre_nosotros",
    name: "Sobre Nosotros",
  },
  {
    path: "/ofertas",
    name: "Ofertas",
  },
];

export default function sobre_nosotros() {
  const whatsappMessage = `Hola, quisiera saber más sobre los productos que ofrecen.`;

  return (
    <main className="flex h-full w-full flex-col bg-darkBlue items-center justify-start fixed inset-0 overflow-hidden ">
      <Navbar routes={routes} theme="dark" />
      <div className="h-screen-2 absolute left-2/8 lg:left-4/8 bottom-1/16 w-full -rotate-37 bg-lightBlue -z-10"></div>

      <div className="h-auto w-full flex flex-col items-start justify-start p-4">
        <h1 className="text-2xl md:text-5xl font-bold text-center uppercase text-white">
          Sobre nosotros
        </h1>
      </div>
      <div className="flex flex-col items-center justify-start md:items-start md:justify-evenly md:flex-row h-auto w-full overflow-y-scroll md:overflow-y-hidden">
        {/* title */}

          
          <div className="h-auto w-full lg:w-80 p-4 mt-4 md:mt-1/16 md:mx-4">
            <div
              className={`h-full w-full flex flex-col  md:items-start justify-start`}
            >
              <h1 className="text-2xl md:text-4xl font-normal text-center uppercase text-whiteText2">
                Misión
              </h1>
              <p
                className={`text-xs md:text-xl font-light  md:text-left text-whiteText2 mt-4`}
              >
                En Importadora y Distribuidora Kayros, nuestra misión es
                proporcionar productos de calidad y servicios excepcionales en
                neumáticos y llantas, satisfaciendo las necesidades de nuestros
                clientes y construyendo relaciones duraderas basadas en
                confianza y eficiencia.
              </p>
            </div>
          </div>

          <div className="h-auto w-full lg:w-80 p-4 mt-4 md:mt-1/16 md:mx-4">
            <div
              className={`h-full w-full flex flex-col  md:items-start justify-start`}
            >
              <h1 className="text-2xl  md:text-4xl font-normal text-center uppercase text-whiteText2">
                Visión
              </h1>
              <p
                className={`text-xs md:text-xl font-light  md:text-left text-whiteText2 mt-4`}
              >
                 Nuestra visión es convertirnos en el proveedor líder en
                neumáticos y llantas, reconocidos por nuestra calidad,
                confiabilidad y excelente servicio al cliente, contribuyendo al
                crecimiento sostenible de la industria automotriz.
              </p>
            </div>
          </div>

          <div className="h-auto w-full lg:w-80 p-4 mt-4 md:mt-1/16 md:mx-4">
            <div
              className={`h-full w-full flex flex-col  md:items-start justify-start`}
            >
              <h1 className="text-2xl  md:text-4xl font-normal text-left uppercase text-whiteText2">
                Información de contacto
              </h1>
              <div className="h-auto w-full flex flex-col items-start justify-start mt-4">
              <h1 className="text-sm font-medium text-white md:text-lg ">Dirección</h1>
              <p className="text-xs md:text-lg  font-light text-white">
                3av. 8-22 zona 1, Santa Cruz del Quiche, Quiche, Guatemala
              </p>
            </div>
            <div className="h-auto w-full flex flex-col items-start justify-start mt-4">
              <h1 className="text-sm  font-medium text-white md:text-lg ">Teléfonos:</h1>
              <p className="text-xs md:text-lg  font-light  text-white">
                <a href="tel:50238288691">+502 3828 8691</a>
              </p>
            </div>
            <div className="h-auto w-full flex flex-col items-center justify-center md:items-start mt-4">
              <a className="border-solid border-2 border-white mt-12  py-2 px-6 rounded-lg text-white
              hover:bg-white hover:text-darkBlue ease-in-out duration-300
              text-xs  font-medium 
              "
              href={`https://wa.me/50238288691?text=${whatsappMessage}`}
              >
                  Contáctanos
              </a>
            </div>
            </div>
          </div>
      </div>
    </main>
  );
}
