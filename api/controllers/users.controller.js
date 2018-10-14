'use strict';

const controller = require('./core.controller'),
    mongoose = require('mongoose');

var UserController = controller('User');

UserController.create_a_model = function (req, res) {
    let Account = mongoose.model('User');
    var new_model = new User(req.body);
    new_model.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
},

module.exports = UserController;