import { HorizontalCards } from "./HorizontalCards";
import { educationCards, experienceCards } from "./cards";

export const Body = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <HorizontalCards cards={experienceCards} title="Experience" />
      <HorizontalCards cards={educationCards} title="Education" />
    </div>
  );
};
