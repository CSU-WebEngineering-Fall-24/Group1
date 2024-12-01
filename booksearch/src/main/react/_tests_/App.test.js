import React from 'react';
import { render, screen } from '@testing-library/react';
import Aboutus from '../containers/AboutUsPage';
import '@testing-library/jest-dom';

test('renders the app component', () => {
    render(<Aboutus />);
    const textElement = screen.getByText(/this is about us page/i);
    expect(textElement).toBeInTheDocument();
  });