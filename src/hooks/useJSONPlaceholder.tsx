import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const fetchJSONPlaceholder = async <T,>(path: string) => {
  const response = await axios.get<T>(`https://jsonplaceholder.typicode.com/${path}`);
  return response.data;
};

export const useJSONPlaceholder = <T,>(path: string) => {
  return useQuery({
    queryKey: ['jsonplaceholder', path],
    queryFn: async ({ queryKey }) => {
      return await fetchJSONPlaceholder<T>(queryKey[1]);
    },
  });
};
