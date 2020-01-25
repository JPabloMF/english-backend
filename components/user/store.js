const Model = require('./model');

console.log('[db] Successfully connected');

async function addUser(email, password) {
  const userSchema = new Model({ email, password });
  const user = await Model.findOne({ email });
  return new Promise((resolve, reject) => {
    if (user) {
      reject('User already exist.');
    } else {
      resolve(userSchema.save());
    }
  });
}

async function getUser(email, password) {
  const user = await Model.findOne({ email, password });
  return new Promise((resolve, reject) => {
    if (user) {
      resolve({ access: true });
    } else {
      reject("This user doesn't exist.");
    }
  });
}

module.exports = {
  add: addUser,
  get: getUser
};
