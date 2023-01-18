let express = require('express');
let app = express();

// To load environment variables
require('dotenv').config();

// Serve Hello World to match the root /
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Serve static assets
app.use('/public', express.static(__dirname + '/public'));

//
app.get('/json', function (req, res) {
  const data = {
    message: 'Hello json',
  };

  // const messageStyle = process.env.MESSAGE_STYLE;
  const messageStyle = 'uppercase'; // Fake the environemt variable
  if (messageStyle === 'uppercase') {
    data.message = data.message.toUpperCase();
  }

  res.json(data);
});
module.exports = app;
