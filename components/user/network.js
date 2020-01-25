const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function(req, res) {
  const { email, password } = req.body;
  controller
    .addUser(email, password)
    .then(() => {
      response.success(req, res, 201, 'User was registered');
    })
    .catch((error) => {
      response.error(req, res, 500, error);
    });
});

router.get('/', function(req, res) {
  const { email, password } = req.body;
  controller
    .getUser(email, password)
    .then(() => {
      response.success(req, res, 201, { access: true });
    })
    .catch((error) => {
      response.error(req, res, 500, error);
    });
});

module.exports = router;
