"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import animations from "../Animations/Animations";
import tire from "../../public/Images/tire3.png";
import Navbar from "@/Components/Nav/Nav";
import Link from "next/link";
import Head from "next/head";

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
    <main className="fixed inset-0 flex flex-col items-center justify-start w-full h-full overflow-hidden bg-backgroundWhite ">
      <Head>
        <meta
          name="google-site-verification"
          content="4aJoDhQpIOdM_kzv2COdtLaEcMHBWqtpN3JMEYV9f94"
        />
      </Head>
      <Navbar routes={routes} />
      <div className="absolute w-full bg-accentColor h-screen-2 left-2/8 md:-left-3/8 top-1/16 md:top-0 rotate-37 md:-rotate-0 -z-10"></div>
      <div className="flex flex-col items-center justify-start w-full h-full overflow-y-scroll">
        <div className="flex flex-col items-center justify-start w-full h-full md:flex-row">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animations["fade-in-spring"]}
            className="flex flex-col items-center justify-center w-full h-2/4"
          >
            <h1 className="text-xl font-bold text-center uppercase md:text-5xl">
              Importadora
            </h1>
            <h1 className="text-xl font-bold text-center uppercase md:text-5xl">
              y
            </h1>
            <h1 className="text-xl font-bold text-center uppercase md:text-5xl">
              Distribuidora
            </h1>
            <h1 className="text-xl font-bold text-center uppercase md:text-5xl">
              Kayros S.A.
            </h1>
            <div className="flex flex-row items-center justify-center w-full mt-4 md:mt-8">
              <a
                className="z-10 px-4 py-2 mx-2 mt-12 text-xs font-medium uppercase transition duration-300 ease-in-out border-2 border-black border-solid rounded-md hover:bg-black hover:text-white "
                href={`https://wa.me/50238288691?text=${whatsappMessage}`}
              >
                Contáctanos
              </a>
              <Link
                className="z-10 px-4 py-2 mx-2 mt-12 text-xs font-medium uppercase transition duration-300 ease-in-out border-2 border-black border-solid rounded-md hover:bg-black hover:text-white "
                href="/productos"
              >
                Productos
              </Link>
            </div>
          </motion.div>

          <div className="absolute w-8/12 top-4/8 md:relative md:top-0 md:left-0 h-3/4">
            <Image
              src={tire}
              alt="Picture of the author"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
