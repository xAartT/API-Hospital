const service = require('../services/medicosService');

//****** CADASTRAR ******
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
        return res.status(500).json({ erro: 'Erro ao cadastrar médico.', detalhes: error.message });
    }
}

async function cadastrarEspecialidade(req, res) {
    try {
        const { id, nome } = req.body;
        const especialidade = await service.cadastrarEspecialidade({
            id, 
            nome
        });
        return res.status(201).json({
            mensagem: 'Especialidade cadastrada com sucesso!',
            agendamento: especialidade
        });
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao cadastrar especialidade.', detalhes: error.message });
    }
}

//****** BUSCAR ******
async function buscarMedicoPorId(req, res) {
    try {
        const medicoId = req.params.id;
        const consultas = await service.buscarMedicoPorId(medicoId);
        return res.status(200).json(consultas);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao buscar médico por ID.', detalhes: error.message });
    }
}

module.exports = {
    cadastrarMedico,
    cadastrarEspecialidade,
    buscarMedicoPorId
};
