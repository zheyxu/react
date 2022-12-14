const router = require("express").Router();
const {
  getTodos,
  addTodo,
  deteleTodo,
  completeTodo,
} = require("../controllers/todo.controller");

router.get("/todos", getTodos); // getTodos
router.post("/todo/new", addTodo); // addTodo
router.delete("/todo/delete/:id", deteleTodo); // deleteTodo
router.get("/todo/complete/:id", completeTodo); // competeTodo

module.exports = { router };
