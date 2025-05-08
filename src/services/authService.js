const pool = require('../configs/index');

exports.authUser = async (login, senha) => {
  try {
    const result = await pool.query(
      'SELECT * FROM usuario WHERE login = $1 AND senha = $2',
      [login, senha]
    );

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  } catch (err) {
    console.error('Erro na consulta de autenticação:', err);
    throw new Error('Erro ao autenticar usuário');
  }
};
