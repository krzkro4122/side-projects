import { randomUUID } from "crypto";
import { Card } from "./Card";
import { CardProps } from "./cards";

interface HorizontalCardsProps {
  cards: CardProps[];
  title: string;
}

export const HorizontalCards = ({ cards, title }: HorizontalCardsProps) => {
  return (
    <div className="flex flex-col gap-1 px-10 text-black text-3xl font-bold">
      <div className="flex items-center gap-4">
        <span className="opacity-85">{title}</span>
        <div className="bg-black h-1 w-full opacity-30 rounded-lg"></div>
      </div>
      <div className="flex gap-5 overflow-x-auto p-4">
        {cards &&
          cards.map((card, index) => {
            return <Card {...card} key={randomUUID()} />;
          })}
      </div>
    </div>
  );
};
