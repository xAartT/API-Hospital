const consultas = require('./consultasRouter');
const pacientes = require('./pacientesRouter');
const medicos = require('./medicosRouter');

module.exports = (app) => {
  consultas(app);
  pacientes(app);
  medicos(app);
};
