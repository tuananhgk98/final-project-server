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
