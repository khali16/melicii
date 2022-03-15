import { render, screen } from "@testing-library/react";
import Comment from "../Comment";

const mockedProps = {
  author: "John",
  comment: "Delicious recipe!!!",
};

describe("Comment", () => {
  test("should render single comment", () => {
    render(
      <Comment author={mockedProps.author} comment={mockedProps.comment} />
    );
    const authorElement = screen.getByText(/John/i);
    const commentElement = screen.getByText(/Delicious recipe!!!/i);
    expect(authorElement).toBeInTheDocument();
    expect(commentElement).toBeInTheDocument();
  });
});
