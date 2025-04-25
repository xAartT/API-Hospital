const pool = require('../configs/index.js')

async function cadastrarPaciente (params) {
    const sql = 'insert into paciente (nome, cpf, usuario_id) values ($1, $2, $3)'
    const saida = await pool.query(sql, [params.nome, params.cpf, params.usuario_id])
    return saida;
}

module.exports = {
    cadastrarPaciente
};