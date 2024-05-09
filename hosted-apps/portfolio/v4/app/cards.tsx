import willbertLogo from "@/assets/willbert-logo.png"
import f5Logo from "@/assets/f5-logo-rgb.png"
import motorolaLogo from "@/assets/motorola-logo.png"
import ujLogo from "@/assets/uj-logo.png"
import aghLogo from "@/assets/agh-logo.png"
import goofyLogo from "@/assets/goofy-slider-logo.png"
import generatorLogo from "@/assets/ai-image-generator-logo.png"
import tictactoeLogo from "@/assets/tic-tac-toe-logo.png"
import cursumLogo from "@/assets/cursum-logo.png"
import chatterLogo from "@/assets/chatter-logo.png"

import { BookMarked, CircleHelp, EarthLock, GraduationCap, Grid3X3, ImagePlus, MessagesSquare, PlugZap, RadioTower, SlidersHorizontal } from "lucide-react";
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
        text2: "Backed software developer",
        title: "WILLBERT by Euroloop",
    },
    {
        href: "https://www.f5.com",
        icon: <EarthLock size={50}/>,
        imageAlt: "Logo of F5 networks",
        imageSrc: f5Logo,
        text: "Cloud security",
        text2: "Software Engineer II",
        title: "F5 networks",
    },
    {
        href: "https://www.motorolasolutions.com",
        icon: <RadioTower size={50}/>,
        imageAlt: "Logo of Motorola Solutions",
        imageSrc: motorolaLogo,
        text: "Mission Critical technology",
        text2: "Software Developer",
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
        text2: "Master",
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

export const projectCards: CardProps[] = [
    {
        href: "http://67.207.78.202:5001",
        icon: <SlidersHorizontal size={50}/>,
        imageAlt: "Logo of Goofy Slider",
        imageSrc: goofyLogo,
        text: "A simple game challange",
        text2: "Express.js",
        title: "Goofy Slider",
    },
    {
        href: "http://67.207.78.202:5004",
        icon: <ImagePlus size={50}/>,
        imageAlt: "Logo of AI Image Generator",
        imageSrc: generatorLogo,
        text: "Possible thanks to Dall-e",
        text2: "Express.js",
        title: "AI Image Generator",
    },
    {
        href: "http://67.207.78.202:5000",
        icon: <Grid3X3 size={50}/>,
        imageAlt: "Logo of Tic Tac Toe",
        imageSrc: tictactoeLogo,
        text: "With move history",
        text2: "React.js, Python (Flask)",
        title: "Tic Tac Toe",
    },
    {
        href: "http://67.207.78.202:5173",
        icon: <MessagesSquare size={50}/>,
        imageAlt: "Logo of Chatter",
        imageSrc: chatterLogo,
        text: "ChatGPT-powered chatbot",
        text2: "React.js, Python (FastAPI + Flask)",
        title: "Chatter",
    },
    {
        href: "http://67.207.78.202",
        icon: <CircleHelp size={50}/>,
        imageAlt: "Logo of Cursum",
        imageSrc: cursumLogo,
        text: "A minimal quizz web app",
        text2: "React.js, Nginx",
        title: "Cursum",
    },
]