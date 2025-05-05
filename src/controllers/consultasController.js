const service = require('../services/consultasService');

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
        return res.status(500).json({ erro: 'Erro ao buscar consultas por ID do médico.', detalhes: error.message });
    }
}

async function agendarConsultas(req, res) {
    try {
        const { paciente_id, medico_id, pagamento_id, item_id, data, hora, status, titulo, descricao } = req.body;
        const novaConsulta = await service.agendarConsulta({
            paciente_id,
            medico_id,
            pagamento_id,
            item_id,
            data,
            hora,
            status,
            titulo,
            descricao
        });
        return res.status(201).json({
            mensagem: 'Consulta agendada com sucesso!',
            agendamento: novaConsulta
        });
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao agendar a consulta.', detalhes: error.message });
    }
}


module.exports = {
    buscarConsultas,
    buscarConsultasPendentesPorMedico,
    agendarConsultas 
};
