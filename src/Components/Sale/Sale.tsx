import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  description: string;
  whatsappMessage: string;
  imagePath: StaticImageData;
}

export default function Sale({
  title,
  description,
  whatsappMessage,
  imagePath,
}: Props) {
  return (
    <div className="h-screen-3/5 md:h-s-150  w-7/8 md:w-96 m-4  ">
      <div
        className={`h-full w-full flex flex-col text-left justify-start bg-slate-900 p-4 rounded-lg`}
      >
        <div className="h-1/2 w-full flex items-center justify-center rounded-lg overflow-hidden">
          <Image
            src={imagePath}
            alt="Picture of the author"
            className="object-cover h-full w-full"
          />
        </div>

        <h1 className="text-2xl font-normal text-left uppercase text-whiteText2 mt-4 ">
          {title}
        </h1>
        <p className={`text-sm font-normal text-left text-whiteText2 mt-4`}>
          {description}
        </p>
        <button className="bg-blue-600 mt-6  py-2 px-8 rounded-lg
        hover:bg-blue-700 transition duration-300 ease-in-out
        ">
          <a
            className="text-xs  text-white font-light"
            href={`https://wa.me/50238288691?text=${whatsappMessage}`}
          >
            Consultar
          </a>
        </button>
      </div>
    </div>
  );
}
