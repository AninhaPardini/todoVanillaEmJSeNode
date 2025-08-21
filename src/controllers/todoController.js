import todoService from "../services/todoService.js";

export default class TodoController {
  read(req, res) {
    const todos = todoService.getAllTodos();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(todos));
  }

  create(req, res) {
    let body = "";
    req.on("data", chunk => (body += chunk));
    req.on("end", () => {
      try {
        const data = JSON.parse(body);
        const newTodo = todoService.createTodo(data);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(newTodo));
      } catch (error) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: error.message }));
      }
    });
  }

  update(req, res) {
    const id = req.url.split("/")[2]; // pega o ID da URL
    let body = "";
    req.on("data", chunk => (body += chunk));
    req.on("end", () => {
      try {
        const data = JSON.parse(body);
        const updatedTodo = todoService.updateTodo(id, data);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(updatedTodo));
      } catch (error) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: error.message }));
      }
    });
  }

  delete(req, res) {
    const id = req.url.split("/")[2]; // pega o ID da URL
    try {
      const deletedTodo = todoService.deleteTodo(id);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(deletedTodo));
    } catch (error) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: error.message }));
    }
  }
}
