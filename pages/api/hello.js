async function handler(req, res) {
    res.status(200).json({ name: 'hello' })
};

export default handler;