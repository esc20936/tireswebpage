import React from "react";
import Navbar from "@/Components/Nav/Nav";
import products from "@/Utils/ProductSectionItems";
import Sale from "@/Components/Sale/Sale";
import "@/app/globals.css";

// routes
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


// array ofertas
const ofertas = [
  {
    title: "Joyroad",
    description:
      "¡Oferta imperdible en llantas JoyRoad! En Importadora y Distribuidora Kayros, compra 4 llantas JoyRoad al precio de 3. No te pierdas esta oportunidad para equipar tu vehículo con llantas de calidad superior. Visítanos ahora y aprovecha esta promoción por tiempo limitado. ¡No esperes más para obtener tus llantas JoyRoad al mejor precio!",
    whatsappMessage: "¡Hola! Estoy interesado en la oferta de JoyRoad",
  },
];

export default function productos() {
  return (
    <main className="flex h-full w-full flex-col bg-darkBlue items-center justify-start fixed inset-0 overflow-hidden ">
      <Navbar routes={routes} theme="dark" />
      <div className="h-screen-2 absolute left-2/8 bottom-1/16 w-full -rotate-37 bg-lightBlue -z-10"></div>

      <div className="flex flex-col h-auto w-full overflow-y-scroll">
        {/* title */}
        <div className="h-auto w-full flex flex-col items-start justify-start p-4">
          <h1 className="text-2xl font-bold text-center uppercase text-white">
            Ofertas
          </h1>
        </div>

        <section className="h-full w-full flex flex-col items-center justify-start">
          {ofertas.map((oferta, index) => {
            return (
              <Sale
                key={index}
                index={index}
                title={oferta.title}
                description={oferta.description}
                whatsappMessage={oferta.whatsappMessage}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}
