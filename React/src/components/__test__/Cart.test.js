import { render, screen, fireEvent } from "@testing-library/react";
import ResturantDetails from "../ResturantDetails";
import { resturantDetails } from "../../utils/mockData";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(resturantDetails),
  });
});
describe("Restaurant menu flow test cases", () => {
  it("Should load the resturant menu component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <ResturantDetails />
          <Header />
          <Cart />
        </Provider>
      </BrowserRouter>,
    );
    const findPanel = screen.getByText(/Noodles/);
    fireEvent.click(findPanel);
    const items = screen.getAllByTestId("items");
    expect(items.length).toBe(6);

    const addBtns = screen.getAllByRole("button", { name: "Add" });

    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart: (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart: (2 items)")).toBeInTheDocument();

    let itemsList = screen.getAllByTestId("items");
    expect(itemsList.length).toBe(8);

    const clearCartBtn = screen.getByRole("button", { name: "Clear cart" });
    fireEvent.click(clearCartBtn);

    itemsList = screen.getAllByTestId("items");
    expect(itemsList.length).toBe(6);
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });
});
