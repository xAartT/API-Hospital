const consultas = require('./consultasRouter');
const pacientes = require('./pacientesRouter');
const medicos = require('./medicosRouter');
const usuarios = require('./usuariosRouter');
const pagamentos = require('./pagamentosRouter');
const itens = require('./itensRouter');

module.exports = (app) => {
  consultas(app);
  pacientes(app);
  medicos(app);
  usuarios(app);
  pagamentos(app);
  itens(app);
};
