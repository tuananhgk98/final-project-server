var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;


var lesson = new Schema({
    name: String,
    courseId : String,
    description: String,
    exercise : Array,
    createdOn : String,
    UpdatedOn : String

}, { collection: 'Lesson' });

module.exports = mongoose.model('Lesson', lesson);