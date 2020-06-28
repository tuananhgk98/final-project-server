var user = require('../models/user.model');

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
        })
    });
}
