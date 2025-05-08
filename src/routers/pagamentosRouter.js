const controller = require('../controllers/pagamentosController');
module.exports = (app) => {
  app.post('/cadastrar/pagamento', controller.cadastrarPagamento);
};