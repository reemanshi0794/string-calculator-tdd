import { render, screen } from '@testing-library/react';
import App from './App';

test('renders StringCalculator component', () => {
  render(<App />);

  // Use a test id or text content to find the rendered component
  const stringCalculatorElement = screen.getByText('String Calculator');
  expect(stringCalculatorElement).toBeInTheDocument();
});