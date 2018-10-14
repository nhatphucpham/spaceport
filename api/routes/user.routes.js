'use strict';

module.exports = function (app) {
  const UserController = require('../controllers/users.controller');
  var userList = new UserController();

  app.route('/users')
    .get(userList.get_all)
    .post(userList.create_a_model);


  app.route('/users/:userid')
    .get(userList.get_a_model)
    .put(userList.update_a_model)
    .delete(userList.delete_a_model);
};