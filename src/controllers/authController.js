const authServices = require('../services/authService');

exports.login = async (req, res) => {
  const { login, senha } = req.body;

  try {
    const usuario = await authServices.authUser(login, senha);

    if (!usuario) {
      return res.status(401).json({ error: 'Login ou senha inválidos' });
    }

    res.json({
      message: 'Login realizado com sucesso',
      usuario: {
        id: usuario.id,
        login: usuario.login
      }
    });
  } catch (err) {
    console.error('Erro no login:', err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};
