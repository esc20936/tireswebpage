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
      "Aprovecha esta increíble oferta en neumáticos 145R12 al por mayor en Importadora y Distribuidora Kayros. Equipa tu vehículo con neumáticos duraderos y confiables. Visítanos para obtener tus neumáticos al mejor precio. ¡No esperes más, aprovecha esta promoción por tiempo limitado!",
    whatsappMessage: "¡Hola! Quiero saber más sobre la oferta de 145R12",
    imagePath: sale145R12,
  },
  {
    title: "Oferta 205 /60R16",
    description:
      "No te pierdas esta oferta en neumáticos 205/60R16 al por mayor en Importadora y Distribuidora Kayros. Equipa tu vehículo con neumáticos de excelente rendimiento y agarre en carretera. Visítanos para obtener tus neumáticos al mejor precio. Aprovecha esta promoción por tiempo limitado y asegura un viaje seguro y confortable. ¡Adquiere tus neumáticos ahora!",
    whatsappMessage: "¡Hola! Quiero saber más sobre la oferta de 205/60R16",
    imagePath: sale20560R16,
  },
];

export default function productos() {
  return (
    <main className="fixed inset-0 flex flex-col items-center justify-start w-full h-full overflow-hidden bg-darkBlue ">
      <Navbar routes={routes} theme="dark" />
      <div className="absolute w-full h-screen-2 left-2/8 bottom-1/16 -rotate-37 bg-lightBlue -z-10"></div>

      {/* title */}
      <div className="flex flex-col items-start justify-start w-full h-auto p-4">
        <h1 className="text-2xl font-bold text-center text-white uppercase md:text-5xl">
          Ofertas
        </h1>
      </div>

      <section className="flex flex-wrap items-start justify-center w-full h-full overflow-y-scroll">
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
          <div className="flex flex-col items-center justify-center w-full h-full mt-28">
            <Image src={imagen} alt="empty" width={300} height={300} />
            <h1 className="mt-4 text-2xl font-medium text-center text-white uppercase md:text-5xl">
              No hay ofertas disponibles
            </h1>
          </div>
        )}
      </section>
    </main>
  );
}
