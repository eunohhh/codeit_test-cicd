import UpperInput from '@/components/UpperInput';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('UpperInput 테스트', () => {
  const User = userEvent.setup();

  it('input 값이 대문자로 변환되어 입력되어야 한다.', async () => {
    render(<UpperInput />);

    const input = screen.getByLabelText('Upper');

    await User.type(input, 'hello');

    expect(input).toHaveValue('HELLO');
  });
});
