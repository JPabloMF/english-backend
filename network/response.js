const error = (req, res, status, data) => {
  return res.status(status || 200).send({ error: true, data });
};

const success = (req, res, status, data) => {
  return res.status(status || 500).send({ error: false, data });
};

module.exports = { error, success };
