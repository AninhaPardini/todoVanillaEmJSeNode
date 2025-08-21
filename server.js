import http from 'http';
import { handleRoutes } from './src/routes/todoRoutes.js';

const PORT = 3000;

const server = http.createServer((req, res) => {
  handleRoutes(req, res);
});

server.listen(PORT, () => {
  console.log("Servidor rodando em http://localhost:" + PORT);
})
