import React from "react";

interface Props {
  title: string;
  description: string;
  index: number;
  whatsappMessage: string;
}

export default function Sale({ title, description, index, whatsappMessage }: Props) {
  return (
    <div className="h-screen-auto w-7/8 mt-4 ">
      <div className={`h-full w-full flex flex-col text-left justify-start bg-slate-900 p-4 rounded-lg`}>

          <h1 className="text-2xl font-normal text-left uppercase text-whiteText2">
            {title}
          </h1>
          <p className={`text-xs font-light text-left text-whiteText2 mt-4`}>
            {description}
          </p>
        <button className="bg-blue-600 mt-6  py-2 px-8 rounded-lg">
            <h1 className="text-xs  text-white font-light">Consultar</h1>
        </button>
      </div>
    </div>
  );
}
