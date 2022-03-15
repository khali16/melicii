import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormProvider } from "../../../../store/form-context";
import FirstStepRecipeForm from "../FirstStepRecipeForm";

const MockFirstStepComponent = () => {
  return (
    <FormProvider>
      <FirstStepRecipeForm />
    </FormProvider>
  );
};

describe("FirstStepRecipeForm", () => {
  test("should render title input", () => {
    render(<MockFirstStepComponent />);
    const inputElement = screen.getByLabelText(/TITLE/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("should render preparation time input", () => {
    render(<MockFirstStepComponent />);
    const inputElement = screen.getByLabelText(/TOTAL PREP TIME/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("should render select input", () => {
    render(<MockFirstStepComponent />);
    const inputElement = screen.getByLabelText(/Type of meal/i);
    userEvent.click(inputElement);
    const listBox = screen.getByRole("listbox");
    const listItem = within(listBox).getByText(/Lunch/i);
    userEvent.click(listItem);
    expect(screen.getByTestId("lunch")).toBeInTheDocument();
  });

  test("should render difficulty select input", () => {
    render(<MockFirstStepComponent />);
    const inputElement = screen.getByLabelText(/Difficulty/i);
    userEvent.click(inputElement);
    const listBox = screen.getByRole("listbox");
    const listItem = within(listBox).getByText(/Medium/i);
    userEvent.click(listItem);
    expect(screen.getByTestId("medium")).toBeInTheDocument();
  });
});
