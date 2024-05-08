import profilePic from "@/assets/profile_pic.png";
import Image from "next/image";

export const Profile = () => {
  return (
    <Image
      src={profilePic}
      className="w-[8dvh] h-[8dvh] rounded-full outline outline-2 outline-black"
      alt="My profile photo."
    />
  );
};
