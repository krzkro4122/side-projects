import { randomUUID } from "crypto";
import { Card } from "./Card";
import { CardProps } from "./cards";

interface HorizontalCardsProps {
  cards: CardProps[];
  title: string;
}

export const HorizontalCards = ({ cards, title }: HorizontalCardsProps) => {
  return (
    <div className="flex flex-col text-black font-bold text-xl px-3">
      <div className="flex items-center gap-4">
        <span className="opacity-85 font-semibold text-nowrap text-xl">{title}</span>
        <div className="bg-black h-1 w-full opacity-20 rounded-lg block"></div>
      </div>
      <div className="flex gap-4 md:flex-wrap flex-col md:flex-row p-4">
        {cards &&
          cards.map((card, index) => {
            return <Card {...card} key={randomUUID()} />;
          })}
      </div>
    </div>
  );
};
