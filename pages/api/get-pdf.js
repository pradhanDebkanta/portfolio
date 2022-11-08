import axios from "axios";

async function handeler(req, res) {
    if (req.method === 'GET') {
        const { url, token } = req?.query;
        if (token === undefined || token !== process.env.NEXT_PUBLIC_API_TOKEN) {
            return res.status(401).json({ error: 'inAuthorized request!' });
        }

        if (url) {
            try {
                const pdf = await axios.get(url);
                res.status(200).send(pdf.data);
            } catch (e) {
                res.status(500);
            }
        } else {
            res.status(403).send(`invalid url.`)
        }
    } else {
        res.status(405).json({ error: 'invalid method!' })
    }
}

export default handeler;