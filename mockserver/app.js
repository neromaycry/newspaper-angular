let express = require('express'),
    app = express(),
    _ = require('lodash'),
    fs = require('fs');

const PORT = 3000,
    DICT = {
        [`/newslist`]: {
            GET: 'data/newslist.json'
        }
    };

app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

_.forEach(DICT, (v, k) => {
    _.forEach(v, (file, method) => {
        method = method.toLowerCase();
        app[method](k, (req, res) => {
            fs.exists(file, () => {
                fs.readFile(file, 'utf-8', (err, data) => {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(data);
                });
            });
            console.log(_.padStart(req.method, 4, ' '), k);
        })
    })
})

let server = app.listen(PORT, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log(`Mockserver listening at http://${host}:${port}`);
});
