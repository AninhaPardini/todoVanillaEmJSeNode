import TodoController from '../controllers/todoController.js';

const controller = new TodoController();

export function handleRoutes(req, res) {
  if (req.url === '/todos' && req.method === 'GET') {
    return controller.read(req, res);
  }

  if (req.url === '/todos' && req.method === 'POST') {
    return controller.create(req, res);
  }

  if (req.url.startsWith('/todos/') && req.method === 'PUT') {
    return controller.update(req.res);
  }

  if (req.url.startsWith("/todos/") && req.method === "DELETE") {
    return controller.delete(req, res);
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Route not found" }));
}