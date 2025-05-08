router.patch('/agendamentos/:id/cancelar', async (req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query(
        'UPDATE agendamento SET status = $1 WHERE id = $2 RETURNING *',
        ['C', id]
      );
  
      if (result.rowCount === 0) {
        return res.status(404).json({ error: 'Agendamento não encontrado' });
      }
  
      res.json({ message: 'Agendamento cancelado com sucesso', agendamento: result.rows[0] });
    } catch (err) {
      console.error('Erro ao cancelar agendamento:', err);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  });

router.get('/agendamentos', async (req, res) => {
    const { inicio, fim } = req.query;
  
    if (!inicio || !fim) {
      return res.status(400).json({ error: 'Parâmetros "inicio" e "fim" são obrigatórios' });
    }
  
    try {
      const result = await pool.query(
        `SELECT a.*, 
                p.nome AS nome_paciente, 
                m.nome AS nome_medico,
                i.nome AS nome_item
         FROM agendamento a
         JOIN paciente p ON p.id = a.paciente_id
         JOIN medico m ON m.id = a.medico_id
         JOIN item i ON i.id = a.item_id
         WHERE a.data BETWEEN $1 AND $2
         ORDER BY a.data, a.hora`,
        [inicio, fim]
      );
  
      res.json(result.rows);
    } catch (err) {
      console.error('Erro ao buscar agendamentos por período:', err);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  });
  