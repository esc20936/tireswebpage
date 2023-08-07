"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import animations from "../Animations/Animations";
import tire from "../../public/Images/tire3.png";
import hero from "../../public/Images/Hero.webp";
import Navbar from "@/Components/Nav/Nav";
import Link from "next/link";
import Head from "next/head";
import "@/app/globals.css"

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
    <main className="fixed inset-0 flex flex-col items-center justify-start w-full h-full overflow-hidden bg-lightColor aurora">
 


      <Head>
        <meta
          name="google-site-verification"
          content="4aJoDhQpIOdM_kzv2COdtLaEcMHBWqtpN3JMEYV9f94"
        />
      </Head>

      <Navbar routes={routes} theme="transparent" />
      <div className="absolute w-full h-full -z-10 md:h-full md:w-1/2 md:right-0 bg-lightColor">
        <Image
          src={hero}
          alt="Picture of the author"
          className="object-cover w-full h-full opacity-25 md:opacity-100"
        />
      </div>
      
      <div className="absolute w-full h-full bg-gradient-to-r from-lightColor via-transparent to-transparent md:left-1/2 "></div>
      <div className="flex flex-col items-center justify-center w-full h-full md:flex-row">

        <motion.div
          initial="hidden"
          animate="visible"
          variants={animations["fade-in-spring"]}
          className="flex flex-col items-center justify-center w-full text-xl font-bold text-center text-white uppercase h-2/4 md:w-full md:h-full md:text-6xl"
        >
          <div className="w-7/8">

            <h1 className="">
              Importadora
            </h1>
            <h1 className="">
              y
            </h1>
            <h1 className="">
              Distribuidora
            </h1>
            <h1 className="">
              Kayros S.A.
            </h1>
          <p className="mt-4 text-sm font-bold text-white md:text-2xl colorText">
            ¡Contáctanos y conoce nuestros productos!
          </p>
          </div>
          <div className="z-10 flex flex-row items-center justify-center w-full mt-4 text-white md:mt-8">
            <a
              className="px-4 py-2 mx-2 mt-12 text-xs font-medium text-white uppercase transition duration-300 ease-in-out border-2 border-white border-solid rounded-md md:border-white hover:scale-110 hover:bg-accentColor hover:text-black"
              href={`https://wa.me/50238288691?text=${whatsappMessage}`}
            >
              Contáctanos
            </a>

              <Link
                className="px-4 py-2 mx-2 mt-12 text-xs font-medium text-white uppercase transition duration-300 ease-in-out border-2 border-white border-solid rounded-md md:border-white hover:scale-110 hover:bg-accentColor hover:text-black"
                href="/productos"
              >
                Productos
              </Link>
            </div>
          </motion.div>


        <div className="absolute w-8/12 top-4/8 md:relative md:top-0 md:left-0 h-3/4">
          {/* <Image
            src={tire}
            alt="Picture of the author"
            className="object-contain w-full h-full"
          /> */}

        </div>
      </div>
    </main>
  );
}
