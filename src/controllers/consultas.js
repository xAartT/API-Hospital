const service = require('../services/consultas');

async function buscarConsultas(req, res) {
    try {
        const consultas = await service.buscarConsultas();
        return res.status(200).json(consultas);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao buscar consultas', detalhes: error.message });
    }
}

module.exports = {
    buscarConsultas
};
