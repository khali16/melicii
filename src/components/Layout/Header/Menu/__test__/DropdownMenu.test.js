import { render, screen, fireEvent } from "@testing-library/react";
import { useHistory } from "react-router";
import DropdownMenu from "../DropdownMenu";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("LogIn", () => {
  test("should render menu button", () => {
    render(<DropdownMenu />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("should render menu when button clicked", () => {
    render(<DropdownMenu />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    const menuElement = screen.getByRole("menu");
    expect(menuElement).toBeInTheDocument();
  });

  test("should menu item redirect to another url", () => {
    render(<DropdownMenu />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    const menuItemElement = screen.getByText(/Breakfast/i);
    fireEvent.click(menuItemElement);
    expect(mockHistoryPush).toHaveBeenCalledWith("/type/breakfast");
  });
});
