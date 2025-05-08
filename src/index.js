require('dotenv').config();
const express = require('express');
const app = express();
const routers = require('./routers');
const PORT = process.env.PORT || 3000;

app.use(express.json());

routers(app);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
