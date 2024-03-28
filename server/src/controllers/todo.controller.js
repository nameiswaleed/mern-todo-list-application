const { Todos } = require("../database/models");
//add task
const addTodo = async (title, description) => {
  try {
    await Todos.create({
      title,
      description,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
//delete task
const deleteTodo = async (id) => {
  try {
    await Todos.findByIdAndDelete(id);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
// get all task
const getTodos = async () => {
  try {
    const TodoList = await Todos.aggregate([
      {
        $project: {
          _id: 1,
          title: 1,
          description: 1,
        },
      },
    ]);
    // console.log(TodoList)
    return TodoList;
  } catch (err) {
    console.log(err);
    return false;
  }
};
//export for controllers
module.exports = {
  addTodo,
  getTodos,
  deleteTodo,
};
