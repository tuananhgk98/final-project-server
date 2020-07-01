var user = require('../models/user.model');

module.exports.login = (req, res) => {
    let input = {
        userName: req.body.userName,
        pwd: req.body.pwd
    };
    user.find((err, data) => {
        if (err) console.log(err);
        let index = data.findIndex(function (i) {
            return i.userName === input.userName;
        });
        if (index !== -1 && input.pwd == data[index].pwd) {
            res.send({
                ok: true,
                msg: "login ok",
                data: data[index]
            });
        }
        else {
            res.send({
                ok: false,
                msg: "login error, user name or password is incorrect!! please try agin"
            });
        }
    });
};

module.exports.register = (req, res) => {
    user.find((err, data) => {
        if (err) console.log(err);
        if (data.find(i => i.userName === req.body.userName)) {
            res.send({
                ok: false,
                msg: 'Tài khoản đã tồn tại'
            })
        } else {
            let body = {
                name: req.body.name,
                imageUrl: req.body.imageUrl || 'https://astro.ca/wp-content/themes/astro/images/close-btn.svg',
                userName: req.body.userName,
                pwd: req.body.pwd || '12345678',
                email : req.body.email || '',
                phone : req.body.phone || 387306548,
                learned : {
                    course : [],
                    lesson : []
                }
            }
            user.create(body, (err, data) => {
                if (err) console.log(err);
                res.status(200).send({
                    ok: true,
                    msg: 'Đăng ký thành công',
                    data: data
                });
            });
        }
    });
};