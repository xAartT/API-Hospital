const controller = require('../controllers/itensController');
module.exports = (app) => {
  app.post('/cadastrar/item', controller.cadastrarItens);
  app.post('/cadastrar/tipo', controller.cadastrarTipos);
};