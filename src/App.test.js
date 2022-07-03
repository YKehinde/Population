import { render, screen, act } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('World Population by year');
  expect(linkElement).toBeInTheDocument();
});

test('should not go to previous year if year is 1990', () => { 
  render(<App />);
  const button = screen.getByText('previous year');
  expect(button).toBeDisabled();
});

 test('should go to next year if next year is clicked', () => { 
render(<App />);
  const button = screen.getByText('next year');
  const prevButton = screen.getByText('previous year');
  act(() => {
    button.click();
  });
  expect(button).toBeEnabled();
  expect(prevButton).toBeEnabled();

})
