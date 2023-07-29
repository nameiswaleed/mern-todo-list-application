const { Todos } = require("../database/models");

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
const deleteTodo = async (id) => {
  try {
    await Todos.findByIdAndDelete(id)
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
const getTodos = async () => {
  try {
    const TodoList = await Todos.aggregate([
        {
            $project:{
                _id:1,
                title:1,
                description:1
            }
        }
    ]);
    // console.log(TodoList)
    return TodoList;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = {
  addTodo,
  getTodos,
  deleteTodo
};
