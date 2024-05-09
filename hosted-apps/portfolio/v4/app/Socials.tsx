import Image from "next/image";
import githubLogo from "@/assets/github.png";
import linkedinLogo from "@/assets/linkedin.png";
import Link from "next/link";

export const Socials = () => {
  return (
    <div className="flex justify-evenly p-2">
      <Link href="https://github.com/krzkro4122" target="_blank">
        <Image
          src={githubLogo}
          alt="Github profile"
          className="max-h-14 max-w-min hover:scale-105 active:opacity-80"
        />
      </Link>
      <Link href="https://linkedin.com/in/krzysztof-krol1" target="_blank">
        <Image
          src={linkedinLogo}
          alt="LinkedIn profile"
          className="max-h-14 max-w-min hover:scale-105 active:opacity-80"
        />
      </Link>
    </div>
  );
};
