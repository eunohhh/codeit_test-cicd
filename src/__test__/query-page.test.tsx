import FetchDataComponent from '@/components/FetchDataComponent';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { default as QueryPage } from '../app/query/page';

describe('QueryPage 테스트', () => {
  it('should render query page', () => {
    render(<QueryPage />);

    const ul = screen.getByRole('list');
    expect(ul).toBeInTheDocument();
  });

  it('get by, query by, find by', async () => {
    // query 별로 요소를 찾는 방법

    // Arrange
    render(<QueryPage />);

    // Act

    // DOM 요소 못 찾으면 에러던짐
    const getByRole = screen.getByRole('list');

    // DOM 요소 못 찾으면 null 반환
    const queryByRole = screen.queryByRole('list');

    const findByRole = await screen.findByRole('list');

    // Assert
    expect(getByRole).toBeInTheDocument();
    expect(queryByRole).toBeInTheDocument();
    expect(findByRole).toBeInTheDocument();
  });

  it('get by, query by,find by 못찾는 경우', async () => {
    // Arrange
    render(<QueryPage />);

    // Act
    const queryByRole = screen.queryByRole('button');
    // const findByRole = await screen.findByRole("button");

    // Assert
    expect(() => screen.getByRole('button')).toThrow();
    expect(queryByRole).toBeNull();
    await expect(screen.findByRole('button')).rejects.toThrow();
    // expect(getByRole).not.toBeInTheDocument();
    // expect(findByRole).not.toBeInTheDocument();
  });

  it('getAllBy, queryAllBy, findAllBy 요소가 있는 경우', async () => {
    // Arrange
    render(<QueryPage />);

    // Act
    const getAllByRole = screen.getAllByRole('listitem');
    const queryAllByRole = screen.queryAllByRole('listitem');
    const findAllByRole = await screen.findAllByRole('listitem');

    // Assert
    expect(getAllByRole).toHaveLength(3);
    expect(queryAllByRole).toHaveLength(3);
    expect(findAllByRole).toHaveLength(3);
  });

  it('getAllBy,queryAllBy, findAllBy 요소가 없는 경우', async () => {
    render(<QueryPage />);

    // queryBy
    // 한개 찾을때 없으면 null

    // queryAllBy
    // 여러개 찾을때, 없으면 빈배열
    const queryAllByRole = screen.queryAllByRole('button');

    expect(() => screen.getAllByRole('button')).toThrow();
    expect(queryAllByRole).toHaveLength(0);
    await expect(screen.findAllByRole('button')).rejects.toThrow();
  });

  it('get by ,get by All 에러', () => {
    // getBy,getByAll 함수는 DOM에서 요소를 찾지 못하면 에러를 던진다.

    render(<QueryPage />);

    try {
      screen.getByRole('button');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }

    expect(() => screen.getByRole('button')).toThrow();

    // getBy -> 요소를 딱 1개만 찾음
    // const li = screen.getByRole("listitem");
    // getAllBy -> 요소를 여러개 찾음
    expect(() => screen.getByRole('listitem')).toThrow();
  });

  it('renders a list of colors', () => {
    render(<QueryPage />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('fetch data component', async () => {
    render(<FetchDataComponent />);

    const listItems = await screen.findByRole('list');

    expect(listItems).toBeInTheDocument();
  });
});
