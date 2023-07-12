import React from "react";
import Navbar from "@/Components/Nav/Nav";
import products from "@/Utils/ProductSectionItems";
import Sale from "@/Components/Sale/Sale";
import "@/app/globals.css";
import Image, { StaticImageData } from "next/image";
import imagen from "../../public/Images/sinOfertas.png";

import sale145R12 from "@/saleImages/145R12.jpeg";
import sale20560R16 from "@/saleImages/205_60R16.jpeg";

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

interface ofertasProps {
  title: string;
  description: string;
  whatsappMessage: string;
  imagePath: StaticImageData;
}

// array ofertas
const ofertas: ofertasProps[] = [
  {
    title: "Oferta 145R12",
    description:
      "¡No te pierdas esta increíble oferta en neumáticos 145R12! En Importadora y Distribuidora Kayros. Esta es una oportunidad única para equipar tu vehículo con neumáticos duraderos y confiables. Aprovecha esta promoción por tiempo limitado y visita nuestras instalaciones para obtener tus neumáticos 145R12 al mejor precio. ¡No esperes más y aprovecha esta oferta ahora mismo!",
    whatsappMessage:
      "¡Hola! Quiero saber más sobre la oferta de neumaticos 145R12",
    imagePath: sale145R12,
  },
  {
    title: "Oferta 205 /60R16",
    description:
      "¡No dejes pasar esta oferta imperdible en neumáticos 205/60R16! En Importadora y Distribuidora Kayros. Aprovecha esta oportunidad única para equipar tu vehículo con neumáticos de excelente rendimiento y agarre en carretera. No esperes más y visita nuestras instalaciones para aprovechar esta promoción por tiempo limitado. Obtén tus neumáticos 205/60R16 al mejor precio y asegura un viaje seguro y confortable. ¡No pierdas esta oportunidad y adquiere tus neumáticos ahora mismo!",
    whatsappMessage:
      "¡Hola! Quiero saber más sobre la oferta de neumaticos 205/60R16",
    imagePath: sale20560R16,
  },
];

export default function productos() {
  return (
    <main className="flex h-full w-full flex-col bg-darkBlue items-center justify-start fixed inset-0 overflow-hidden ">
      <Navbar routes={routes} theme="dark" />
      <div className="h-screen-2 absolute left-2/8 bottom-1/16 w-full -rotate-37 bg-lightBlue -z-10"></div>

      {/* title */}
      <div className="h-auto w-full flex flex-col items-start justify-start p-4">
        <h1 className="text-2xl font-bold text-center uppercase text-white">
          Ofertas
        </h1>
      </div>

      <div className="flex flex-col h-auto w-full overflow-y-scroll">
        <section className="h-full w-full flex flex-col items-center justify-start">
          {ofertas.map((oferta, index) => {
            return (
              <Sale
                key={index}
                title={oferta.title}
                description={oferta.description}
                whatsappMessage={oferta.whatsappMessage}
                imagePath={oferta.imagePath}
              />
            );
          })}
          {ofertas.length === 0 && (
            <div className="h-full w-full flex flex-col items-center justify-center mt-28">
              <Image src={imagen} alt="empty" width={300} height={300} />
              <h1 className="text-2xl font-medium text-center uppercase text-white mt-4">
                No hay ofertas disponibles
              </h1>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
