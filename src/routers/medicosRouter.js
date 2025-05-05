const controller = require('../controllers/medicosController');
module.exports = (app) => {
  app.get('/medicos', controller.cadastrarMedico);
}