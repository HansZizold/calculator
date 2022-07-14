import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('Home Page Tests', () => {
  test('Check the title of the page', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to our page!')).toBeTruthy();
  });

  test('Quote renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
