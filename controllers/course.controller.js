

var course = require('../models/course.model');
var lesson = require('../models/lesson.model');


module.exports.getAllCourse = function (req, res) {
    course.find(function (err, data) {
        if (err) return console.log(err);
        res.status(200).send({
            ok: true,
            msg: "Get all course successfully!!",
            data: data
        });
    });
};

module.exports.create = function (req, res) {
    const body = {
        name : req.body.name || '',
        tag: req.body.tag || '',
        description: req.body.description || '',
        lessonCount: req.body.lessonCount || 20,
        createdOn: req.body.createdOn || ''
    };
    course.create(body, (err, data) => {
        if(err) console.log(err);
        res.status(200).send({
            ok : true,
            msg : 'create success',
            data: data
        });
    });
};

module.exports.delete = function (req, res) {
    course.remove({_id : req.params.courseId}, function (err, data)  {
        if(err) console.log(err);
        res.status(200).send({
            ok : true,
            msg : 'delete success',
            data: data
        });
    });
};

module.exports.getLessonOfCourse = function (req, res) {
    var courseId = req.params.courseId;
    lesson.find(function (err, data){
        if (err) return console.log(err);
        var lesson = data.filter((item) => item.courseId === courseId);
        res.status(200).send({
            OK: true,
            Message: "Get lesson successfully!!",
            data: lesson
        });
    });
};












