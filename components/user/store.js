const Model = require('./model');

console.log('[db] Successfully connected');

async function addUser(email, password) {
  const userSchema = new Model({ email, password });
  const user = Model.findOne({ email });
  return new Promise((resolve,reject)=> {
    if(user){
      reject('User already exist.');
    }else{
      resolve(userSchema.save());
    }
  })
}

function getUser(email, password) {
  return Model.find({ email, password });
}

module.exports = {
  add: addUser,
  get: getUser
};
