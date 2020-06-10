var mongoose = require('../mongoDB');
var Schema = mongoose.Schema;

var user = new Schema({
    name: String,
    userName: String,
    pwd: String,
    imageUrl: String
}, { collection: 'User' });

module.exports = mongoose.model('User', user);