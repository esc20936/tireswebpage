import React from "react";

interface Props {
  title: string;
  description: string;
  index: number;
}

export default function Product({ title, description, index }: Props) {
  let rightAlign = index % 2 === 0 ? "items-start" : "items-end";
  let textAlign = index % 2 === 0 ? "text-left" : "text-right";
  return (
    <div className="h-screen-auto w-full p-4 mt-4">
      <div className={`h-full w-full flex flex-col ${rightAlign} justify-start`}>
          <h1 className="text-2xl font-normal text-center uppercase text-whiteText2">
            {title}
          </h1>
          <p className={`text-xs font-light ${textAlign} text-whiteText2 mt-4`}>
            {description}
          </p>
        <button className="border-solid border-2 border-white mt-6  py-2 px-8 rounded-lg">
            <h1 className="text-xs  text-whiteText2 font-light">Comprar</h1>
        </button>
      </div>
    </div>
  );
}
