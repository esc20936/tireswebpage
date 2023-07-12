import React from "react";
import Navbar from "@/Components/Nav/Nav";
import Product from "@/Components/Product/Product";
import products from "@/Utils/ProductSectionItems";
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

export default function productos() {
  const whatsappMessage = `Hola, me interesa saber sobre que otros productos tienen disponibles.`;

  return (
    <main className="fixed inset-0 flex flex-col items-center justify-start w-full h-full overflow-hidden bg-darkBlue ">
      <Navbar routes={routes} theme="dark" />
      <div className="absolute w-full h-screen-2 left-2/8 bottom-1/16 -rotate-37 bg-lightBlue -z-10"></div>

      <div className="flex flex-col items-center w-full h-full overflow-y-scroll">
        {/* title */}
        <div className="flex flex-col items-start justify-start w-full h-auto p-4">
          <h1 className="text-2xl font-bold text-center text-white uppercase md:text-5xl">
            Productos
          </h1>
        </div>

        <section className="flex flex-wrap items-start justify-center w-full my-4 h-3/4">
          {products.map((product, index) => {
            return (
              <Product
                key={index}
                index={index}
                title={product.name}
                description={product.description}
              />
            );
          })}
        </section>

        {/* other products */}
        <div className="flex flex-col items-start justify-start w-full h-auto p-4 md:w-3/5">
          {/* card */}
          <div className="flex flex-col items-start justify-start w-full h-full p-4 rounded-lg bg-grayCard/80">
            <h1 className="text-lg font-bold text-center text-white">
              Otros Productos
            </h1>
            <p className="mt-2 text-sm font-light text-left text-white">
              ¡En Importadora y Distribuidora Kayros, también tenemos una amplia
              selección de llantas japonesas y coreanas usadas, tanto al por
              mayor como al por menor, en diferentes medidas! Desde el Rim 12
              hasta el Rim 18, encontrarás las llantas perfectas para adaptarse
              a tus necesidades. Nuestras llantas usadas ofrecen calidad y
              confiabilidad a precios asequibles.
            </p>

            {/* ask about it button */}
            <div className="flex flex-col items-center justify-center w-full h-auto mt-4">
              <a
                className="px-6 py-2 mt-12 text-xs font-medium text-black bg-white border-2 border-white border-solid rounded-lg "
                href={`https://wa.me/50238288691?text=${whatsappMessage}`}
              >
                Consultar
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
