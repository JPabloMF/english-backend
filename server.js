const express = require('express');
const router = require('./network/routes');
const db = require('./db');

db(
  'mongodb+srv://db_user_mf:pyv99439E861Ukq0@cluster0-aprtj.mongodb.net/linkglish?retryWrites=true&w=majority'
);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
router(app);

app.listen(8000);
console.log('Listen on http://localhost:8000');
