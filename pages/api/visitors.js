import cookie from 'cookie';
import Models from '../../server/models';
import ip from '../../server/helper/ip';

const { IpModel } = Models;

async function handler(req, res) {
    const reqCookie = cookie.parse(req?.headers?.cookie || '');
    const clientIp = ip.getIp.apply(req);
    console.log('cookie', reqCookie);

    try {
        const foundIp = await IpModel.findOne({ ip: clientIp }).exec();
        if (foundIp) {
            foundIp.hitted = foundIp.hitted + 1;
            let result = await foundIp.save();
            if (!(reqCookie && Object.keys(reqCookie).length !== 0)) {
                res.setHeader('Set-Cookie', cookie.serialize('gtk', `${result._id}`));
            }
            let data = await countingVisitors(clientIp, foundIp.hitted);
            return res.send(data);

        } else {
            if (reqCookie && Object.keys(reqCookie).length !== 0) {
                const foundIpByCookie = await IpModel.findOne({ _id: reqCookie?.gtk }).exec();
                if (foundIpByCookie) {
                    foundIpByCookie.hitted = foundIpByCookie.hitted + 1;
                    await foundIpByCookie.save();
                    let data = await countingVisitors(clientIp, foundIpByCookie.hitted);
                    return res.send(data);

                } else {
                    return res.status(403).json({ error: 'invalid cookie.' });
                }
            } else {
                const newIp = new IpModel({ ip: clientIp, hitted: 1 });
                let result = await newIp.save();
                res.setHeader('Set-Cookie', cookie.serialize('gtk', `${result._id}`));
                let data = await countingVisitors(clientIp, result.hitted);
                return res.send(data);
            }
        }

    } catch (err) {
        console.log(err.message);
        return res.status(500).json({ error: err.message });
    }
};

async function countingVisitors(ip, hitted) {
    let data = {};
    const totalUniqueVisit = await IpModel.count({});
    data.totalUniqueVisit = totalUniqueVisit;
    data.ip = ip;
    data.apiHit = hitted;
    return data;
}
export default handler