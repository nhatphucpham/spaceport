'use strict';

const controller = require('./core.controller'),
    mongoose = require('mongoose');

var PostController = controller('Post');

PostController.create_a_model = function (req, res) {
    let Account = mongoose.model('Post');
    var new_model = new Post(req.body);
    new_model.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
},

module.exports = PostController;