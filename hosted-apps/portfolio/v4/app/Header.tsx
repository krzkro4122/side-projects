import { Profile } from "./Profile";
import { NameLabel } from "./NameLabel";
import { Socials } from "./Socials";

export const Header = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <div className="h-full w-full flex justify-between items-center px-5">
        <div className="flex items-center gap-5">
          <NameLabel />
        </div>
        <div className="text-black flex-grow">
          <Socials />
        </div>
        <Profile />
      </div>
    </div>
  );
};
