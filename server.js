const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('./mongoDB');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: String,
  password: String
});

var User = mongoose.model('coderx', UserSchema);


app.get('/', function (req, res) {
  User.find({}, function (err, users) {
    var user = [
      {
        name: 'tuan anh',
        age: 23
      }
    ];
    res.send(user);
  });

})
app.listen(port, () => console.log(`Example app listening on port port!`));