import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Role from '../components/Role';

describe('Role 테스트', () => {
  it('role 별로 요소 찾아보기', () => {
    render(<Role />);

    const a = screen.getByRole('link');
    const button = screen.getByRole('button');
    const footer = screen.getByRole('contentinfo');
    const h1 = screen.getByRole('heading', { level: 1 });
    const h2 = screen.getByRole('heading', { level: 2 });
    const h3 = screen.getByRole('heading', { level: 3 });
    const header = screen.getByRole('banner');
    const img = screen.getByRole('img');
    const input = screen.getByRole('textbox');
    const li = screen.getByRole('listitem');
    const main = screen.getByRole('main');
    const nav = screen.getByRole('navigation');

    expect(a).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(h1).toBeInTheDocument();
    expect(h2).toBeInTheDocument();
    expect(h3).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(li).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
  });
});
