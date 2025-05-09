
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