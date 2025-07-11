import {
  BookMarked,
  CircleHelp,
  ClipboardList,
  EarthLock,
  GraduationCap,
  Grid3X3,
  ImagePlus,
  ListChecks,
  MessagesSquare,
  MousePointerClick,
  PlugZap,
  RadioTower,
  SlidersHorizontal,
} from "lucide-react";
import { StaticImageData } from "next/image";

export interface CardProps {
  href: string;
  icon: any;
  imageAlt: string;
  imageSrc: string | StaticImageData;
  text: string;
  text2?: string;
  title: string;
}

export const publicPrefix =
  process.env.NODE_ENV === "development" ? "@/public" : "";

export const experienceCards =  [
  {
    href: "https://www.qualtrics.com",
    icon: <ClipboardList size={"5dvh"} />,
    imageAlt: "Logo of Qualtrics",
    imageSrc: `${publicPrefix}/qualtrics-logo.png`,
    text: "Experience Management",
    text2: "Software Engineer II",
    title: "Qualtrics",
  },
  {
    href: "https://www.willbert.tech",
    icon: <PlugZap size={"5dvh"} />,
    imageAlt: "Logo of WILLBERT by Euroloop",
    imageSrc: `${publicPrefix}/willbert-logo.png`,
    text: "E-Mobility",
    text2: "Backend software developer",
    title: "WILLBERT by Euroloop",
  },
  {
    href: "https://www.f5.com",
    icon: <EarthLock size={"5dvh"} />,
    imageAlt: "Logo of F5 networks",
    imageSrc: `${publicPrefix}/f5-logo-rgb.png`,
    text: "Cloud security",
    text2: "Software Engineer II",
    title: "F5 networks",
  },
  {
    href: "https://www.motorolasolutions.com",
    icon: <RadioTower size={"5dvh"} />,
    imageAlt: "Logo of Motorola Solutions",
    imageSrc: `${publicPrefix}/motorola-logo.png`,
    text: "Mission Critical technology",
    text2: "Software Developer",
    title: "Motorola Solutions",
  },
];

export const educationCards = [
  {
    href: "https://www.uj.edu.pl/",
    icon: <GraduationCap size={"5dvh"} />,
    imageAlt: "Logo of the Jagiellonian University",
    imageSrc: `${publicPrefix}/uj-logo.png`,
    text: "Applied Computer Science",
      text2: "Master",
      title: "Jagiellonian University",
  },
  {
    href: "https://www.agh.edu.pl/",
    icon: <BookMarked size={"5dvh"} />,
      imageAlt: "Logo of AGH University of Cracow",
      imageSrc: `${publicPrefix}/agh-logo.png`,
      text: "Electronics and Telecom",
      text2: "Engineer",
      title: "AGH University",
    },
  ];

export const projectCards = [
  {
    href: "https://krzysztofkrol.dev/goofy-slider",
    icon: <SlidersHorizontal size={"5dvh"} />,
    imageAlt: "Logo of Goofy Slider",
    imageSrc: `${publicPrefix}/goofy-slider-logo.png`,
    text: "A simple game challenge",
    text2: "Express.js",
    title: "Goofy Slider",
  },
  {
    href: "https://krzysztofkrol.dev/tic-tac-toe",
    icon: <Grid3X3 size={"5dvh"} />,
    imageAlt: "Logo of Tic Tac Toe",
    imageSrc: `${publicPrefix}/tic-tac-toe-logo.png`,
    text: "With move history",
    text2: "React.js, Python (Flask)",
    title: "Tic Tac Toe",
  },
  {
    href: "https://krzysztofkrol.dev/moomin-chaser",
    icon: <MousePointerClick size={"5dvh"} />,
    imageAlt: "Logo of Moomin Chaser",
    imageSrc: `${publicPrefix}/moomin-chaser-logo.png`,
    text: "A dedicated chasing game",
    text2: "Next.js",
    title: "Moomin Chaser",
  },
  {
    href: "https://krzysztofkrol.dev/cursum",
    icon: <CircleHelp size={"5dvh"} />,
    imageAlt: "Logo of Cursum",
    imageSrc: `${publicPrefix}/cursum-logo.png`,
    text: "A quizz web app",
    text2: "React.js, Nginx",
    title: "Cursum",
  },
  {
    href: "https://krzysztofkrol.dev/todo",
    icon: <ListChecks size={"5dvh"} />,
    imageAlt: "Logo of Todo",
    imageSrc: `${publicPrefix}/todo-logo.png`,
    text: "A simple TODO list",
    text2: "HTMX, FastAPI",
    title: "TODO",
  },
  {
    href: "https://krzysztofkrol.dev/chatter",
    icon: <MessagesSquare size={"5dvh"} />,
    imageAlt: "Logo of Chatter",
    imageSrc: `${publicPrefix}/chatter-logo.png`,
    text: "ChatGPT-powered chatbot",
    text2: "React.js, Python (FastAPI + Flask)",
    title: "Chatter",
  },
  {
    href: "https://krzysztofkrol.dev/dreamer",
    icon: <ImagePlus size={"5dvh"} />,
    imageAlt: "Logo of AI Image Generator",
    imageSrc: `${publicPrefix}/ai-image-generator-logo.png`,
    text: "Possible thanks to Dall-e",
    text2: "Express.js",
    title: "AI Image Generator",
  },
];
