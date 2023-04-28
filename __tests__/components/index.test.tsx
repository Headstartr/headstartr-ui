import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /ultimate marketplace to buy and sell innovative products/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
