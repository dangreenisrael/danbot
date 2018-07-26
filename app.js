const express = require('express');

const welcome = require('./src/welcome');
const webhook = require('./src/webhook');

const PORT = process.env.PORT || 5000;

const app = express();
app
  .use(express.json())
  .get('/', welcome)
  .post('/webhook', webhook)
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

require('./src/welcome');
