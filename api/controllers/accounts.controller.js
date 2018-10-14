'use strict';

var CoreController = require('./core.controller'),
  util = require('util'),
  mongoose = require('mongoose');

var AccountController = function () {
  var Account = mongoose.model('Account');
  CoreController.call(this, Account);

  this.create_a_model = function (req, res) {
    var new_model = new Account(req.body);
    new_model.save(function (err, response) {
      if (err)
        res.send(err);
      res.json(response);
    });
  };
}

util.inherits(AccountController, CoreController);

module.exports = AccountController;