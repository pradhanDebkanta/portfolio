import cookie from 'cookie';
import Models from '../../server/models';

const { IpModel } = Models;

async function handler(req, res) {
    const reqCookie = cookie.parse(req?.headers?.cookie || '');
    const reqIp = req?.connection?.remoteAddress;
    // console.log(reqCookie, 'cookies');
    // console.log(reqIp, 'ip');

    try {
        const foundIp = await IpModel.findOne({ ip: reqIp || '' }).exec();
        if (foundIp) {
            // just update last visit time
            await IpModel.updateOne({ _id: foundIp._id }, { updatedAt: (new Date).toUTCString() });
            res.setHeader('Set-Cookie', cookie.serialize('gtk', 'duwihdwxbibkssuwh'));
        } else {
            if (reqCookie && Object.keys(reqCookie).length !== 0) {
                res.setHeader('Set-Cookie', cookie.serialize('gtk', 'duwihdwxbibkssuwh'));
            } else {
                const newIp = new IpModel({ ip: reqIp });
                newIp.save((err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(result, 'new record.');
                    }
                })
            }
        }
    } catch (err) {
        console.log(err.message);
    }

    res.status(200).json({ ip: reqIp });
}
export default handler