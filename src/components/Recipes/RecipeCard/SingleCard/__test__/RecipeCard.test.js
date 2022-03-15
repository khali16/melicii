import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RecipeCard from "../RecipeCard";

const mockedProps = {
  title: "Oatmeal Cookies",
  pictureUrl:
    "https://cdn.loveandlemons.com/wp-content/uploads/2019/06/oatmeal-cookies.jpg",
  type: "dessert",
  prepTime: 60,
  average: 4.5,
};

const MockRecipeCard = () => {
  return (
    <BrowserRouter>
      <RecipeCard
        title={mockedProps.title}
        type={mockedProps.type}
        pictureUrl={mockedProps.pictureUrl}
        average={mockedProps.average}
        prepTime={mockedProps.prepTime}
      />
    </BrowserRouter>
  );
};

describe("RecipeCard", () => {
  test("should render recipe type", () => {
    render(<MockRecipeCard />);
    const typeElement = screen.getByRole("link", {
      name: `${mockedProps.type} ${mockedProps.title}`,
    });
    expect(typeElement).toBeInTheDocument();
  });

  test("should render recipe image", () => {
    render(<MockRecipeCard />);
    const imgElement = screen.getByRole("img", { name: "" });
    expect(imgElement.src === mockedProps.pictureUrl).toBeTruthy();
  });

  test("should render recipe rating", () => {
    render(<MockRecipeCard />);
    const ratingElement = screen.getByRole("img", {
      name: `${Math.round(mockedProps.average)} Stars`,
    });
    expect(ratingElement).toBeInTheDocument();
  });

  test("should render recipe title", () => {
    render(<MockRecipeCard />);
    const titleElement = screen.getByRole("heading", {
      name: `${mockedProps.title}`,
    });
    expect(titleElement).toBeInTheDocument();
  });

  test("should render preparation time", () => {
    render(<MockRecipeCard />);
    const prepTimeElement = screen.getByText(`${mockedProps.prepTime} min`);
    expect(prepTimeElement).toBeInTheDocument();
  });
});
