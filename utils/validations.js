const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function validateEmail(email){ 
  return EMAIL_REGEX.test(String(email).toLowerCase());
}

function validatePasswordLength(password){
  return password.length > 5
}

module.exports = {
  validateEmail,
  validatePasswordLength
};