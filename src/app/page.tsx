'use client';

import Form from '@/components/form';
import { List } from '@/components/list';
import { TODO } from '@/types/types';
import { fetchAllTodos, saveToStorage } from '@/utils/storage-api';
import { useEffect, useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState<TODO[]>([]);

  const handleSaveToStorage = async (todo: TODO) => {
    await saveToStorage([...todos, todo]);
  };

  useEffect(() => {
    fetchAllTodos().then((items) => setTodos(items));
  }, []);

  return (
    <main className="p-4 rounded-md bg-white shadow-md w-full max-w-md flex flex-col ">
      <h1 className="font-bold text-sm">{'To Do List'}</h1>
      <List />
      <Form setTodos={setTodos} handleSaveToStorage={handleSaveToStorage} />
    </main>
  );
}
