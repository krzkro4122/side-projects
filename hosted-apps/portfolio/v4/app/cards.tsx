import willbertLogo from "@/assets/willbert-logo.png"
import f5Logo from "@/assets/f5-logo-rgb.png"
import motorolaLogo from "@/assets/motorola-logo.png"
import ujLogo from "@/assets/uj-logo.png"
import aghLogo from "@/assets/agh-logo.png"
import { BookMarked, EarthLock, GraduationCap, PlugZap, RadioTower } from "lucide-react";
import { StaticImageData } from "next/image";

export interface CardProps {
    href: string;
    icon: any;
    imageAlt: string;
    imageSrc: StaticImageData;
    text: string;
    text2?: string;
    title: string;
  }

export const experienceCards: CardProps[] = [
    {
        href: "https://www.willbert.tech",
        icon: <PlugZap size={50}/>,
        imageAlt: "Logo of WILLBERT by Euroloop",
        imageSrc: willbertLogo,
        text: "E-Mobility",
        title: "WILLBERT by Euroloop",
    },
    {
        href: "https://www.f5.com",
        icon: <EarthLock size={50}/>,
        imageAlt: "Logo of F5 networks",
        imageSrc: f5Logo,
        text: "Cloud security",
        title: "F5 networks",
    },
    {
        href: "https://www.motorolasolutions.com",
        icon: <RadioTower size={50}/>,
        imageAlt: "Logo of Motorola Solutions",
        imageSrc: motorolaLogo,
        text: "Mission Critical technology",
        title: "Motorola Solutions",
    },
]

export const educationCards: CardProps[] = [
    {
        href: "https://www.uj.edu.pl/",
        icon: <GraduationCap size={50}/>,
        imageAlt: "Logo of the Jagiellonian University",
        imageSrc: ujLogo,
        text: "Applied Computer Science",
        text2: "Masters",
        title: "Jagiellonian University",
    },
    {
        href: "https://www.agh.edu.pl/",
        icon: <BookMarked size={50}/>,
        imageAlt: "Logo of AGH University of Cracow",
        imageSrc: aghLogo,
        text: "Electronics and Telecom",
        text2: "Engineer",
        title: "AGH University",
    },
]