const service = require('../services/medicosService');

async function cadastrarMedico(req, res) {
    try {
        const { id, nome, especialidade_id, crm, cpf_cnpj, usuario_id } = req.body;
        const novoMedico = await service.cadastrarMedico({
            id, 
            nome, 
            especialidade_id, 
            crm, 
            cpf_cnpj, 
            usuario_id
        });
        return res.status(201).json({
            mensagem: 'Medico cadastrado com sucesso!',
            agendamento: novoMedico
        });
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao agendar a consulta.', detalhes: error.message });
    }
}

module.exports = {
    cadastrarMedico 
};
