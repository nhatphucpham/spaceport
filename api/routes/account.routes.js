'use strict';

module.exports = function (app) {
  var AccountController = require('../controllers/accounts.controller');
  var accountList = new AccountController();

  app.route('/accounts')
    .get(accountList.get_all)
    .post(accountList.create_a_model);


  app.route('/accounts/:id')
    .get(accountList.get_a_model)
    .put(accountList.update_a_model)
    .delete(accountList.delete_a_model);
};