import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import { ALL_RESTURANT_MOCK } from "../mocks/allResturantMock";
import "@testing-library/jest-dom";
globalThis.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(ALL_RESTURANT_MOCK),
  });
});
describe("Search functionality test cases", () => {
  it("Should render the Search component with search input and button", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>,
      );
    });

    const cardBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardBeforeSearch.length).toBe(8);

    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "pizza" } });
    fireEvent.click(searchBtn);
    const cardAfterSearch = screen.getAllByTestId("resCard");

    expect(cardAfterSearch.length).toBe(1);
  });

  it("Should filter top rated button", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>,
      );
    });

    const cardBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardBeforeFilter.length).toBe(8);

    const ratedButton = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });
    fireEvent.click(ratedButton);
    const cardAfterFilter = screen.getAllByTestId("resCard");

    expect(cardAfterFilter.length).toBe(2);
  });
});
