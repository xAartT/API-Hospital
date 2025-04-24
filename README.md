# API HOSPITAL

## 📝 Descrição
API para efetuar o agendamento e controle 

## 🚀 Tecnologias utilizadas
- Node.js
- Express
- PostgreSQL
- [Outras bibliotecas se houver]

## 🔧 Como executar
```bash
# Clone o repositório
git clone https://github.com/usuario/nome-do-repositorio

# Instale as dependências
npm install

# Configure o banco de dados
# Crie um arquivo .env com suas variáveis de ambiente
# Exemplo:
# DB_HOST=localhost
# DB_PORT=5432
# DB_USER=postgres
# DB_PASSWORD=postgres
# DB_NAME=nome_banco

# Rode o script SQL

# Inicie o servidor
npm run dev
```

# 📚 Documentação da API

## 🎯 Exemplo de Endpoints

### `GET /usuarios`
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

### `POST /usuarios`
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

(Repita esse padrão para cada endpoint criado)
