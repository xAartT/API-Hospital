
# 🏥 API Hospital

## 📝 Descrição

API para gerenciamento de agendamentos, controle de usuários e autenticação de acesso, construída com Node.js, Express e PostgreSQL.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express.js
- PostgreSQL
- dotenv
- nodemon
- pg (biblioteca de conexão PostgreSQL)

---

## 📁 Estrutura do Projeto

```
src/
├── controllers/
│   └── authController.js
├── services/
│   └── authService.js
├── routes/
│   └── authRoutes.js
├── configs/
│   └── index.js (configuração do banco)
├── index.js (ponto de entrada da aplicação)
└── routers/
    └── index.js (módulo de rotas agrupadas)
```

---

## 🔧 Como executar

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse o diretório
cd nome-do-projeto

# Instale as dependências
npm install

# Configure o arquivo .env
# Exemplo:
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
PORT=3000

# Rode os scripts SQL para criar as tabelas (manual ou via pgAdmin)

# Inicie o servidor em modo desenvolvimento
npm run dev
```

---

## 📚 Documentação da API

### 🔐 `POST /login`

Autentica um usuário com `login` e `senha`.

**Request:**

```json
{
  "login": "admin",
  "senha": "123456"
}
```

**Response:**

```json
{
  "message": "Login realizado com sucesso",
  "usuario": {
    "id": 1,
    "login": "admin"
  }
}
```

---

### 👤 `GET /usuarios`

Retorna a lista de usuários cadastrados.

**Response:**

```json
[
  {
    "id": 1,
    "nome": "João da Silva",
    "email": "joao@email.com"
  }
]
```

---

### 🧾 `POST /usuarios`

Cria um novo usuário.

**Request:**

```json
{
  "nome": "Maria Oliveira",
  "email": "maria@email.com",
  "senha": "123456"
}
```

**Response:**

```json
{
  "id": 2,
  "nome": "Maria Oliveira",
  "email": "maria@email.com"
}
```

---

## 🧪 Testes

Use o [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/) para testar os endpoints.

---

## 📄 Licença

Este projeto está sob a licença MIT.
