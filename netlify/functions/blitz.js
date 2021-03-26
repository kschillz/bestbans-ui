const tiers = {
    IRON: 'IRON',
    BRONZE: 'BRONZE',
    SILVER: 'SILVER',
    GOLD: 'GOLD',
    PLATINUM: 'PLATINUM',
    DIAMOND: 'DIAMOND',
    MASTER: 'MASTER',
    GRANDMASTER: 'GRANDMASTER',
    CHALLENGER: 'CHALLENGER',
    PLATINUM_PLUS: 'PLATINUM_PLUS',
};

const queues = {
    NORMAL_DRAFT: 400,
    RANKED_SOLO: 420,
    NORMAL_BLIND: 430,
    RANKED_FLEX: 440,
    ARAM: 450,
};

const roles = {
    ALL: 'ALL',
    TOP: 'TOP',
    JUNGLE: 'JUNGLE',
    MID: 'MID',
    ADC: 'ADC',
    SUPPORT: 'SUPPORT',
};

exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Brand" })
    };
}