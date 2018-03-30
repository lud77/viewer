const express = require('express');

const app = express();

app.disable('etag');

app.get('/', viewer);

const server = app.listen(process.env.PORT || 29292, () => {
  logger.info('Listening on port ' + server.address().port);
});

module.exports = server;
