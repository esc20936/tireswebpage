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
    <div className="m-4 h-screen-3/5 md:h-s-150 w-7/8 md:w-96 ">
      <div
        className={`h-full w-full flex flex-col text-left justify-start bg-slate-900 p-4 rounded-lg`}
      >
        <div className="flex items-center justify-center w-full overflow-hidden rounded-lg h-1/2">
          <Image
            src={imagePath}
            alt="Picture of the author"
            className="object-cover w-full h-full"
          />
        </div>

        <h1 className="mt-4 text-2xl font-normal text-left uppercase text-whiteText2 ">
          {title}
        </h1>
        <p className={`text-sm font-normal text-left text-whiteText2 mt-4`}>
          {description}
        </p>
        <a
          className="px-8 py-2 mt-6 text-xs font-light text-center text-white transition duration-300 ease-in-out bg-blue-600 rounded-lg hover:bg-blue-700"
          href={`https://wa.me/50238288691?text=${whatsappMessage}`}
        >
          Consultar
        </a>
      </div>
    </div>
  );
}
