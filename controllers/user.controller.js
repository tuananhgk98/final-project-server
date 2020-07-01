var user = require('../models/user.model');
var nodemailer = require('nodemailer');

const option = {
    service: 'gmail',
    auth: {
        user: 'anhtuangk98@gmail.com',
        pass: 'Anhh031198@@'
    }
};
var transporter = nodemailer.createTransport(option);
transporter.verify(function (error, success) {

    if (error) {
        console.log(error);
    } else {
        console.log('Kết nối thành công!');
    }
});

module.exports.forgotPassWord = function (req, res) {
   
    user.findOne({ userName: req.body.userName }, function (err, data) {
        if (err) console.log(err);
        let randomPwd = Math.random().toString(36).substring(7);
        data.pwd = randomPwd;
        data.save();
        var mailContent = {
            from: 'anhtuangk98@gmail.com',
            to: `${data.email}`,
            subject: `Welcome`,
            text: `Mật khẩu tạm thời của bạn là : ${data.pwd}, vui lòng đổi lại mật khẩu sau khi đăng nhập lại`,
            html: `<h3>Mật khẩu tạm thời của bạn là : ${data.pwd}, vui lòng đổi lại mật khẩu sau khi đăng nhập lại</h3>`
        };
        transporter.sendMail(mailContent, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).send({
                    ok: true,
                    msg: "send mail successfully!!",
                    data: info
                });
            }
        });
    });
}

module.exports.list = (req, res) => {
    user.find((err, data) => {
        if (err) return err;
        res.status(200).send({
            ok: true,
            message: 'Get list user successfully!',
            data: data
        });
    });
}

module.exports.get = function (req, res) {
    user.findById(req.params.userId, function (err, data) {
        if (err) console.log(err)
        res.status(200).send({
            ok: true,
            msg: 'Get user successfully',
            data: data
        });
    });
};

module.exports.update = function (req, res) {
    user.findByIdAndUpdate(req.params.userId, req.body, {new : true}, function (err, data){
        if(err) console.log(err);
        res.status(200).send({
            ok: true,
            msg: 'Update user successfully',
            data: data
        });
    });
}

module.exports.updatePwd = function (req, res) {
    user.findByIdAndUpdate(req.params.userId, {pwd : req.body.pwd}, {new : true}, function (err, data){
        if(err) console.log(err);
        res.status(200).send({
            ok: true,
            msg: 'Update password successfully',
            data: data
        });
    });
}

module.exports.updateLearned = function (req, res) {
    user.findByIdAndUpdate(req.params.userId, { learned: req.body }, { new: true }, function (err, data) {
        if (err) console.log(err);
        res.status(200).send({
            ok: true,
            msg: 'Update user successfully!!',
            data: data
        });
    });
};


