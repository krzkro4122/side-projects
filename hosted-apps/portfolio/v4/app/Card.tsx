import Image from "next/image";
import Link from "next/link";
import { CardProps } from "./cards";

export const Card = (card: CardProps) => {
  return (
    <Link
      href={card.href}
      className="rounded-3xl bg-black bg-opacity-85 h-52 aspect-[1.6/1] flex flex-col justify-between outline outline-4 outline-black hover:underline hover:scale-105 cursor-pointer"
    >
      <div className="p-4 flex-grow flex items-center justify-center">
        <Image src={card.imageSrc} alt={card.imageAlt} height={70} />
      </div>
      <div className="flex w-full bg-white p-4 justify-between">
        <div className="flex-col">
          <div className="flex gap-2">
            <span className="text-xl font-semibold">{card.title}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-normal">{card.text}</span>
            {card.text2 && <span className="text-base font-normal">{card.text2}</span>}
          </div>
        </div>
        {card.icon}
      </div>
    </Link>
  );
};
