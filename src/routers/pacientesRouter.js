const controller = require('../controllers/pacientesController');
module.exports = (app) => {
  app.post('/cadastrar/paciente', controller.cadastrarPaciente);
  app.get('/paciente/:id', controller.buscarPacientePorId);
};