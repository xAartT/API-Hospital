const controller = require('../controllers/pacientesController');
module.exports = (app) => {
  app.get('/cadastrarPaciente', controller.cadastrarPaciente);
};