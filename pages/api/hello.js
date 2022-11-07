import { NextRequest } from 'next/server';


async function handelers(req, res) {
    let ip = req.headers['x-forwarded-for'];
    console.log(NextRequest.ip)
    // console.log(ip, 'ipp')
    res.send(ip)
};

export default handelers;

// https://drive.google.com/u/1/uc?id=1Slyc3nHOXcYbKnFi6BROmnyPj4DDFCKS&export=download