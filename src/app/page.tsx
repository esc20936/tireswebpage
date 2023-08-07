"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import animations from "../Animations/Animations";
import tire from "../../public/Images/tire3.png";
import hero from "../../public/Images/Hero.webp";
import Navbar from "@/Components/Nav/Nav";
import Link from "next/link";
import Head from "next/head";
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

export default function Inicio() {
  const whatsappMessage =
    "¡Hola! Quisiera saber más sobre los productos que ofrecen.";

  return (
    <main className="fixed inset-0 flex flex-col items-start justify-start w-full h-full overflow-hidden bg-lightColor aurora">
      <Head>
        <meta
          name="google-site-verification"
          content="4aJoDhQpIOdM_kzv2COdtLaEcMHBWqtpN3JMEYV9f94"
        />
      </Head>

      <Navbar routes={routes} theme="transparent" />
      <div className="absolute w-full h-full bg-black -z-10 md:h-full md:w-1/2 md:right-0">
        <Image
          src={hero}
          alt="Picture of the author"
          className="object-cover w-full h-full opacity-40 md:opacity-100"
        />
      </div>

    





      {/* <div className="absolute w-full h-full bg-gradient-to-r from-lightColor via-transparent to-transparent md:left-1/2 "></div> */}
      <div className="flex flex-col items-center justify-center w-full h-full md:w-1/2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animations["fade-in-spring"]}
          className="flex flex-col items-center justify-center w-full h-full text-xl font-bold text-center text-white uppercase md:w-full md:text-6xl"
        >
          <div className="text-white md:text-black w-7/8">
            <h1 className="">Importadora</h1>
            <h1 className="">y</h1>
            <h1 className="">Distribuidora</h1>
            <h1 className="">Kayros S.A.</h1>
            <p className="mt-4 text-sm font-bold text-white md:text-black md:text-2xl">
              ¡Contáctanos y conoce nuestros productos!
            </p>
          </div>
          <div className="z-10 flex flex-row items-center justify-center w-full mt-4 text-black md:mt-8">

            <Link
              className="px-4 py-2 mx-2 mt-12 text-xs font-medium text-white uppercase transition duration-300 ease-in-out border-2 border-white border-solid rounded-md md:border-black md:text-black hover:scale-110 hover:bg-accentColor hover:text-black"
              href="/productos"
            >
              Productos
            </Link>
          </div>
          <div className="">
            <p className="mt-20 text-xs font-light text-white md:text-black md:text-lg">
              Para más información,{" "}
              <a
                className="font-semibold colorText"
                href={`https://wa.me/50238288691?text=${whatsappMessage}`}
              >
                Contáctanos
              </a>
            </p>
          </div>
          <div>
            <p className="mt-4 text-xs font-light text-white md:text-black md:text-lg">
              Telefonos:<a href="tel:50238288691">+502 3828 8691</a> <br />
              Dirección: 3av. 8-22 zona 1, Santa Cruz del Quiche, Quiche,
              Guatemala
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
