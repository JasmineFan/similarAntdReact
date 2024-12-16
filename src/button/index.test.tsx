import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./index";

// test('renders learn react link', () => {
//   render(<Button >click me</Button>);
//   const linkElement = screen.getByText(/click me/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe("Button", () => {
  test("renders button", () => {
    render(<Button>click me</Button>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders primary button", () => {
    const { container } = render(<Button type="primary">click me</Button>);

    expect(container.querySelector(".ant-btn-primary")).toBeInTheDocument();
  });
  test("renders normal button", () => {
    const { container } = render(<Button>click me</Button>);

    expect(container.querySelector(".ant-btn")).toBeInTheDocument();
  });
  test("renders small button", () => {
    const { container } = render(<Button size="small">click me</Button>);

    expect(container.querySelector(".ant-btn")).toBeInTheDocument();
  });

  test("should support click", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>click me</Button>);
    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);
    expect(onClick).toBeCalled();
  });
  test("should support blur", () => {
    const onBlur = jest.fn();
    render(<Button onBlur={onBlur}>click me</Button>);
    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);
    fireEvent.blur(linkElement);

    expect(onBlur).toBeCalled();
  });

  test("should support focus", () => {
    const onFocus = jest.fn();
    render(<Button onFocus={onFocus}>click me</Button>);
    const linkElement = screen.getByText(/click me/i);
    fireEvent.focus(linkElement);
    expect(onFocus).toBeCalled();
  });
});
