import React from "react";

interface Props {
  title: string;
  description: string;
  index: number;
}

export default function Product({ title, description, index }: Props) {
  let rightAlign = index % 2 === 0 ? "items-start" : "items-end";
  let textAlign = index % 2 === 0 ? "text-left" : "text-right";

  const whatsappMessage = `Hola, me interesa el producto ${title} de su sección de productos.`;

  return (
    <div className="h-auto w-full md:w-80 p-4 mt-4 lg:mt-0 md:mx-4">
      <div
        className={`h-full w-full flex flex-col ${rightAlign} md:items-start justify-start`}
      >
        <h1 className="text-2xl md:text-4xl font-normal text-center uppercase text-whiteText2">
          {title}
        </h1>
        <p className={`text-xs md:text-base font-light ${textAlign} md:text-left text-whiteText2 mt-4`}>
          {description}
        </p>
        <a className="border-solid border-2 border-white mt-6  py-2 px-8 rounded-lg text-whiteText2
        hover:bg-whiteText2 hover:text-slate-900 transition duration-300 ease-in-out
        text-xs md:text-base font-semibold
        "
        href={`https://wa.me/50238288691?text=${whatsappMessage}`}
        
        >
          Comprar
        </a>
      </div>
    </div>
  );
}
