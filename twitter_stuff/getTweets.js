const fetch = require('node-fetch');

const token = "AAAAAAAAAAAAAAAAAAAAADfgJAEAAAAA6xFb2NTV9W4pENarUXDaLsY1XuM%3Dq64CpklRlWzhJebR6oWtb5eOd0Ug33ZghjpXhjn5ouuMdBydk6";

async function getTweetRequest() {

    // Edit query parameters below
    var query = 'from:NWS'
    var tweet_fields = 'author_id';
    const endpointUrl = `https://api.twitter.com/2/tweets/search/recent?query=${encodeURIComponent(query)}&tweet.fields=${tweet_fields}`


    const res = await fetch(endpointUrl, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    if (res.status != 200) {
        console.log(await res.text())
        throw new Error("Not 200 Response; got " + res.status);
    }
    const body = await res.json();
    return body.data;
}


module.exports = {
    getTweetRequest
}