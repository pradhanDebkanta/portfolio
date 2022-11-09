import Models from '../../server/models';
import ip from '../../server/helper/ip';

const { IpModel } = Models;

async function handler(req, res) {

    if (req.method === "GET") {
        const reqCookie = req.headers['x-token'];
        const clientIp = ip.getIp.apply(req);
        const { token } = req?.query;
        if (token === undefined || token !== process.env.NEXT_PUBLIC_API_TOKEN) {
            return res.status(401).json({ error: 'unAuthorized request!' });
        }
        // console.log('cookie', reqCookie);

        try {
            const foundIp = await IpModel.findOne({ ip: clientIp }).exec();
            if (foundIp) {
                foundIp.hitted = foundIp.hitted + 1;
                let result = await foundIp.save();
                if (reqCookie == 'undefined') {
                    console.log(result._id, 'result_id');
                    res.setHeader('x-token', result._id);
                }
                let data = await countingVisitors(clientIp, foundIp.hitted);
                return res.send(data);

            } else {
                if (reqCookie !== 'undefined') {
                    const foundIpByCookie = await IpModel.findOne({ _id: reqCookie }).exec();
                    if (foundIpByCookie) {
                        foundIpByCookie.hitted = foundIpByCookie.hitted + 1;
                        await foundIpByCookie.save();
                        let data = await countingVisitors(clientIp, foundIpByCookie.hitted);
                        return res.send(data);

                    } else {
                        return res.status(400).json({ error: 'invalid cookie.' });
                    }
                } else {
                    const newIp = new IpModel({ ip: clientIp, hitted: 1 });
                    let result = await newIp.save();
                    res.setHeader('x-token', result._id);
                    let data = await countingVisitors(clientIp, result.hitted);
                    return res.send(data);
                }
            }

        } catch (err) {
            console.log(err.message);
            return res.status(500).json({ error: err.message });
        }
    } else {
        res.status(405).json({ error: 'invalid method!' })
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