const user = require('../components/user/network');

const router = function(server) {
  server.use('/user', user);
};

module.exports = router;

