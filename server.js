const express = require('express');
const router = require('./network/routes');
const db = require('./db');

db(
  'mongodb+srv://db_user_mf:pyv99439E861Ukq0@cluster0-aprtj.mongodb.net/linkglish?retryWrites=true&w=majority'
);

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
router(app);

app.listen(8000);
console.log('Listen on http://localhost:8000');
