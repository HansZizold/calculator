import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

describe('Calculator User Interacion', () => {
  test('Adding', async () => {
    const user = userEvent.setup();
    render(<Calculator />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement.value).toBe('0');

    const number7 = screen.getByRole('button', { name: '7' });
    await user.click(number7);
    expect(inputElement.value).toBe('7');

    const sum = screen.getByRole('button', { name: '+' });
    await user.click(sum);
    expect(inputElement.value).toBe('7+');

    const number3 = screen.getByRole('button', { name: '3' });
    await user.click(number3);
    expect(inputElement.value).toBe('7+3');

    const equalBtn = screen.getByRole('button', { name: '=' });
    await user.click(equalBtn);
    expect(inputElement.value).toBe('10');
  });

  test('Dividing', async () => {
    const user = userEvent.setup();
    render(<Calculator />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement.value).toBe('0');

    let number7 = screen.getByRole('button', { name: '7' });
    await user.click(number7);
    expect(inputElement.value).toBe('7');

    number7 = screen.getByRole('button', { name: '7' });
    await user.click(number7);
    expect(inputElement.value).toBe('77');

    const div = screen.getByRole('button', { name: '÷' });
    await user.click(div);
    expect(inputElement.value).toBe('77÷');

    number7 = screen.getByRole('button', { name: '7' });
    await user.click(number7);
    expect(inputElement.value).toBe('77÷7');

    const equal = screen.getByRole('button', { name: '=' });
    await user.click(equal);
    expect(inputElement.value).toBe('11');
  });
});

test('Calculator renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
