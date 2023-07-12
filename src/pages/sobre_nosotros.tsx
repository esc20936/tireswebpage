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
      <div className="h-screen-2 absolute left-2/8 bottom-1/16 w-full -rotate-37 bg-lightBlue -z-10"></div>

      <div className="flex flex-col h-auto w-full overflow-y-scroll">
        {/* title */}
        <div className="h-auto w-full flex flex-col items-start justify-start p-4">
          <h1 className="text-2xl font-bold text-center uppercase text-white">
            Sobre nosotros
          </h1>
        </div>

        <section className="h-full w-full flex flex-col items-center justify-start">
          <div className="h-screen-auto w-full p-4 mt-4">
            <div
              className={`h-full w-full flex flex-col text-ledt justify-start`}
            >
              <h1 className="text-2xl font-normal text-left uppercase text-whiteText2">
                Misión
              </h1>
              <p
                className={`text-xs font-light text-left text-whiteText2 mt-4`}
              >
                En Importadora y Distribuidora Kayros, nuestra misión es
                proporcionar productos de calidad y servicios excepcionales en
                neumáticos y llantas, satisfaciendo las necesidades de nuestros
                clientes y construyendo relaciones duraderas basadas en
                confianza y eficiencia.
              </p>
            </div>
          </div>
          <div className="h-screen-auto w-full p-4 mt-4">
            <div
              className={`h-full w-full flex flex-col text-ledt justify-start`}
            >
              <h1 className="text-2xl font-normal text-left uppercase text-whiteText2">
                Visión
              </h1>
              <p
                className={`text-xs font-light text-left text-whiteText2 mt-4`}
              >
                Nuestra visión es convertirnos en el proveedor líder en
                neumáticos y llantas, reconocidos por nuestra calidad,
                confiabilidad y excelente servicio al cliente, contribuyendo al
                crecimiento sostenible de la industria automotriz.
              </p>
            </div>
          </div>
        </section>

        <div className="h-screen-4/5 w-full flex flex-col items-start justify-start">
          {/* card */}
          <div className="h-full w-full flex flex-col items-start justify-start p-4 rounded-lg ">
            <h1 className="text-xl  text-center font-semibold text-white">
              Información de contacto
            </h1>
            <div className="h-auto w-full flex flex-col items-start justify-start mt-4">
              <h1 className="text-sm font-medium text-white">Dirección</h1>
              <p className="text-xs  font-light text-white">
                3av. 8-22 zona 1, Santa Cruz del Quiche, Quiche, Guatemala
              </p>
            </div>
            <div className="h-auto w-full flex flex-col items-start justify-start mt-4">
              <h1 className="text-sm  font-medium text-white">Teléfonos:</h1>
              <p className="text-xs  font-light  text-white">
                <a href="tel:502 7755 5555 text-white">502 7755 5555</a>
              </p>
            </div>

            {/* ask about it button */}
            <div className="h-auto w-full flex flex-col items-center justify-center mt-4">
              <button className="border-solid border-2 border-white mt-12  py-2 px-6 rounded-lg">
                <a
                  className="text-xs  font-medium text-white"
                  href={`https://wa.me/50259312457?text=${whatsappMessage}`}
                >
                  Contáctanos
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
