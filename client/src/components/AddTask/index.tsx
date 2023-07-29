import React, { useState } from "react";
import { useAddTask } from "../../libs/apis";
const AddTask = () => {
  // use states
  const [task, setTask] = useState({ title: "", description: "" });

  //handler functions
  /**
   * @description this function handle the onchange on fields
   * @param e
   */
  const handleFields = (e: any) => {
    setTask({ ...task, [e.target.name]: e.target.value });
    // console.log(task);
  };

  /**
   * @description this function handle the submit function to add the taks
   * @param e
   */

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    // console.log(task);
    await useAddTask(task.title, task.description);
  };
  return (
    <section className="flex items-center justify-center space-x-6 m-5">
      <form onSubmit={handleFormSubmit} className="flex space-x-5">
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleFields}
          placeholder="Add Task"
          className="w-full h-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
        />
        <input
          type="text"
          name="description"
          value={task.description}
          onChange={handleFields}
          placeholder="Description"
          className="w-full h-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
        />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add
        </button>
      </form>
    </section>
  );
};

export default AddTask;
