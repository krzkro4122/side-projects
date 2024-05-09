import Image from "next/image";
import Link from "next/link";
import { CardProps } from "./cards";

export const Card = (card: CardProps) => {
  return (
    <Link
      href={card.href}
      target="_blank"
      className="rounded-3xl bg-black h-52 aspect-[1.6/1] flex flex-col justify-between outline outline-4 outline-black hover:underline hover:scale-105 active:opacity-95 cursor-pointer"
    >
      <div className="flex-grow flex items-center justify-center">
        <Image src={card.imageSrc} alt={card.imageAlt} className="p-4 max-h-24 max-w-min" />
      </div>
      <div className="flex w-full bg-white p-2 px-4 justify-between items-center">
        <div className="flex-col">
          <div className="flex gap-2">
            <span className="text-xl font-semibold">{card.title}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-normal">{card.text}</span>
            {card.text2 && (
              <span className="text-sm opacity-75 font-normal">
                {card.text2}
              </span>
            )}
          </div>
        </div>
        {card.icon}
      </div>
    </Link>
  );
};
