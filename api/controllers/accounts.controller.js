'use strict';

const controller = require('./core.controller'),
    mongoose = require('mongoose');

var AccountController = controller('Account');

AccountController.create_a_model = function (req, res) {
    let Account = mongoose.model('Account');
    var new_model = new Account(req.body);
    new_model.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
},

module.exports = AccountController;