const store = require('./store');
const validations = require('../../utils/validations');

function addUser(email, password) {
  if (!email || !password) {
    return Promise.reject('Email or Password is not correct.');
  } else if (!validations.validateEmail(email)) {
    return Promise.reject(`Email field doesn't contain and email.`);
  } else if (!validations.validatePasswordLength(password)) {
    return Promise.reject(`Password must have at least 6 characters.`);
  }
  return store.add(email, password);
}

function getUser(email, password) {
  if (!email || !password) {
    return Promise.reject('Email or Password is not correct.');
  } else if (!validations.validateEmail(email)) {
    return Promise.reject(`Email field doesn't contain and email.`);
  } else if (!validations.validatePasswordLength(password)) {
    return Promise.reject(`Password must have at least 6 characters.`);
  }
  return store.get(email, password);
}

module.exports = {
  addUser,
  getUser
};
