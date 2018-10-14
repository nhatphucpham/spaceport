'use strict';


var CoreController = require('./core.controller'),
  util = require('util'),
  mongoose = require('mongoose');

var UserController = function () {
  var User = mongoose.model('User');
  CoreController.call(this, User);

  this.create_a_model = function (req, res) {
    var new_model = new User(req.body);
    new_model.save(function (err, response) {
      if (err)
        res.send(err);
      res.json(response);
    });
  }
}

util.inherits(UserController, CoreController);

module.exports = UserController;