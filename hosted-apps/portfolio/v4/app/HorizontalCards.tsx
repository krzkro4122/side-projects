import { Card } from "./Card";
import { CardProps } from "./cards";

interface HorizontalCardsProps {
  cards: CardProps[];
  title: string;
}

export const HorizontalCards = ({ cards, title }: HorizontalCardsProps) => {
  return (
    <div className="flex flex-col gap-4 p-10 text-black text-3xl font-bold">
      <span>{title}</span>
      <div className="flex gap-5">
        {cards &&
          cards.map((card) => {
            return (
              <Card {...card} />
            );
          })}
      </div>
    </div>
  );
};
