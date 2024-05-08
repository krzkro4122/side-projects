import { Profile } from "../assets/Profile";
import { NameLabel } from "./NameLabel";

export const Header = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <div className="h-full w-full flex justify-between items-center px-5">
        <div className="flex items-center gap-5">
          <Profile />
          <NameLabel />
        </div>
        <div className="text-black">
            Socials
        </div>
      </div>
    </div>
  );
};
