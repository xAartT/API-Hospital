const service = require('../services/pacientesService')

//****** CADASTRAR ******
async function cadastrarPaciente(req, res) {
    try {
        if (!req.body.nome || !req.body.cpf) {
            return res.status(400).json({
                message: 'Campos obrigatorios faltando.'
            })
        }
        const consultas = await service.cadastrarPaciente(req.body);
        return res.status(200).json(consultas);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao cadastrar paciente', detalhes: error.message });
    }
}

//****** BUSCAR ******
async function buscarPacientePorId(req, res) {
    try {
        const pacienteId = req.params.id;
        const paciente = await service.buscarPacientePorId(pacienteId);
        return res.status(200).json(paciente);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao buscar paciente por ID.', detalhes: error.message });
    }
}

module.exports = {
    cadastrarPaciente,
    buscarPacientePorId
};