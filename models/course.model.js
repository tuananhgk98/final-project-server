var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;


var course = new Schema({
    name: String,
    tag : String,
    lessonCount : Number,
    content : String,
    num : Number
}, { collection: 'Course' });

module.exports = mongoose.model('Course', course);