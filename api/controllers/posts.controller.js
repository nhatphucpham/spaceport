'use strict';
var CoreController = require('./core.controller'),
  util = require('util'),
  mongoose = require('mongoose');

var PostController = function () {
  var Post = mongoose.model('Post');
  CoreController.call(this, Post);

  this.create_a_model = function (req, res) {
    var new_model = new Post(req.body);
    new_model.save(function (err, response) {
      if (err)
        res.send(err);
      res.json(response);
    });
  }
}

util.inherits(PostController, CoreController);

module.exports = PostController;