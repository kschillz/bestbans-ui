const { verifyKey } = require('discord-interactions')

module.exports = (req, res) => {
    console.log(req.headers);
    console.log(req.query);
    console.log(req.body);
    console.log(process.env['DISCORD_PUBLIC_KEY'])
    res.json({
        body: req.body,
        query: req.query,
        cookies: req.cookies,
    })
}