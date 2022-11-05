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

    const [res, setRes] = useState({});

    useEffect(() => {
        getVisitors().then(data => {
            setRes(data);
        })
    }, [])

    return (
        <div style={{ marginTop: '100px' }}>
            <h2>
                total visit: {res?.totalUniqueVisit}
            </h2>
            <h2>
                ip: {res?.ip}
            </h2>
            <h2>
                api hit : {res?.apiHit}
            </h2>
        </div>
    )
}

export default dynamic(() => Promise.resolve(Testing), { ssr: false })