import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Switcher from './index';

describe('Switcher', () => {
  test('renders Switcher', () => {
    render(<Switcher>click me</Switcher>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });
  
/**
  test('renders normal Switcher', () => {
    const { container } = render(<Switcher>click me</Switcher>);
  
    expect(container.querySelector('.ant-btn-normal')).toBeInTheDocument();
  });

  test('renders small Switcher', () => {
    const { container } = render(<Switcher size="small">click me</Switcher>);
  
    expect(container.querySelector('.ant-btn-small')).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();
    render(<Switcher type="primary" onClick={onClick}>click me</Switcher>);

    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);

    expect(onClick).toBeCalled();
  });
  **/
});

