const express = require('express');
const path = require('path');

//const viewerControllerFactory = require('../controllers/viewer');

const app = express();

//const { viewer } = viewerControllerFactory();

app.disable('etag');

app.use('/', express.static(path.join(__dirname, '../../dist')))

//app.get('/', viewer);

const server = app.listen(process.env.PORT || 80, () => {
    console.log('Listening on port ' + server.address().port);
});

module.exports = server;
