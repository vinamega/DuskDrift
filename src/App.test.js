// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DuskDrift title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DuskDrift/i);
    expect(titleElement).toBeInTheDocument();
});
