var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;


var course = new Schema({
    name: String,
    description: String,
    tag : String,
    lessonCount : Number,
    createdOn: String,

}, { collection: 'Course' });

module.exports = mongoose.model('Course', course);