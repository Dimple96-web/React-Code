const { render, screen } = require("@testing-library/react");
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact component test cases", () => {
  it("Should render the heading component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should render the button component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Should find the submit button in the component", () => {
    render(<Contact />);
    const submitButton = screen.getByText("Submit");
    expect(submitButton).toBeInTheDocument();
  });

  it("Should find the input box in the component", () => {
    render(<Contact />);
    const inputBox = screen.getByPlaceholderText("name");
    expect(inputBox).toBeInTheDocument();
  });

  it("Should find multiple input boxes in the component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });

  // it("Should find multiple input boxes in the component", () => {
  //   render(<Contact />);
  //   const inputBoxes = screen.getAllByRole("textbox");
  //   expect(inputBoxes.length).toBe(3);
  // });

  // it("Should find the submit button in the component", () => {
  //   render(<Contact />);
  //   const submitButton = screen.getByText("Submit1");
  //   expect(submitButton).toBeInTheDocument();
  // });
});
