// const axios = require('axios');

exports.handler = async function(event, context) {
    // const { role, queue, tier } = event.queryStringParameters;
    // console.log(role, queue, tier);
    // const blitzUrl = 'https://flash.blitz.gg/graphql';
    // const graphQlQuery = 'query ($region: String, $language: String, $queue: Int, $tier: String, $role: String, $patch: String) { lolChampionsListOverview(region: $region, language: $language, queue: $queue, tier: $tier, role: $role, patch: $patch) { champion_id champion { name key } role tier total_game_count stats { winRate pickRate banRate games } } }';
    // const queryVariables = `{{"language":"en","role":"${role}","region":"world","queue":${queue},"tier":"${tier}","patch":"11.6"}}`;
    // const response = await axios.get(blitzUrl, {
    //     params: {
    //         query: graphQlQuery,
    //         variables: queryVariables
    //     }
    // })
    // console.log(response);
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Brand" })
    };
}