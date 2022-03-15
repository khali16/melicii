import { render, screen } from "@testing-library/react";
import Signup from "../Signup";
import { AuthProvider } from "../../../store/auth-context";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

const MockSignup = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Signup closeModal={() => {}} />
      </AuthProvider>
    </Provider>
  );
};

describe("Signup", () => {
  test("should render email input", () => {
    render(<MockSignup />);
    const inputElement = screen.getByLabelText(/EMAIL/i);
    expect(inputElement).toBeInTheDocument();
  });
  test("should render password inputs", () => {
    render(<MockSignup />);
    const passwordElement = screen.getByLabelText(/PASSWORD/i);
    expect(passwordElement).toBeInTheDocument();
  });
  test("should render confirm password input", () => {
    render(<MockSignup />);
    const confirmElement = screen.getByLabelText(/CONFIRM/i);
    expect(confirmElement).toBeInTheDocument();
  });
  test("should render username input", () => {
    render(<MockSignup />);
    const inputElement = screen.getByLabelText(/USERNAME/i);
    expect(inputElement).toBeInTheDocument();
  });
  test("should render button", () => {
    render(<MockSignup />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
