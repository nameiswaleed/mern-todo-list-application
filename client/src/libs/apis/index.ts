import axios from "axios";

/**
 * useFetch
 * @description It is use to fetch all the data from the client side all the todos
 * @returns
 */
const useFetch = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `http://localhost:4000/api/todos/get`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.request(config);
  return response;
};
/**
 * @description This function is for the api to add the tasks
 * @param title
 * @param description
 * @returns
 */
const useAddTask = async (title: string, description: string) => {
  let data = JSON.stringify({
    title: title,
    description: description,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:4000/api/todos/create",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const response = await axios.request(config);
  return response;
};
/**
 * @description This api is use to delete a specific task
 * @param id
 * @returns
 */
const deleteTask = async (id: any) => {
  let data = JSON.stringify({
    id: id,
  });

  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: "http://localhost:4000/api/todos/delete",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const response = await axios.request(config);
  return response;
};

export { useFetch, useAddTask, deleteTask };
