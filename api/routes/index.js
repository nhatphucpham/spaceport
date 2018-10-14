module.exports = function (app) {
  let AccountRoutes = require('./account.routes');
  let UserRoutes = require('./user.routes');
  AccountRoutes(app);
  UserRoutes(app);
};