import { render, screen } from "@testing-library/react";
import TypeRecipe from "../TypeRecipe";
import { BrowserRouter } from "react-router-dom";

const mockedProps = {
  title: "Oatmeal Cookies",
  type: "dessert",
  pictureUrl:
    "https://cdn.loveandlemons.com/wp-content/uploads/2019/06/oatmeal-cookies.jpg",
  average: 4.5,
  prepTime: 60,
};

const MockTypeRecipe = () => {
  return (
    <BrowserRouter>
      <TypeRecipe
        title={mockedProps.title}
        type={mockedProps.type}
        pictureUrl={mockedProps.pictureUrl}
        average={mockedProps.average}
        prepTime={mockedProps.prepTime}
      />
    </BrowserRouter>
  );
};

describe("TypeRecipe", () => {
  test("should render title of single type recipe", () => {
    render(<MockTypeRecipe />);
    const titleElement = screen.getByRole("heading", {
      name: "Oatmeal Cookies",
    });
    expect(titleElement).toBeInTheDocument();
  });

  test("should render single type recipe", () => {
    render(<MockTypeRecipe />);
    const typeElement = screen.getByRole("link", {
      name: "dessert Oatmeal Cookies",
    });
    expect(typeElement).toBeInTheDocument();
  });

  test("should render preparation time", () => {
    render(<MockTypeRecipe />);
    const prepTimeElement = screen.getByText(`${mockedProps.prepTime} min`);
    expect(prepTimeElement).toBeInTheDocument();
  });

  test("should render rating", () => {
    render(<MockTypeRecipe />);
    const ratingElement = screen.getByRole("img", {
      name: `${Math.round(mockedProps.average)} Stars`,
    });
    expect(ratingElement).toBeInTheDocument();
  });

  test("should render recipe image", () => {
    render(<MockTypeRecipe />);
    const imgElement = screen.getByRole("img", { name: "" });
    expect(imgElement.src === mockedProps.pictureUrl).toBeTruthy();
  });
});
