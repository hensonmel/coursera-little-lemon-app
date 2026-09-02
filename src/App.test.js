import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import BookingPage from './BookingPage';

test('renders the Little Lemon hero heading', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  const headings = screen.getAllByText(/little lemon/i);
  expect(headings.length).toBeGreaterThan(0);
});

test('renders the BookingPage reservation heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByRole('heading', { name: /reservation/i });
  expect(headingElement).toBeInTheDocument();
});
