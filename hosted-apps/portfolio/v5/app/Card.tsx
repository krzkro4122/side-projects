"use client";

import Image from "next/image";
import Link from "next/link";
import { CardProps } from "./cards";
import { useEffect, useState } from "react";

export const Card = (card: CardProps) => {
  const [isOffline, setIsOffline] = useState<boolean | null>(null);

  useEffect(() => {
    const checkOffline = async () => {
      const response = await fetch(card.href);
      setIsOffline(response.status > 399);
    };
    checkOffline();
  }, []);

  return (
    <Link
      href={card.href}
      target="_blank"
      className={`rounded-2xl bg-black h-52 md:aspect-[1.6/1] w-full md:w-auto flex flex-col min-w-max overflow-hidden justify-between border-4 border-black ${
        isOffline ? "opacity-50 cursor-not-allowed" : "hover:underline hover:scale-105 active:opacity-95 cursor-pointer"
      }`}
    >
      <div className="flex-grow flex items-center justify-center">
        {isOffline ? (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-white text-2xl font-bold">Offline ⛔️</p>
          </div>
        ) : (
          <Image
            src={card.imageSrc}
            alt={card.imageAlt}
            className="p-4 lg:p-4 max-h-20 lg:max-h-24 max-w-min"
          />
        )}
      </div>
      <div className="flex w-full bg-white gap-2 p-3 lg:px-4 justify-between items-center">
        <div className="flex-col">
          <div className="flex gap-2">
            <span className="text-sm text-nowrap lg:text-xl font-semibold">
              {card.title}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-nowrap lg:text-base font-normal">
              {card.text}
            </span>
            {card.text2 && (
              <span className="text-xs text-nowrap lg:text-sm opacity-75 font-normal">
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
