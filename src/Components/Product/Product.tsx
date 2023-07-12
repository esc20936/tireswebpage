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
    <div className="w-full h-auto p-4 mt-4 md:w-80 lg:mt-0 md:mx-4">
      <div
        className={`h-full w-full flex flex-col ${rightAlign} md:items-start justify-start`}
      >
        <h1 className="text-2xl font-normal text-center uppercase md:text-4xl text-whiteText2">
          {title}
        </h1>
        <p className={`text-xs md:text-base font-light ${textAlign} md:text-left text-whiteText2 mt-4`}>
          {description}
        </p>
        <a className="px-8 py-2 mt-6 text-xs font-semibold transition duration-300 ease-in-out border-2 border-white border-solid rounded-lg text-whiteText2 hover:bg-whiteText2 hover:text-slate-900 md:text-base "
        href={`https://wa.me/50238288691?text=${whatsappMessage}`}
        
        >
          Comprar
        </a>
      </div>
    </div>
  );
}
