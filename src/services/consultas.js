const pool = require('../configs/index.js')

async function buscarConsultas() {
    try {
        const result = await pool.query("SELECT * FROM agendamento WHERE agendamento.status = 'P'");
        return (result.rows); // array com os registros encontrados.
    } catch (error) {
        throw error;
    }
}

module.exports = {
    buscarConsultas
};
