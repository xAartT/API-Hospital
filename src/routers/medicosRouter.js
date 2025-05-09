const controller = require('../controllers/medicosController');
module.exports = (app) => {
  app.post('/medicos', controller.cadastrarMedico);
  app.post('/medicos/cadastrar/especialidade', controller.cadastrarEspecialidade);
  app.get('/medico/:id', controller.buscarMedicoPorId);
}