const { verifyKey } = require('discord-interactions');

exports.handler = async function(event, context) {
    console.log(event);
    console.log(context);
    const signature = event.headers['x-signature-ed25519'];
    const timestamp = event.headers['x-signature-timestamp'];
    console.log(signature, timestamp);
    console.log(process.env['DISCORD_PUBLIC_KEY']);
    const isValidRequest = verifyKey(event.body, signature, timestamp, process.env['DISCORD_PUBLIC_KEY'])
    if (!isValidRequest) {
        return {
            statusCode: 401,
            body: 'Bad request signature'
        };
    }
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Brand" })
    };
}