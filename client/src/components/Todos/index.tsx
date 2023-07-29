import React, { useEffect, useState } from "react";
import { useFetch, deleteTask } from "../../libs/apis";
const Todos = () => {
  const [tasks, setTasks] = useState([{ title: "", description: "", _id: "" }]);

  // handle function
  const handleDelete = (id: any) => {
    deleteTask(id).then((res) => {
      // console.log(res)
      setTasks(tasks.filter((task) => task._id !== id));
    });
  };

  // console.log(tasks)
  useEffect(() => {
    const fetchData = async () => {
      const response = await useFetch();
      // console.log(response.data)
      setTasks(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="relative items-center overflow-x-auto">
      {tasks.length >= 1 ? (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Task name
              </th>
              <th scope="col" className="px-6 py-3">
                Task Description
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.title}
                </th>
                <td className="px-6 py-4">{item.description}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(item._id)}
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center font-bold">No Tasks Found</p>
      )}
    </div>
  );
};

export default Todos;
