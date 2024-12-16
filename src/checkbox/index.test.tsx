import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './index';

describe('Checkbox', () => {
  test('renders Checkbox', () => {
    render(<Checkbox>click me</Checkbox>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });
  
/**
  test('renders normal Checkbox', () => {
    const { container } = render(<Checkbox>click me</Checkbox>);
  
    expect(container.querySelector('.ant-btn-normal')).toBeInTheDocument();
  });

  test('renders small Checkbox', () => {
    const { container } = render(<Checkbox size="small">click me</Checkbox>);
  
    expect(container.querySelector('.ant-btn-small')).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();
    render(<Checkbox type="primary" onClick={onClick}>click me</Checkbox>);

    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);

    expect(onClick).toBeCalled();
  });
  **/
});

