import axios from "axios";

async function handeler(req, res) {
    const { url } = req?.query;
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
}

export default handeler;