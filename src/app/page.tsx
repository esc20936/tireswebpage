"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import animations from "../Animations/Animations";
import tire from "../../public/Images/tire.png"
import Navbar from "@/Components/Nav/Nav";
import routes from "@/Utils/routes";

export default function Inicio() {
  return (
    <main className="flex h-full w-full flex-col bg-backgroundWhite items-center justify-start fixed inset-0 overflow-hidden ">
      <Navbar routes={routes} />
      <div className="h-screen-2 absolute left-2/8 top-1/16 w-full rotate-37 bg-accentColor -z-10"></div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animations["opacity-0-to-opacity-100"]}
        className="h-3/4 w-full flex flex-col items-center justify-center"
      >
        <h1 className="text-xl font-bold text-center uppercase">Importadora</h1>
        <h1 className="text-xl font-bold text-center uppercase">y</h1>
        <h1 className="text-xl font-bold text-center uppercase">
          Distribuidora
        </h1>
        <h1 className="text-xl font-bold text-center uppercase">Kayros S.A.</h1>
      

      <button className="border-solid border-2 border-black mt-12  py-2 px-4 rounded-lg">
        <h1 className="text-xs  font-medium  uppercase">
          Contáctanos
        </h1>
      </button>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={animations["opacity-0-to-opacity-100"]}
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
