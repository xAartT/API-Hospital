const consultasRoute = require('./consultas');

module.exports = (app) => {
  consultasRoute(app);
}