

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
        name: req.body.name || '',
        tag: req.body.tag || 'Web',
        content: req.body.content || '',
        lessonCount: 0,
    };
    course.find(function (err, data){
        body.num = data.length + 1;
        course.create(body, (err, data1) => {
            if (err) console.log(err);
            res.status(200).send({
                ok: true,
                msg: 'create success',
                data: data1
            });
        });
    });
   
};

module.exports.getCourseAndLesson = function(req, res) {
course.findById(req.params.courseId, function(err, data){
    if(err) console.log(err);
    lesson.find({courseId : data._id}, function(err1, data1){
        res.status(200).send({
            ok: true,
            msg : 'Success',
            data : {
                course : data,
                lesson  : data1
            }
        });
    });
   
});
}

module.exports.update = function (req, res) {
    course.findByIdAndUpdate(req.params.courseId, req.body, { new: true }, function (err, data) {
        if (err) console.log(err);
        res.status(200).send({
            ok: true,
            msg: 'ok',
            data: data
        });
    });
}

module.exports.createLesson = function (req, res) {
    const body = {
        name: req.body.name || '',
        content: req.body.content || '',
        exNum: 0,
        youtubeUrl: req.body.youtubeUrl || '',
        courseId: req.body.courseId,
        exercise: []
    };

    course.findById(req.body.courseId, (err, data) => {
        // course.findByIdAndUpdate(req.body.courseId, { lessonCount: data.lessonCount + 1 }, { new: true }, (err, model) => {
        //     if (err) console.log(err);
        //     body.num = data.lessonCount + 1;
        // });
        data.lessonCount += 1;
        body.num = data.lessonCount - 1;
        lesson.create(body, (err, data1) => {
            if (err) console.log(err);
            console.log(body);
            res.status(200).send({
                ok: true,
                msg: 'Successfully',
                data: data1
            });
        });
        data.save();
    });


}

module.exports.updateLesson = function (req, res) {
    lesson.findByIdAndUpdate(
        req.params.lessonId, req.body, { new: true }, function (err, data) {
            if (err) console.log(err);
            res.status(200).send({
                ok: true,
                msg: 'Success',
                data: data
            })
        }
    );
}

module.exports.delete = function (req, res) {
    course.remove({ _id: req.params.courseId }, function (err, data) {
        if (err) console.log(err);
        res.status(200).send({
            ok: true,
            msg: 'delete success',
            data: data
        });
    });
};

module.exports.deleteLesson = function (req, res) {
    lesson.remove({ _id: req.params.lessonId }, function (err, data) {
        if (err) console.log(err);
        res.status(200).send({
            ok: true,
            msg: 'delete success',
            data: data
        });
    });
};

module.exports.getLessonOfCourse = function (req, res) {
    var courseId = req.params.courseId;
    lesson.find(function (err, data) {
        if (err) return console.log(err);
        var lesson = data.filter((item) => item.courseId === courseId);
        res.status(200).send({
            ok: true,
            msg: "Get lesson successfully!!",
            data: lesson
        });
    });
};

module.exports.getLessonDetail = function (req, res) {
    lesson.findById(req.params.lessonId, function (err, data) {
        if (err) console.log(err);
        res.status(200).send({
            ok: true,
            msg: "Get lesson detail successfully",
            data: data
        });
    })
};

module.exports.createExercise = function (req, res) {
    lesson.findById(req.params.lessonId, function (err, data){
        if(err) console.log(err);
        data.exercise.push(...req.body);
        data.save();
        res.status(200).send({
            ok: true,
            msg : 'Success',
            data: data
        });
    });
    
};














