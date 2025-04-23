async function buscarConsultas() {
    try {
        const result = await pool.query('SELECT * FROM agendamento');
        return result.rows; // array com os registros encontrados.
    } catch (error) {
        throw error;
    }
}

module.exports = {
    buscarConsultas
};
