const controller = require('../controllers/consultasController');
module.exports = (app) => {
  app.get('/agendamentos', controller.buscarConsultas);
  app.get('/agendamentos/pendentes/medico/:id', controller.buscarConsultasPendentesPorMedico);
  app.post('/agendamentos/consultas', controller.agendarConsultas);
}