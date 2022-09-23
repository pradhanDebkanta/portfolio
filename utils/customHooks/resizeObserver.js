import React, { useState, useLayoutEffect } from "react";

export const useWindowSize = () => {
    const [size, setSize] = useState(window?.innerWidth);
    useLayoutEffect(() => {
        const resizer = () => {
            setSize(window?.innerWidth);
        };

        window.addEventListener('resize', resizer);
        return () => window.removeEventListener('resize', resizer);
    })

    return size;
}
