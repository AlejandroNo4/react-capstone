import React from "react";
import { Provider } from "react-redux";
import store from "../../store";
import { render, screen, cleanup } from "@testing-library/react";
import CardsList from "../../containers/CardsList";
import axiosMock from "axios";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);
const renderWithRedux = (component) => ({
  ...render(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  ),
});

describe("Cards List component", () => {
  it("Renders with Redux", async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: {
        cards: [
          {
            name: "test",
            id: "1234",
            imageUrl: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=530155&type=card",
            type: "Creature",
          },
        ],
      },
    });
    const component = renderWithRedux(<CardsList />);
    const elem = await screen.findByTestId("cards-test");
    screen.debug()
  });
});
