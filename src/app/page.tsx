"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import animations from "../Animations/Animations";
import tire from "../../public/Images/Hero.webp";
import tire2 from "../../public/Images/tire3.png";
import hero from "../../public/Images/heroo2.png";
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
    <main className="fixed inset-0 flex flex-col items-start justify-start w-full h-auto min-h-screen overflow-y-scroll bg-lightColor">
      <Head>
        <meta
          name="google-site-verification"
          content="4aJoDhQpIOdM_kzv2COdtLaEcMHBWqtpN3JMEYV9f94"
        />
      </Head>

      {/* <div className="absolute w-full h-full overflow-hidden bg-black -z-10 md:h-full md:w-1/2 md:right-0 md:rounded-l-lg">
        <Image
          src={hero}
          alt="Picture of the author"
          className="object-cover w-full h-full opacity-40 md:opacity-100 "
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full min-h-screen md:w-1/2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animations["fade-in-spring"]}
          className="flex flex-col items-center justify-center w-full h-full text-xl font-bold text-center text-white uppercase md:w-full md:text-5xl"
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
              className="px-4 py-2 mx-2 mt-12 text-xs font-medium text-white uppercase transition duration-300 ease-in-out border-2 border-white border-solid rounded-md md:border-black md:text-black hover:scale-110 hover:text-black"
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
      </div> */}
      <Navbar routes={routes} theme="light" />

      <div className="h-auto mx-auto w-7/8">
        <div className="h-[500px] md:max-h-[500px] relative rounded-lg">
          {/* Overlay */}
          <div className="absolute w-full h-full rounded-lg text-gray-200 md:max-h-[500px] bg-black/70 flex flex-col justify-center">
            <div className="flex flex-col items-start justify-center md:items-center ">
              <h1 className="px-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="">Importadora</span> y
              </h1>
              <h1 className="px-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="">Distribuidora</span>{" "}
                <span className="colorText">Kayros</span>{" "}
                <span className="">S.A.</span>
              </h1>

              {/* call to action button*/}
              <button className="self-center px-6 py-2 mt-12 text-sm font-medium text-white duration-150 ease-in-out bg-orange-500 rounded-lg hover:scale-110 ">
                <a
                  href={`https://wa.me/50238288691?text=${whatsappMessage}`}
                >
                  Contáctanos
                </a>
              </button>

            </div>
          </div>
          <img
            className="w-full h-[500px] md:max-h-[500px] object-cover rounded-lg"
            src="https://images.pexels.com/photos/3806252/pexels-photo-3806252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
          />
        </div>
      </div>

      <div className="flex flex-col items-start justify-start w-full h-auto">
        <div className="flex flex-col items-center justify-between w-full h-auto min-h-screen p-6 md:p-24 md:flex-row">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-black uppercase md:text-5xl">
              ¡Las mejores llantas en Santa Cruz del Quiché!
            </h1>
            <p className="mt-4 font-semibold">
              ¡Bienvenidos a nuestra tienda de neumáticos en Quiché, Guatemala!
              Ofrecemos una amplia selección de neumáticos de alta calidad para
              satisfacer todas sus necesidades automotrices. Ya sea que conduzca
              por las empinadas carreteras de montaña o por las calles urbanas,
              nuestros neumáticos están diseñados para brindarle un rendimiento
              excepcional, tracción superior y durabilidad duradera. Nuestro
              equipo experto está listo para ayudarlo a encontrar los neumáticos
              adecuados para su vehículo, brindándole asesoramiento
              personalizado y opciones asequibles. En Neumáticos Quiché, nos
              enorgullecemos de ser su destino confiable para neumáticos
              confiables y servicio de calidad en toda la región. ¡Visítenos hoy
              y experimente la diferencia en su conducción!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-1/2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.7 }}
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { type: "spring" },
                },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="w-full p-4 mt-4 overflow-hidden shadow-lg md:mt-0 md:w-1/2 h-3/4"
            >
              <Image
                src={tire}
                alt="Picture of the author"
                className="object-cover w-full h-full rounded-lg"
              />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between w-full h-auto min-h-screen p-6 md:p-24 md:flex-row-reverse">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-black uppercase md:text-5xl">
              ¡Contamos con diferentes marcas de llantas de alta calidad!
            </h1>
            <p className="mt-4 font-semibold">
              En importadora kayros, entendemos que cada conductor tiene
              preferencias únicas. Es por eso que ofrecemos una amplia gama de
              marcas de renombre en nuestra tienda de neumáticos. Desde las
              prestigiosas marcas internacionales hasta las opciones más
              confiables y asequibles, tenemos la selección perfecta para usted.
              Nuestra variedad de marcas asegura que encontrará los neumáticos
              adecuados que se adapten a su estilo de conducción y presupuesto.
              Sea cual sea la marca que prefiera, puede confiar en Neumáticos
              Quiché para ofrecerle productos de primera clase y un servicio
              inigualable en Quiché, Guatemala.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-1/2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.7 }}
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { type: "spring" },
                },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="w-full p-4 mt-4 overflow-hidden rounded-lg shadow-lg md:mt-0 md:w-1/2 h-3/4 "
            >
              <Image
                src={tire2}
                alt="Picture of the author"
                className="object-cover w-full h-full bg-orange-500 rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
