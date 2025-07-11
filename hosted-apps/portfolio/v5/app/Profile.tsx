"use client";

import Image from "next/image";
import { publicPrefix } from "./cards";
import Link from "next/link";

export const Profile = () => {
  return (
    <Link
      className="shadow-lg border-2 border-black lg:max-h-[6dvh] lg:max-w-[6dvh] max-h-[7dvh] max-w-[7dvh] rounded-md hover:scale-105 hover:bg-gray-100 active:bg-gray-200"
      href="https://krzysztofkrol.dev"
      target="_blank"
    >
      <Image
        src={`${publicPrefix}/profile_pic.png`}
        className="p-1 z-10"
        alt="My profile photo."
      />
    </Link>
  );
};
