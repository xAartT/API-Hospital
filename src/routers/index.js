const consultas = require('./consultasRouter');
const pacientes = require('./pacientesRouter');
const medicos = require('./medicosRouter');
const usuarios = require('./usuariosRouter');
<<<<<<< HEAD
const auth = require('./authRoutes');
=======
const pagamentos = require('./pagamentosRouter');
const itens = require('./itensRouter');
>>>>>>> e692e45fc6cb8925ae4775487c214fd137294794

module.exports = (app) => {
  consultas(app);
  pacientes(app);
  medicos(app);
  usuarios(app);
<<<<<<< HEAD
  auth(app);
=======
  pagamentos(app);
  itens(app);
>>>>>>> e692e45fc6cb8925ae4775487c214fd137294794
};
