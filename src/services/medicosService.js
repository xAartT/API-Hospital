const pool = require('../configs/index.js')

async function cadastrarMedico(medico) {
    const {
        id, 
        nome, 
        especialidade_id, 
        crm, 
        cpf_cnpj, 
        usuario_id
    } = medico;

    const query = `
        INSERT INTO medico 
        (id, nome, especialidade_id, crm, cpf_cnpj, usuario_id)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
    `;

    const values = [id, nome, especialidade_id, crm, cpf_cnpj, usuario_id];
    
    try {
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

module.exports = {
    cadastrarMedico
};
