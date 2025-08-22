# 📝 Todo API - Vanilla Node.js

Um pequeno **CRUD de TODOs** feito em **Node.js puro** (sem frameworks), com persistência dos dados em arquivo JSON.  
Ideal para aprender a organizar um projeto em camadas (**Controller → Service → Model → DB**).

---

## 📂 Estrutura do Projeto

```
src/
├── controllers/ # Controladores (lógica de entrada/saída HTTP)
│ └── todoController.js
├── services/ # Regras de negócio
│ └── todoService.js
├── models/ # Manipulação de dados
│ └── todoModel.js
├── routes/ # Rotas da aplicação
│ └── todoRoutes.js
├── db/ # "Banco de dados" em JSON + utilitário de acesso
│ ├── todos.json
│ └── db.js
├── server.js # Servidor HTTP (usando módulo http)
└── index.js # Ponto de entrada da aplicação
```

## 🚀 Como rodar

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/todo-api-vanilla.git
   cd todo-api-vanilla
   ```

2. Instale as dependências (se houver, ex: ESLint, dotenv etc.):

   ```bash
      npm install
   ```

3. Inicie o servidor:

   ```bash
      npm start
   ```

4. Acesse em:

   ```arduino
      http://localhost:3000
   ```

## 📌 Rotas disponíveis

### Criar um TODO

```bash
  curl -X POST http://localhost:3000/todos
  -H "Content-Type: application/json"
  -d '{"title": "Estudar Node.js"}'
```

### Listar todos os TODOs

```bash
  curl -X GET http://localhost:3000/todos
```

### Atualizar um TODO

```bash
  curl -X PUT http://localhost:3000/todos/1
  -H "Content-Type: application/json"
  -d '{"title": "Estudar Node.js avançado", "done": true}'

```

### Deletar um TODO

```bash
  curl -X DELETE http://localhost:3000/todos/1
```

### 🛠️ Tecnologias usadas

- Node.js (módulo nativo http)
- Persistência em arquivo JSON
- Arquitetura em camadas:
  - Controller → recebe requisições
  - Service → regras de negócio
  - Model → manipula os dados
  - DB → helper genérico para leitura/gravação
  
### 🌱 Melhorias futuras

- Adicionar testes automatizados
- Implementar middlewares simples (ex: logs, validação de JSON)
- Suporte a múltiplas entidades (Users, Products, etc.)
- Migrar para um banco de dados real (SQLite, PostgreSQL, MongoDB)
