import { TODO } from '@/types/types';
import { Dispatch, SetStateAction, useState } from 'react';

interface FormProps {
  setTodos: Dispatch<SetStateAction<TODO[]>>;
  handleSaveToStorage: (newTodo: TODO) => Promise<void>;
}

export const Form: React.FC<FormProps> = ({ setTodos, handleSaveToStorage }) => {
  const [todo, setTodo] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTodo(e.target.value);
  };

  const handleAddTodo = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();

    if (!todo) {
      return;
    }

    const newTodo: TODO = {
      id: new Date().getTime(),
      todo,
      done: false,
    };

    setTodos((prev) => {
      return [...prev, newTodo];
    });

    handleSaveToStorage(newTodo);

    setTodo('');
  };

  return (
    <form
      className="flex flex-col space-y-4"
      role="form"
      title="create todo"
      onSubmit={handleAddTodo}
    >
      <label htmlFor="todo" className="sr-only">
        {'입력'}
      </label>
      <input
        className="px-4 py-2 bg-neutral-100  outline-none  rounded-md"
        id="todo"
        value={todo}
        onChange={handleChange}
        placeholder="할 일을 입력하세요"
        data-testid="todo-form"
      />
      <button
        className="px-4 py-2 text-white rounded-md bg-blue-400"
        type="submit"
        onClick={handleAddTodo}
        aria-label="create"
      >
        {'생성하기'}
      </button>
      <button type="button" onClick={handleAddTodo} aria-label="cancel">
        {'취소'}
      </button>
    </form>
  );
};

export default Form;
