

var course = require('../models/course.model');


module.exports.getAllCourse = function (req, res) {
    course.find(function (err, data) {
        if (err) return console.log(err);
        res.status(200).send({
            OK: true,
            Message: "Get all course successfully!!",
            data: data
        });
    });
};










