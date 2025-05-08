const consultas = require('./consultasRouter');
const pacientes = require('./pacientesRouter');
const medicos = require('./medicosRouter');
const usuarios = require('./usuariosRouter');
const auth = require('./authRoutes');

module.exports = (app) => {
  consultas(app);
  pacientes(app);
  medicos(app);
  usuarios(app);
  auth(app);
};
