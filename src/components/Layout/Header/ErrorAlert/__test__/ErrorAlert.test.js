import { render, screen } from "@testing-library/react";
import ErrorAlert from "../ErrorAlert";

describe("ErrorAlert", () => {
  test("should render alert", () => {
    render(<ErrorAlert />);
    const alertElement = screen.getByRole("alert");
    expect(alertElement).toBeInTheDocument();
  });
});
