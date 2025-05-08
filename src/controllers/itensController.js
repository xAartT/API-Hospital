const service = require('../services/itensService')

async function cadastrarItens(req, res) {
    try {
        if (!req.body.valor ||!req.body.quantidade) {
            return res.status(400).json({
                message: 'Campo(s) obrigatorio(s) faltando.'
            })
        }
        const item = await service.cadastrarItens(req.body);
        return res.status(200).json(item);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao cadastrar o produto.', detalhes: error.message });
    }
}

async function cadastrarTipos(req, res) {
    try {
        const tipo = await service.cadastrarTipos(req.body);
        return res.status(200).json(tipo);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao cadastrar o tipo.', detalhes: error.message });
    }
}

module.exports = {
    cadastrarItens, 
    cadastrarTipos
};