import TodoModel from "../models/todoModel.js";

class TodoService {
  getAllTodos() {
    return TodoModel.getAll();
  }

  createTodo(data) {
    if (!data.title || data.title.trim() === "") {
      throw new Error("The 'title' is required");
    }
    return TodoModel.create({ title: data.title, done: false });
  }

  updateTodo(id, data) {
    const todo = TodoModel.update(id, data);
    if (!todo) {
      throw new Error("Todo not found");
    }
    return todo;
  }

  deleteTodo(id) {
    const deleted = TodoModel.delete(id);
    if (!deleted) {
      throw new Error("Todo not found");
    }
    return deleted;
  }
}

export default new TodoService();
