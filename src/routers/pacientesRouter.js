const controller = require('../controllers/pacientesController');
module.exports = (app) => {
  app.post('/cadastrarPaciente', controller.cadastrarPaciente);
};