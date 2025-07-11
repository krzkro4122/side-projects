import { Profile } from "./Profile";
import { NameLabel } from "./NameLabel";
import { Socials } from "./Socials";
import { TTL } from "./TTL";

export const Header = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <div className="h-full w-full flex justify-between items-center px-2 gap-2 lg:px-5">
        <Profile />
        <div className="flex items-center gap-5">
          <NameLabel />
        </div>
        <div className="flex h-full justify-end items-end grow ">
          <TTL />
        </div>
        <div className="text-black flex-grow">
          <Socials />
        </div>
      </div>
    </div>
  );
};
