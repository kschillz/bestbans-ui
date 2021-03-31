const { verifyKey } = require('discord-interactions')

module.exports = (req, res) => {
    console.log(req.headers);
    console.log(req.query);
    console.log(req.body);
    const signature = req.headers['x-signature-ed25519'];
    const timestamp = req.headers['x-signature-timestamp'];
    console.log(signature, timestamp);
    console.log(process.env['DISCORD_PUBLIC_KEY']);
    const isValidRequest = verifyKey(req.body, signature, timestamp, process.env['DISCORD_PUBLIC_KEY'])
    if (!isValidRequest) {
        res.status(401).end('Bad request signature')
    }
    res.json({
        body: req.body,
        query: req.query,
        cookies: req.cookies,
    })
}