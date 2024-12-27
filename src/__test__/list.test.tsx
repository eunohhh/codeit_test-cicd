import { List } from '@/components/List';
import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as StorageAPI from '../utils/storage-api';
jest.mock('../utils/storage-api');

describe('List 테스트', () => {
  const todos = [
    { id: 1, todo: '할 일 1', done: false },
    { id: 2, todo: '할 일 2', done: true },
  ];

  const User = userEvent.setup();
  const setTodosMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('delete 버튼을 누르면 handleDelete 함수가 호출되어야 한다.', async () => {
    render(<List setTodos={setTodosMock} todos={todos} />);
    const saveToStorageMock = jest.spyOn(StorageAPI, 'saveToStorage');

    // 첫번째 todo를 삭제
    const deleteButton = screen.getAllByRole('button', { name: /delete/i })[0];

    await User.click(deleteButton);

    expect(setTodosMock).toHaveBeenCalledTimes(1);
    expect(setTodosMock).toHaveBeenCalledWith([todos[1]]);
    expect(saveToStorageMock).toHaveBeenCalled();
    expect(saveToStorageMock).toHaveBeenCalledWith([todos[1]]);
  });

  it('update 버튼을 누르면 handleUpdate 함수가 호출되어야 한다.', async () => {
    render(<List setTodos={setTodosMock} todos={todos} />);
    const saveToStorageMock = jest.spyOn(StorageAPI, 'saveToStorage');
    const newTodos = todos.map((todo) => {
      if (todo.id === todos[0].id) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });

    // 첫번째 todo를 업데이트
    const updateButton = screen.getAllByRole('button', { name: /update/i })[0];

    await User.click(updateButton);

    expect(setTodosMock).toHaveBeenCalledTimes(1);

    expect(setTodosMock).toHaveBeenCalledWith(newTodos);
    expect(saveToStorageMock).toHaveBeenCalled();
    expect(saveToStorageMock).toHaveBeenCalledWith(newTodos);
  });

  it('todo의 상태에 따라서 아이콘이 done 또는 net yet 아이콘이어야 한다.', () => {
    render(<List setTodos={() => {}} todos={todos} />);

    const listItems = screen.getAllByRole('listitem');
    screen.debug();

    listItems.forEach((item, index) => {
      const icon = within(item).getByLabelText(/done|not-yet/i);
      expect(icon).toHaveAttribute('id', todos[index].done ? 'done' : 'not-yet');
    });

    const notYetTodos = todos.filter((todo) => !todo.done);
    const notYetIcons = screen.getAllByLabelText(/not-yet/i);

    const doneTodos = todos.filter((todo) => todo.done);
    const doneIcons = screen.getAllByLabelText(/done/i);

    expect(notYetIcons).toHaveLength(notYetTodos.length);
    expect(doneIcons).toHaveLength(doneTodos.length);
  });

  it('render list items 는 todo의 개수와 같아야 합니다.', () => {
    render(<List setTodos={() => {}} todos={todos} />);

    const listItems = screen.getAllByRole('listitem');

    expect(listItems).toHaveLength(todos.length);
  });

  it('todo의 상태에 따라서 button의 테스트가 취소 또는 완료로 변경되어야 합니다.', () => {
    render(<List setTodos={() => {}} todos={todos} />);

    const listItems = screen.getAllByRole('listitem');
    screen.debug();

    listItems.forEach((item, index) => {
      const button = within(item).getByRole('button', {
        name: /update/i,
      });

      expect(button).toHaveTextContent(todos[index].done ? '취소' : '완료');
    });
  });

  it('todo가 빈배열일 경우', () => {
    render(<List setTodos={() => {}} todos={[]} />);

    const ul = screen.getByRole('list');

    expect(ul).toBeEmptyDOMElement();
  });
});
