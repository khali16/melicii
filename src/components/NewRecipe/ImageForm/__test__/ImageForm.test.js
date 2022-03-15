import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../redux/store";
import { FormProvider } from "../../../../store/form-context";
import ImageForm from "../ImageForm";

const MockImageForm = () => {
  return (
    <Provider store={store}>
      <FormProvider>
        <ImageForm />
      </FormProvider>
    </Provider>
  );
};

describe("ImageForm", () => {
  test("should render url input", () => {
    render(<MockImageForm />);
    const inputElement = screen.getByLabelText(/urlInput/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("should render image when input is filled", () => {
    render(<MockImageForm />);
    const inputElement = screen.getByLabelText(/urlInput/i);
    fireEvent.change(inputElement, { target: { value: "test" } });
    const imageBoxElement = screen.getByRole("img");
    expect(imageBoxElement).toBeInTheDocument();
  });

  test("should cancel image box visibility", () => {
    render(<MockImageForm />);
    const inputElement = screen.getByLabelText(/urlInput/i);
    fireEvent.change(inputElement, { target: { value: "test" } });
    const imageBoxElement = screen.getByRole("img");
    const buttonElement = screen.getByRole("button", { name: "CANCEL" });
    fireEvent.click(buttonElement);
    expect(imageBoxElement).not.toBeInTheDocument();
  });
});
