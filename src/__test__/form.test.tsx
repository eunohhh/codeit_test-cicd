import Form from '@/components/form';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Form 테스트', () => {
  it('renders a form', () => {
    const setTodos = jest.fn();
    const handleSaveToStorage = jest.fn();

    // Arrange
    render(<Form setTodos={setTodos} handleSaveToStorage={handleSaveToStorage} />);

    // Act

    // Assert
    expect(screen.getByRole('form')).toBeInTheDocument();
  });
});
