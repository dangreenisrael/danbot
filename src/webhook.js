const prettyjson = require('prettyjson');

const webhook = (req, res) => {
  console.log(prettyjson.render(req.body));
  res.send();
};

module.exports = webhook;
