// import { NextRequest } from 'next/server';
import ip from 'ip';
import requestIp from 'request-ip';


async function handelers(req, res) {
    let clientIp = ip.address();
    let clientIp1 = requestIp.getClientIp(req);
    // console.log(clientIp, 'clientIp');
    // console.log(clientIp1, 'clientIp1');

    // res.send({
    //     ip: clientIp,
    //     requestIp: clientIp1
    // })
    // console.log(NextRequest.ip)
    let checkIP =  req.connection._peername;
    console.log('ip', checkIP);
    res.send({ ip: checkIP})
};

export default handelers;