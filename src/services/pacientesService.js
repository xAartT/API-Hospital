const pool = require('../configs/index.js')

//****** CADASTRAR ******
async function cadastrarPaciente (params) {
    const sql = 'insert into paciente (nome, cpf, usuario_id) values ($1, $2, $3)'
    const saida = await pool.query(sql, [params.nome, params.cpf, params.usuario_id])
    return saida;
}

//****** BUSCAS ******
async function buscarPacientePorId(pacienteId) {
    try {
        const result = await pool.query(
            "SELECT * FROM paciente WHERE paciente.id = $1",
            [pacienteId]
        );
        return result.rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    cadastrarPaciente,
    buscarPacientePorId
};