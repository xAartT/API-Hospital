const controller = require('../controllers/cadastrarPaciente.js');
module.exports = (app) => {
  app.get('/cadastrarPaciente', controller.cadastrarPaciente);
};