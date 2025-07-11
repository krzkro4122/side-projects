import { HorizontalCards } from "./HorizontalCards";
import { educationCards, experienceCards, projectCards } from "./cards";

export const Body = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <HorizontalCards cards={educationCards} title="Education 🎓" />
      <HorizontalCards cards={experienceCards} title="Experience ⚒️" />
      <HorizontalCards cards={projectCards} title="Hosted projects 🧑‍🔧" />
    </div>
  );
};
