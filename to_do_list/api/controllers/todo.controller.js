const { Todo } = require("../databases/mongo.database");

const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

const addTodo = async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  });

  await todo.save();
  res.json(todo);
};

const deteleTodo = async (req, res) => {
  const result = await Todo.findByIdAndDelete(req.params.id);
  res.json({ result });
};

const completeTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.complete = !todo.complete;
  todo.save();

  res.json(todo);
};

module.exports = {
  getTodos,
  addTodo,
  deteleTodo,
  completeTodo,
};
