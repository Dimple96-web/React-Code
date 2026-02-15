import { render, screen } from "@testing-library/react";
import ResturantCard, { withPromtedLabel } from "../ResturantCard";
import { RESTURANT_MOCK } from "../mocks/resturantMock";
import "@testing-library/jest-dom";

describe("ResturantCard component test cases", () => {
  it("Should render the ResturantCard component with the restaurant name", () => {
    render(<ResturantCard resData={RESTURANT_MOCK} />);
    const resturantName = screen.getByText("Pizza Hut");
    expect(resturantName).toBeInTheDocument();
  });

  it("Should render the ResturantCard component with the promoted label", () => {
    const ResturantPromoted = withPromtedLabel(ResturantCard);
    render(<ResturantPromoted resData={RESTURANT_MOCK} />);
    const promotedLabel = screen.getByText("Promoted");
    expect(promotedLabel).toBeInTheDocument();
  });
});
