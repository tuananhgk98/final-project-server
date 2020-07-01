var mongoose = require('../mongoDB');
var Schema = mongoose.Schema;

var user = new Schema({
    name: String,
    userName: String,
    pwd: String,
    imageUrl: String,
    learned : Object,
    email: String,
    phone : Number
}, { collection: 'User' });

module.exports = mongoose.model('User', user);