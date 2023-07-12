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
    <main className="flex h-full w-full flex-col bg-darkBlue items-center justify-start fixed inset-0 overflow-hidden ">
      <Navbar routes={routes} theme="dark" />
      <div className="h-screen-2 absolute left-2/8 bottom-1/16 w-full -rotate-37 bg-lightBlue -z-10"></div>

      <div className="flex flex-col h-full w-full overflow-y-scroll items-center">
        {/* title */}
        <div className="h-auto w-full flex flex-col items-start justify-start p-4">
          <h1 className="text-2xl md:text-5xl font-bold text-center uppercase text-white">
            Productos
          </h1>
        </div>

        <section className="h-3/4 w-full flex flex-wrap items-start justify-center my-4">
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
        <div className="h-auto w-full md:w-3/5 flex flex-col items-start justify-start p-4">
          {/* card */}
          <div className="h-full w-full flex flex-col items-start justify-start p-4 rounded-lg bg-grayCard/80">
            <h1 className="text-lg font-bold text-center text-white">
              Otros Productos
            </h1>
            <p className="text-sm font-light text-left text-white mt-2">
              ¡En Importadora y Distribuidora Kayros, también tenemos una amplia
              selección de llantas japonesas y coreanas usadas, tanto al por
              mayor como al por menor, en diferentes medidas! Desde el Rim 12
              hasta el Rim 18, encontrarás las llantas perfectas para adaptarse
              a tus necesidades. Nuestras llantas usadas ofrecen calidad y
              confiabilidad a precios asequibles.
            </p>

            {/* ask about it button */}
            <div className="h-auto w-full flex flex-col items-center justify-center mt-4">
              <a className="border-solid border-2 border-white mt-12 bg-white py-2 px-6 rounded-lg text-xs  font-medium text-black "
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
