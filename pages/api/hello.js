// import { NextRequest } from 'next/server';
import ip from 'ip';


async function handelers(req, res) {
    let clientIp = ip.address();
    console.log(clientIp, 'ip')
    res.send(clientIp)
    // console.log(NextRequest.ip)
};

export default handelers;
