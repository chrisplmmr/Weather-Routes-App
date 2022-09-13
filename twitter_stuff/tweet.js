const express = require('express');
const http = require("http");
const path = require('path');
const host = 'localhost';
const { getTweetRequest } = require('./getTweets');
const port = process.env.PORT || "8000";

const app = express()
     

app.get('/twitter.php', async (req, res) => {
    var response = await getTweetRequest();
    res.json(response);
});

app.get('/', (req, res) => {
    return res.sendFile(path.join(process.cwd(), "WeatherMaps.html"));
})

app.use(express.static(process.cwd()));

  
app.listen(parseInt(port, 10), () => {
    console.log(`Example app listening at http://localhost:${port}`)
});