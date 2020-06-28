var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;


var lesson = new Schema({
    name: String,
    courseId: String,
    content: String,
    exercise: Array,
    youtubeUrl: String,
    exNum : Number,
    num : Number

}, { collection: 'Lesson' });

module.exports = mongoose.model('Lesson', lesson);