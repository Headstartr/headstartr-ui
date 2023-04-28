import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '@/pages/index';
import '@testing-library/jest-dom';

describe('Burger menu', () => {
  it('clicking on hamburger icon opens menu', async () => {
    const user = userEvent.setup();
    const screen = render(<Home />);
    const burgerButton = screen.getByTestId('burger-button');

    await user.click(burgerButton);
    const closeBtn = screen.getByTestId('burger-close-button');
    expect(closeBtn).toBeInTheDocument();
  });

  /* NOTE: Commented list of features test as instructed */
  // it('when hovered over feature, it turns blue', async () => {
  //   const user = userEvent.setup();
  //   const screen = render(<Home />);
  //   const burgerButton = screen.getByTestId('burger-button');
  //   await user.click(burgerButton);

  //   const featureText = screen.getAllByText(/feature/i)[0];
  //   await user.hover(featureText);

  //   expect(screen.getAllByText(/feature/i)[0]).toHaveClass('text-brandBlue');
  // });

  it('when menu open, clicking on close btn closes menu', async () => {
    const user = userEvent.setup();
    const screen = render(<Home />);
    const burgerButton = screen.getByTestId('burger-button');

    await user.click(burgerButton);
    const closeBtn = screen.getByTestId('burger-close-button');

    await user.click(closeBtn);
    expect(screen.queryByText(/feature/i)).toBeNull();
  });
});
