import React, { useState, useEffect, useCallback } from "react";
import { Box } from "./Box.js";

export const Layout = ({ children }) => {
    const [offsetY, setOffsetY] = useState(window?.scrollY);
    const [dynamoStyle, setDynamoStyle] = useState({});
    const [debounceStyle, setDebounceStyle] = useState(dynamoStyle);

    const scrolling = useCallback(e => {
        let currScroll = e.currentTarget.scrollY;
        // console.log(currScroll, 'scrolling',offsetY);
        if (offsetY > currScroll) {
            // console.log('scroll up');
            setDynamoStyle({
                position: 'sticky',
                top: 0,
                zIndex: 999,
            });
        } else {
            // console.log('scroll down');
            setDynamoStyle({});
        }
        setOffsetY(currScroll);

    }, [offsetY]);

    useEffect(() => {
        window?.addEventListener('scroll', scrolling, { passive: true })
        return () => window?.removeEventListener('scroll', scrolling)
    }, [offsetY]);

    useEffect(() => {
        if (JSON.stringify(dynamoStyle) !== JSON.stringify(debounceStyle)) {
            // console.log('actual style change');
            setDebounceStyle(dynamoStyle);
        }
    }, [dynamoStyle])

    return (
        <Box
            css={{
                maxW: "100%",
                ...debounceStyle
            }}
        >
            {children}
        </Box>
    );
};