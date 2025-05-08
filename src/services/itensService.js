const pool = require('../configs/index.js')

async function cadastrarItens (params) {
    const sql = 'insert into item (nome, valor, quantidade, tipo_id) values ($1, $2, $3, $4)'
    const saida = await pool.query(sql, [params.nome, params.valor, params.quantidade, params.tipo_id])
    return saida;
}

async function cadastrarTipos (params) {
    const sql = 'insert into tipo (descricao) values ($1)'
    const saida = await pool.query(sql, [params.descricao])
    return saida;
}

module.exports = {
    cadastrarItens,
    cadastrarTipos
};