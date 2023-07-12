"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import animations from "../Animations/Animations";
import tire from "../../public/Images/tire.png"
import Navbar from "@/Components/Nav/Nav";

const routes = [
  {
      path: '/',
      name: 'Inicio',
  },
  {
      path: '/productos',
      name: 'Productos',
  },
  {
      path: '/sobre_nosotros',
      name: 'Sobre Nosotros',
  },
  {
      path:'/ofertas',
      name: 'Ofertas',
  },
]


export default function Inicio() {

  const whatsappMessage = "¡Hola! Quisiera saber más sobre los productos que ofrecen.";


  return (
    <main className="flex h-full w-full flex-col bg-backgroundWhite items-center justify-start fixed inset-0 overflow-hidden ">
      <Navbar routes={routes} />
      <div className="h-screen-2 absolute left-2/8 top-1/16 w-full rotate-37 bg-accentColor -z-10"></div>
      <motion.div
        initial="hidden"
        animate="visible"
        className="h-2/4 w-full flex flex-col items-center justify-center"
      >
        <h1 className="text-xl font-bold text-center uppercase">Importadora</h1>
        <h1 className="text-xl font-bold text-center uppercase">y</h1>
        <h1 className="text-xl font-bold text-center uppercase">
          Distribuidora
        </h1>
        <h1 className="text-xl font-bold text-center uppercase">Kayros S.A.</h1>
      

      <button className="border-solid border-2 border-black mt-12  py-2 px-4 rounded-lg z-10"

      >
        <a className="text-xs  font-medium  uppercase"
              href={`https://wa.me/50259312457?text=${whatsappMessage}`}

        >
          Contáctanos
        </a>
      </button>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        className="absolute top-4/8 left-3/8 w-8/12 h-3/4"
      >
        <Image
          src={tire}
          alt="Picture of the author"
          className="object-contain h-full w-full"
        />
      </motion.div>

    </main>
  );
}
