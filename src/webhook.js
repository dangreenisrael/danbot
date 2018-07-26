const webhook = (req, res) => {
  console.log(JSON.stringify(req.body));
  res.send();
};

module.exports = webhook;
