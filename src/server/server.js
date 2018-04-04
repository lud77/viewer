const express = require('express');
const path = require('path');
const fs = require('fs');

//const viewerControllerFactory = require('../controllers/viewer');

const app = express();

//const { viewer } = viewerControllerFactory();

app.disable('etag');

app.use('/', express.static(path.join(__dirname, '../../dist')));
app.use('/assets', express.static(path.join(__dirname, '../../assets')));

app.get('/map', (req, res) => {
    const map = fs.readFileSync(path.join(__dirname, '../../maps/maze5.txt')).toString('utf-8');
    res.send(map);
});

const server = app.listen(process.env.PORT || 2327, () => {
    console.log('Listening on port ' + server.address().port);
});

module.exports = server;
