import { render, screen } from '@testing-library/react';
import App from './App';
import BookingPage from "./screens/BookingPage";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

const availableTimes = ["17:00", "17:30", "18:00"];
test("renders the BookingForm heading", () => {
  render(<BookingPage availableTimes={availableTimes} />);
  const headingElement = screen.getByText("Booking Page");
  expect(headingElement).toBeInTheDocument();
});