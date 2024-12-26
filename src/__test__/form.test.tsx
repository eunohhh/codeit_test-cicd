import Form from '@/components/form';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Form 테스트', () => {
  const User = userEvent.setup();

  it('input에 값을 입력하면 value에 값이 반영되어야 합니다.', async () => {
    // Arrange
    const setTodos = jest.fn();
    render(<Form setTodos={setTodos} handleSaveToStorage={jest.fn()} />);

    // Act
    // 1. input 요소를 찾는다.
    const input = screen.getByRole('textbox');
    // 2. input 요소를 클릭한다.
    // await User.click(input);
    // 3. input 요소에 텍스트를 입력한다.
    await User.type(input, '할 일 1');

    // Assert
    expect(input).toHaveValue('할 일 1');
  });

  const renderForm = () => {
    render(<Form setTodos={jest.fn()} handleSaveToStorage={jest.fn()} />);
  };

  it('form 이 렌더링 되어야 합니다.', () => {
    renderForm();

    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();

    const formByTestId = screen.getByTestId('todo-form');
    expect(formByTestId).toBeInTheDocument();

    const formByTitle = screen.getByTitle(/create/i);
    expect(formByTitle).toBeInTheDocument();

    const formByQuerySelector = document.querySelector('form');
    expect(formByQuerySelector).toBeInTheDocument();

    const formById = document.getElementById('todo');
    expect(formById).toBeInTheDocument();
  });

  it('input 이 렌더링 되어야 합니다.', () => {
    renderForm();

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();

    const inputByLabel = screen.getByLabelText(/입력/i);
    expect(inputByLabel).toBeInTheDocument();

    const inputByPlaceholder = screen.getByPlaceholderText(/할 일/i);
    expect(inputByPlaceholder).toBeInTheDocument();

    const inputByQuerySelector = document.querySelector('form input');
    expect(inputByQuerySelector).toBeInTheDocument();

    const inputById = document.getElementById('todo');
    expect(inputById).toBeInTheDocument();
  });

  it('button 이 렌더링 되어야 합니다.', () => {
    renderForm();

    const button = screen.getByRole('button', { name: /cancel/i });
    expect(button).toBeInTheDocument();
  });
});