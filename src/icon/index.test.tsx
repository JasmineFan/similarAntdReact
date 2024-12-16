import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Icon from "./index";


describe("Icon", () => {
  test("renders Icon", () => {
    render(<Icon>click me</Icon>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });
 
});
