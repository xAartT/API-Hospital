const controller = require('../controllers/itensController');
module.exports = (app) => {
  app.get('/itens', controller.buscarItensCadastrados);
  app.get('/tipos', controller.buscarTiposCadastrados);
  app.post('/cadastrar/item', controller.cadastrarItens);
  app.post('/cadastrar/tipo', controller.cadastrarTipos);
};