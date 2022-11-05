import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { throttle } from '../utils/customHooks/throttle';
import { debounce } from '../utils/customHooks/debounce';
import { getVisitors } from '../action/getVisitors';


const Testing = () => {
    // const [windowSize, setWindowSize] = useState(window?.innerWidth);
    // const [name, setName] = useState('')

    // const throttleWindowSize = throttle(() => {
    //     setWindowSize(window?.innerWidth);
    // }, 2500)

    // const debounceUpdate = debounce((text) => {
    //     setName(()=>text);
    // }, 2000);

    // useEffect(() => {
    //     if (window !== 'undefined') {
    //         window?.addEventListener('resize', () => throttleWindowSize())
    //     }
    // }, []);

    useEffect(() => {
        getVisitors();
    }, [])

    return (
        <div>
        </div>
    )
}

export default dynamic(() => Promise.resolve(Testing), { ssr: false })