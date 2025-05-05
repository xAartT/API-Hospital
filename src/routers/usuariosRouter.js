const controller = require('../controllers/usuariosController');
module.exports = (app) => {
  app.post('/cadastrar/usuarios', controller.cadastrarUsuario);
}