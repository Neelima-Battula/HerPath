import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HERPATH header', () => {
  render(<App />);
  const headerElement = screen.getByText(/HERPATH/i);
  expect(headerElement).toBeInTheDocument();
});
