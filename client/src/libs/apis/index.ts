import axios from "axios";

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
