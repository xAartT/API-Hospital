const service = require('../services/consultas');

async function buscarConsultas(req, res) {
    try {
        const consultas = await service.buscarConsultas();
        return res.status(200).json(consultas);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao buscar consultas', detalhes: error.message });
    }
}
async function buscarConsultasPendentesPorMedico(req, res) {
    try {
        const medicoId = req.params.id;
        const consultas = await service.buscarConsultasPendentesPorMedico(medicoId);
        return res.status(200).json(consultas);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao buscar consultas por ID do médico', detalhes: error.message });
    }
}

module.exports = {
    buscarConsultas,
    buscarConsultasPendentesPorMedico
};
