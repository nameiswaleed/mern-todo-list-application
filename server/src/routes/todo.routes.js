const express = require("express");
const todoRouter = express.Router();
const { TodoController } = require("../controllers");

todoRouter.get("/get", async (req, res, next) => {
  const TodoList = await TodoController.getTodos();
  console.log("TodoList", TodoList);
  res.json(TodoList);
});
todoRouter.post("/create", async (req, res) => {
  const { title, description } = req.body;
  const AddTodo = await TodoController.addTodo(title, description);
  res.send(AddTodo);
});
todoRouter.delete("/delete", async (req, res) => {
  const { id } = req.body;
  const DeleteTodo = await TodoController.deleteTodo(id);
  res.send(DeleteTodo);
});

module.exports = todoRouter;
