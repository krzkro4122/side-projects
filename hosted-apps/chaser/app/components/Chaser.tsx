'use client';

import { useState, useEffect, useRef } from "react";
import { MoominImageProps, moominImages } from "@/app/moomins";
import { Moomin } from "@/app/components/Moomin";

export default function Chaser() {
    const [index, setIndex] = useState(0); // Track the current Moomin index
    const [positions, setPositions] = useState({ top: "0px", left: "0px" });
    const [displayedMoomin, setDisplayedMoomin] = useState<MoominImageProps>();
    const containerRef = useRef<HTMLDivElement>(null); // Reference for the chaser container
    const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null); // Timeout for debounce

    // Get random positions ensuring the image doesn't go out of bounds
    const getRandomPosition = () => {
        const container = containerRef.current;
        if (!container) return { top: "0px", left: "0px" };

        const containerHeight = container.offsetHeight;
        const containerWidth = container.offsetWidth;
        const imageSize = 500; // Assuming the image size is 500x500 as defined in the Moomin component

        const maxTop = containerHeight - imageSize;
        const maxLeft = containerWidth - imageSize;

        const top = Math.floor(Math.random() * maxTop) + "px";
        const left = Math.floor(Math.random() * maxLeft) + "px";

        return { top, left };
    };

    // Debounced function to iterate over Moomins and update the displayed image and position
    const debouncedIterateMoomins = () => {
        if (debounceTimeout) {
            clearTimeout(debounceTimeout); // Clear any existing timeout to debounce the event
        }

        const timeout = setTimeout(() => {
            const nextIndex = (index + 1) % moominImages.length;
            setIndex(nextIndex);
            setDisplayedMoomin(moominImages[nextIndex]);
            setPositions(getRandomPosition()); // Set a new random position
        }, 150); // 500ms debounce time

        setDebounceTimeout(timeout); // Store the timeout to clear it on the next event
    };

    // Initial setup to display the first Moomin and its position
    useEffect(() => {
        setDisplayedMoomin(moominImages[0]);
        setPositions(getRandomPosition()); // Initial random position
    }, []);

    return (
        <div
            id="chaser-canvas"
            className="flex-grow flex w-full rounded-md relative"
            style={{ height: '100vh' }}
            ref={containerRef} // Attach the reference to the container
        >
            {displayedMoomin && (
                <Moomin
                    moomin={displayedMoomin}
                    onMouseOver={debouncedIterateMoomins} // Trigger debounced position change on mouse down
                    style={{
                        position: "absolute",
                        top: positions.top,
                        left: positions.left,
                        transition: "top 0.5s, left 0.5s", // Smooth transition when the image moves
                    }}
                />
            )}
        </div>
    );
}
