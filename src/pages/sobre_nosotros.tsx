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
    <main className="fixed inset-0 flex flex-col items-center justify-start w-full h-full overflow-hidden bg-darkBlue ">
      <Navbar routes={routes} theme="dark" />
      <div className="absolute w-full h-screen-2 left-2/8 lg:left-4/8 bottom-1/16 -rotate-37 bg-lightBlue -z-10"></div>

      <div className="flex flex-col items-start justify-start w-full h-auto p-4">
        <h1 className="text-2xl font-bold text-center text-white uppercase md:text-5xl">
          Sobre nosotros
        </h1>
      </div>
      <div className="flex flex-col items-center justify-start w-full h-auto overflow-y-scroll md:items-start md:justify-evenly md:flex-row md:overflow-y-hidden">
        {/* title */}

        <div className="w-full h-auto p-4 mt-4 lg:w-80 md:mt-1/16 md:mx-4">
          <div
            className={`h-full w-full flex flex-col  md:items-start justify-start`}
          >
            <h1 className="text-2xl font-normal text-center uppercase md:text-4xl text-whiteText2">
              Misión
            </h1>
            <p
              className={`text-xs md:text-xl font-light  md:text-left text-whiteText2 mt-4`}
            >
              En Importadora y Distribuidora Kayros, nuestra misión es
              proporcionar productos de calidad y servicios excepcionales en
              neumáticos y llantas, satisfaciendo las necesidades de nuestros
              clientes y construyendo relaciones duraderas basadas en confianza
              y eficiencia.
            </p>
          </div>
        </div>

        <div className="w-full h-auto p-4 mt-4 lg:w-80 md:mt-1/16 md:mx-4">
          <div
            className={`h-full w-full flex flex-col  md:items-start justify-start`}
          >
            <h1 className="text-2xl font-normal text-center uppercase md:text-4xl text-whiteText2">
              Visión
            </h1>
            <p
              className={`text-xs md:text-xl font-light  md:text-left text-whiteText2 mt-4`}
            >
              Nuestra visión es convertirnos en el proveedor líder en neumáticos
              y llantas, reconocidos por nuestra calidad, confiabilidad y
              excelente servicio al cliente, contribuyendo al crecimiento
              sostenible de la industria automotriz.
            </p>
          </div>
        </div>

        <div className="w-full h-auto p-4 mt-4 lg:w-80 md:mt-1/16 md:mx-4">
          <div
            className={`h-full w-full flex flex-col  md:items-start justify-start`}
          >
            <h1 className="text-2xl font-normal text-left uppercase md:text-4xl text-whiteText2">
              Información de contacto
            </h1>
            <div className="flex flex-col items-start justify-start w-full h-auto mt-4">
              <h1 className="text-sm font-medium text-white md:text-lg ">
                Dirección
              </h1>
              <p className="text-xs font-light text-white md:text-lg">
                3av. 8-22 zona 1, Santa Cruz del Quiche, Quiche, Guatemala
              </p>
            </div>
            <div className="flex flex-col items-start justify-start w-full h-auto mt-4">
              <h1 className="text-sm font-medium text-white md:text-lg ">
                Teléfonos:
              </h1>
              <p className="text-xs font-light text-white md:text-lg">
                <a href="tel:50238288691">+502 3828 8691</a>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-auto mt-4 md:items-start">
              <a
                className="px-6 py-2 mt-12 text-xs font-medium text-white duration-300 ease-in-out border-2 border-white border-solid rounded-lg hover:bg-white hover:text-darkBlue "
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
