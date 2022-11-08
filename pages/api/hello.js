import ip from '../../server/helper/ip';

async function handelers(req, res) {
    let clientIp = ip.getIp.apply(req);

    console.log(clientIp, 'client ip');

    let checkIP = {
        xcip: req.headers['x-client-ip'] || `req.headers['x-client-ip']`,
        cfcip: req.headers['cf-connecting-ip'] || `req.headers['cf-connecting-ip']`,
        fcip: req.headers['fastly-client-ip'] || `req.headers['fastly-client-ip']`,
        tcip: req.headers['true-client-ip'] || `req.headers['true-client-ip']`,
        xrip: req.headers['x-real-ip'] || `req.headers['x-real-ip']`,
        xccip: req.headers['x-cluster-client-ip'] || `req.headers['x-cluster-client-ip']`,
        xfip: req.headers['x-forwarded'] || `req.headers['x-forwarded']`,
        xffip: req.headers['forwarded-for'] || `req.headers['forwarded-for']`,
        fip: req.headers.forwarded || `req.headers.forwarded`,
        xauip: req.headers['x-appengine-user-ip'] || `req.headers['x-appengine-user-ip']`,
        rip: req.connection?.remoteAddress || `req.connection.remoteAddress`,
        raip: req.connection?.socket?.remoteAddress || `req.connection.socket.remoteAddress`,
        socraip: req.socket?.remoteAddress || `req.socket.remoteAddress`,
        iraip: req.info?.remoteAddress || `req.info.remoteAddress`,
        sorceip: req.requestContext?.identity?.sourceIp || `req.requestContext.identity.sourceIp`,
        cf: req.headers['Cf-Pseudo-IPv4'] || `req.headers['Cf-Pseudo-IPv4']`,
    };
    // console.log('ip', checkIP);
    res.send({ checkIP, clientIp })
};

export default handelers;