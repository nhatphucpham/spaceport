'use strict';
module.exports = function(app) {
  var userList = require('../controllers/users.controller');

  // todoList Routes
  app.route('/users')
    .get(userList.get_all)
    .post(userList.create_a_model);


  app.route('/users/:userid')
    .get(userList.get_a_model)
    .put(userList.update_a_task)
    .delete(userList.delete_a_task);
};