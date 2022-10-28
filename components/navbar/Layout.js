import React, { useState, useEffect, } from "react";
import { Box } from "./Box.js";
import { throttle } from "../../utils/customHooks/throttle.js";

export const Layout = ({ children, toggler }) => {
    const [offsetY, setOffsetY] = useState(window?.scrollY);
    const [dynamoStyle, setDynamoStyle] = useState({});

    const throttleScrolling = throttle((scrollY) => {
        setOffsetY((prev) => {
            if (prev > scrollY) {
                // console.log('scroll up');
                setDynamoStyle({
                    transform: 'translateY(0px)',
                })

            } else {
                // console.log('scroll down');
                setDynamoStyle({
                    transform: 'translateY(-100%)',
                })
            }
            return scrollY;
        });

    }, 1000);

    useEffect(() => {
        window?.addEventListener('scroll', (e) => { throttleScrolling(e.currentTarget.scrollY) });
    }, []);

    return (
        <Box
            css={{
                maxW: "100%",
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 999,
                transition: 'all ease 0.3s',
                transform: `${toggler ? 'translateY(0px)' : dynamoStyle?.transform}`,
            }}

        >
            {children}

        </Box>
    );
};