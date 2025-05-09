const pool = require('../configs/index.js')

//****** CADASTRO ******
async function cadastrarPagamento (params) {
    const sql = 'insert into pagamento (valor, tipo, data, hora, status) values ($1, $2, $3, $4, $5)'
    const saida = await pool.query(sql, [params.valor, params.tipo, params.data, params.hora, params.status])
    return saida;
}

//****** BUSCAS ******
async function buscarPagamentoPorId(pagamentoId) {
    try {
        const result = await pool.query(
            "SELECT * FROM pagamento WHERE pagamento.id = $1",
            [pagamentoId]
        );
        return result.rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    cadastrarPagamento,
    buscarPagamentoPorId
};