const express = require('express');
const app = express();

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    if (req.method == 'OPTIONS')
        res.sendStatus(200);
    else
        next();
});

app.post('', function (req, res) {
    var params;

    req.on('data', function(data) {
        params = JSON.parse(data);
    })

    req.on('end', function() {
        console.log("admin\n");
    })
    res.json({ title: "response" });
});

const server = app.listen(8080, function () {
    console.log('Express app server listening on port %d', server.address().port);
});

