"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import animations from "../Animations/Animations";
import tire from "../../public/Images/tire.png";
import Navbar from "@/Components/Nav/Nav";

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

export default function Inicio() {
  const whatsappMessage =
    "¡Hola! Quisiera saber más sobre los productos que ofrecen.";

  return (
    <main className="flex h-full w-full flex-col bg-backgroundWhite items-center justify-start fixed inset-0 overflow-hidden ">
      <Navbar routes={routes} />
      <div className="h-screen-2 absolute left-2/8 md:-left-3/8 top-1/16 md:top-0 w-full rotate-37 md:-rotate-0    bg-accentColor -z-10"></div>
      <div className="h-full w-full flex flex-col md:flex-row items-center justify-start">
      <div
        className="h-2/4 w-full flex flex-col items-center justify-center"
      >
        <h1 className="text-xl md:text-5xl font-bold text-center uppercase">Importadora</h1>
        <h1 className="text-xl md:text-5xl font-bold text-center uppercase">y</h1>
        <h1 className="text-xl md:text-5xl font-bold text-center uppercase">
          Distribuidora
        </h1>
        <h1 className="text-xl md:text-5xl font-bold text-center uppercase">Kayros S.A.</h1>

        <button className="border-solid border-2 border-black mt-12  py-2 px-4 rounded-md z-10
          hover:bg-black hover:text-white transition duration-300 ease-in-out
        ">
          <a
            className="text-xs  font-medium  uppercase"
            href={`https://wa.me/50259312457?text=${whatsappMessage}`}
          >
            Contáctanos
          </a>
        </button>
      </div>

      <div
        className="absolute top-4/8 left-3/8  md:relative md:top-0 md:left-0 w-8/12 h-3/4"
      >
        <Image
          src={tire}
          alt="Picture of the author"
          className="object-contain h-full w-full"
        />
      </div>
      </div>
    </main>
  );
}
