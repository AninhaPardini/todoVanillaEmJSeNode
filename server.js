import http from 'http';
import { handleRoutes } from './src/routes/todoRoutes.js';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  handleRoutes(req, res);
});

server.listen(PORT, () => {
  console.log("⚙️ Server running on http://localhost:" + PORT);
})
