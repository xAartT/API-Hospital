const service = require('../services/usuariosService');

async function cadastrarUsuario(req, res) {
    try {
        const { id, login, senha } = req.body;
        const novoUsuario = await service.cadastrarUsuario({
            id, 
            login, 
            senha
        });
        return res.status(201).json({
            mensagem: 'Usuário cadastrado com sucesso!',
            agendamento: novoUsuario
        });
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao cadastrar usuário.', detalhes: error.message });
    }
}

module.exports = {
    cadastrarUsuario
};
