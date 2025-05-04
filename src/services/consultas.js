const pool = require('../configs/index.js')

async function buscarConsultas() {
    try {
        const result = await pool.query("SELECT * FROM agendamento WHERE agendamento.status = 'P'");
        return (result.rows); // array com os registros encontrados.
    } catch (error) {
        throw error;
    }
}

async function buscarConsultasPendentesPorMedico(medicoId) {
    try {
        const result = await pool.query(
            "SELECT * FROM agendamento WHERE agendamento.status = 'P' AND agendamento.medico_id = $1",
            [medicoId]
        );
        return result.rows;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    buscarConsultas, 
    buscarConsultasPendentesPorMedico
};
