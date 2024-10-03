import { StaticImageData } from "next/image";

export interface MoominImageProps {
    imageAlt: string;
    imageSrc: string | StaticImageData;
}

export const publicPrefix =
    process.env.NODE_ENV === "development" ? "@/public" : "";

export const moominPrefix = publicPrefix + "/moomins"

export const moominImages: MoominImageProps[] = [
    {
        imageAlt: "Moomin0",
        imageSrc: `${moominPrefix}/moomin0.png`,
    },
    {
        imageAlt: "Moomin1",
        imageSrc: `${moominPrefix}/moomin1.png`,
    },
    {
        imageAlt: "Moomin2",
        imageSrc: `${moominPrefix}/moomin2.png`,
    },
    {
        imageAlt: "Moomin3",
        imageSrc: `${moominPrefix}/moomin3.png`,
    },
    {
        imageAlt: "Moomin4",
        imageSrc: `${moominPrefix}/moomin4.png`,
    },
    {
        imageAlt: "Moomin5",
        imageSrc: `${moominPrefix}/moomin5.png`,
    },
    {
        imageAlt: "Moomin6",
        imageSrc: `${moominPrefix}/moomin6.png`,
    },
    {
        imageAlt: "Moomin7",
        imageSrc: `${moominPrefix}/moomin7.png`,
    },
    {
        imageAlt: "Moomin8",
        imageSrc: `${moominPrefix}/moomin8.png`,
    },
    {
        imageAlt: "Moomin9",
        imageSrc: `${moominPrefix}/moomin9.png`,
    },
];
