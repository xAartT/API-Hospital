const controller = require('../controllers/pagamentosController');
module.exports = (app) => {
  app.post('/cadastrar/pagamento', controller.cadastrarPagamento);
  app.get('/cadastrar/pagamento/:id', controller.buscarPagamentoPorId);
};