const consultas = require('./consultas');
const cadastrarPaciente = require('./pacientesController')

module.exports = (app) => {
  consultas(app);
  cadastrarPaciente(app);
  }