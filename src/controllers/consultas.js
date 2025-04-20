const service = require('../services/consultas');

// Busca todas as consultas agendadas
function buscarConsultas (req, res) {
    const consultas = service.buscarConsultas();
    return res.status(200).json(consultas);
}