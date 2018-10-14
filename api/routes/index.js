module.exports = function (app) {
  var AccountRoutes = require('./account.routes');
  var UserRoutes = require('./user.routes');
  AccountRoutes(app);
  UserRoutes(app);
};