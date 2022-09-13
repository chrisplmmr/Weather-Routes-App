const { getTweetRequest } = require('./getTweets');

(async () => {
    const res = await getTweetRequest();
    console.log(JSON.stringify(res));
})()