import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '@/pages/index';
import '@testing-library/jest-dom';

describe('TraderTab', () => {
  it('From the beginning, I am a buyer is selected, and pertinent heading shown', () => {
    const screen = render(<Home />);
    expect(
      screen.getByRole('heading', { name: /i want to acquire a product/i })
    ).toBeInTheDocument();
  });

  it('when clicked on I am a seller, seller heading is shown', async () => {
    const user = userEvent.setup();
    const screen = render(<Home />);
    const iAmASellertBtn = screen.getByRole('button', {
      name: /i am a seller/i,
    });

    await user.click(iAmASellertBtn);
    expect(screen.getByRole('heading', { name: /i want to sell a product/i }));
  });

  it('when clicked on I am a buyer, buyer heading is shown', async () => {
    const user = userEvent.setup();
    const screen = render(<Home />);
    const iAmABuyerBtn = screen.getByRole('button', {
      name: /i am a buyer/i,
    });
    const iAmASellertBtn = screen.getByRole('button', {
      name: /i am a seller/i,
    });
    await user.click(iAmASellertBtn);
    await user.click(iAmABuyerBtn);
    expect(
      screen.getByRole('heading', { name: /i want to acquire a product/i })
    ).toBeInTheDocument();
  });
});
