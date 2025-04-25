const consultasRoute = require('./consultas');
const cadastrarPaciente = require('./cadastrarPaciente')

module.exports = (app) => {
  consultasRoute(app);
  cadastrarPaciente(app);
}