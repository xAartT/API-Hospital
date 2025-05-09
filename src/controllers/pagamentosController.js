const service = require('../services/pagamentosService')

async function cadastrarPagamento(req, res) {
    try {
        if (!req.body.valor) {
            return res.status(400).json({
                message: 'Campo(s) obrigatorio(s) faltando'
            })
        }
        const pagamento = await service.cadastrarPagamento(req.body);
        return res.status(200).json(pagamento);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao realizar o pagamento.', detalhes: error.message });
    }
}

//****** BUSCAR ******
async function buscarPagamentoPorId(req, res) {
    try {
        const pagamentoId = req.params.id;
        const pagamento = await service.buscarPagamentoPorId(pagamentoId);
        return res.status(200).json(pagamento);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao buscar pagamento por ID.', detalhes: error.message });
    }
}

module.exports = {
    cadastrarPagamento,
    buscarPagamentoPorId
};