import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

describe('Quote Page Tests', () => {
  test('Check the quote of the page', () => {
    render(<Quote />);
    expect(screen.getByText('Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. -William Paul Thurston')).toBeTruthy();
  });

  test('Quote renders correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
