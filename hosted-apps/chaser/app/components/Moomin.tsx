import Image from "next/image";
import { MoominImageProps } from "../moomins";
import { MouseEventHandler, CSSProperties } from "react";

interface MoominProps {
    moomin: MoominImageProps;
    onMouseOver: MouseEventHandler<HTMLImageElement>;
    style: CSSProperties;
}

export const Moomin = ({ moomin, onMouseOver: onMouseOver, style }: MoominProps) => {
    return (
        <div style={style}>
            <Image
                id="moomin"
                width={500}
                height={500}
                src={moomin.imageSrc}
                alt={moomin.imageAlt}
                onMouseOver={onMouseOver}
                className="p-4 lg:p-4 max-h-36 lg:max-h-48 max-w-min"
            />
        </div>
    );
}
