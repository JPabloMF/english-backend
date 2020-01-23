const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function(req, res) {
  const { email, password } = req.body;
  controller
    .addUser(email, password)
    .then((data) => {
      response.success(req, res, 201, data);
    })
    .catch((error) => {
      response.error(req, res, 500, error);
    });
});

router.get('/', function(req, res) {
});

module.exports = router;
