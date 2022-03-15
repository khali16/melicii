import { render, screen } from "@testing-library/react";
import SingleRecipeHeadline from "../SingleRecipeHeadline";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockedProps = {
  title: "Salad",
  ratingValue: [5, 5, 4, 5],
  author: "John",
  prepTime: 30,
};
const initialState = mockedProps;
const mockStore = configureStore();
let store;
store = mockStore(initialState);

const MockRecipeHeadline = () => {
  return (
    <Provider store={store}>
      <SingleRecipeHeadline
        title={mockedProps.title}
        ratingValue={mockedProps.ratingValue}
        author={mockedProps.author}
        prepTime={mockedProps.prepTime}
      />
    </Provider>
  );
};

describe("RecipeHeadline", () => {
  test("should render recipe title", () => {
    render(<MockRecipeHeadline />);
    const titleElement = screen.getByText(/Salad/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("should render author", () => {
    render(<MockRecipeHeadline />);
    const authorElement = screen.getByText(/John/i);
    expect(authorElement).toBeInTheDocument();
  });

  test("should render preparation time", () => {
    render(<MockRecipeHeadline />);
    const prepTimeElement = screen.getByText(/30/i);
    expect(prepTimeElement).toBeInTheDocument();
  });
});
