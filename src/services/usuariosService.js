const pool = require('../configs/index.js')

async function cadastrarUsuario(usuario) {
    const {
        id, 
        login, 
        senha    
    } = usuario;

    const query = `
        INSERT INTO usuario 
        (id, login, senha)
        VALUES ($1, $2, $3)
        RETURNING *;
    `;

    const values = [id, login, senha];
    
    try {
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

module.exports = {
    cadastrarUsuario
};
