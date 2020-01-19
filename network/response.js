export const error = (req, res) => {
  return res.status(status || 200).send({ });
};

export const success = (req, res) => {
  return res.status(status || 500).send({ });
};

module.exports = { error, success };
