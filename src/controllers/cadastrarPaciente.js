const service = require('../services/cadastrarPaciente')

async function cadastrarPaciente(req, res) {
    try {
        if (!req.body.nome || !req.body.cpf) {
            return res.status(400).json({
                message: 'campos obrigatorios faltando'
            })
        }
        const consultas = await service.cadastrarPaciente(req.body);
        return res.status(200).json(consultas);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao cadastrar paciente', detalhes: error.message });
    }
}

module.exports = {
    cadastrarPaciente
};