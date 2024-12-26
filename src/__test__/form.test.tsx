import Form from '@/components/form';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Form 테스트', () => {
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
