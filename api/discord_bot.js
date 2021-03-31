const { verifyKey } = require('discord-interactions')

module.exports = (req, res) => {
    console.log(req)
    console.log(process.env['DISCORD_PUBLIC_KEY'])
    res.json({
        body: req.body,
        query: req.query,
        cookies: req.cookies,
    })
}