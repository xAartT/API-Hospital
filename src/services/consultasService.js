const pool = require('../configs/index.js')

async function buscarConsultas() {
    try {
        const result = await pool.query("SELECT * FROM agendamento WHERE agendamento.status = 'A'"); //P = PENDENTE
        return (result.rows);
    } catch (error) {
        throw error;
    }
}

async function buscarConsultasPendentesPorMedico(medicoId) {
    try {
        const result = await pool.query(
            "SELECT * FROM agendamento WHERE agendamento.status = 'A' AND agendamento.medico_id = $1",
            [medicoId]
        );
        return result.rows;
    } catch (error) {
        throw error;
    }
}

async function agendarConsulta(consulta) {
    const {
        paciente_id,
        medico_id,
        pagamento_id,
        item_id,
        data,
        hora,
        status,
        titulo,
        descricao
    } = consulta;

    const query = `
        INSERT INTO agendamento 
        (paciente_id, medico_id, pagamento_id, item_id, data, hora, status, titulo, descricao)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING *;
    `;

    const values = [paciente_id, medico_id, pagamento_id, item_id, data, hora, status, titulo, descricao];
    
    try {
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

module.exports = {
    buscarConsultas, 
    buscarConsultasPendentesPorMedico,
    agendarConsulta
};
