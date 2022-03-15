import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { AuthProvider } from "../../../../../store/auth-context";
import UserMenu from "../UserMenu";
import { store } from "../../../../../redux/store";

const MockUserMenu = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <UserMenu />
      </AuthProvider>
    </Provider>
  );
};

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("UserMenu", () => {
  test("should render profile button", () => {
    render(<MockUserMenu />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("should render profile menu when button clicked", () => {
    render(<MockUserMenu />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    const menuElement = screen.getByRole("menu");
    expect(menuElement).toBeInTheDocument();
  });

  //TODO: figure it out
  //   test("should menu item redirect when clicked", () => {
  //     render(<MockUserMenu />);
  //     const buttonElement = screen.getByRole("button");
  //     fireEvent.click(buttonElement);
  //     const menuItemElement = screen.getByTestId(/test/i);
  //     fireEvent.click(menuItemElement);
  //     expect(mockHistoryPush).toHaveBeenCalledWith("/userRecipes");
  //   });
});
