'use strict';
module.exports = function(app) {
  var accountList = require('../controllers/accounts.controller');

  // todoList Routes
  app.route('/accounts')
    .get(accountList.get_all)
    .post(accountList.create_a_model);


  app.route('/accounts/:id')
    .get(accountList.get_a_model)
    .put(accountList.update_a_model)
    .delete(accountList.delete_a_model);
};