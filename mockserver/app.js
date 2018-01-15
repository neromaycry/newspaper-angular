let express = require('express'),
    app = express();

const PORT = 3000;

app.get('/', function (req, res) {
    res.send('Hello World!');
});

let server = app.listen(PORT, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log(`Mockserver listening at http://${host}:${port}`);
});
