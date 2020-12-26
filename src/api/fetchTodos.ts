import axios, { AxiosResponse } from 'axios';

const fetchTodos = async (): Promise<any[]> => {
  const response: AxiosResponse<any[]> = await axios.get(
    'https://jsonplaceholder.typicode.com/todos',
  );
  return response.data;
};

export default fetchTodos;
