const Model = require('./model');

console.log('[db] Successfully connected');

function addUser(email, password) {
  const user = new Model({ email, password });
  return user.save();
}

function getUser(email, password) {
  return Model.find({ email, password });
}

module.exports = {
  add: addUser,
  get: getUser
};
