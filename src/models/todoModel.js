import DB from "../db/db.js";

const db = new DB("todos.json");

export default {
  getAll: () => {
    return db.load();
  },

  create: (data) => {
    const todos = db.load();
    const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    const newTodo = { id, ...data };
    todos.push(newTodo);
    db.save(todos);
    return newTodo;
  },

  update: (todoId, data) => {
    const todos = db.load();
    const index = todos.findIndex(t => t.id == todoId);
    if (index === -1) return null;
    todos[index] = { ...todos[index], ...data };
    db.save(todos);
    return todos[index];
  },

  delete: (todoId) => {
    const todos = db.load();
    const index = todos.findIndex(t => t.id == todoId);
    if (index === -1) return null;
    const removed = todos.splice(index, 1);
    db.save(todos);
    return removed[0];
  }
};
