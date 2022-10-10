async function handlers(req, res) {
    console.log(req)
    res.status(200).json({ name: 'hello' })
};

export default handlers;