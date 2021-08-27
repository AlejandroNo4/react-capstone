import React from "react";
import { Provider } from "react-redux";
import { render, screen, cleanup } from "@testing-library/react";
import axiosMock from "axios";
import CardItem from "../../containers/CardItem";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import store from "../../store";

afterEach(cleanup);

const renderWithRedux = (component) => ({
  ...render(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  ),
});

let dataMockfn;

describe("Card Item component tests", () => {
  beforeEach(() => {
    dataMockfn = axiosMock.get.mockResolvedValueOnce({
      data: {
        card: {
          id: "12345",
          artist: "Volkan Baǵa",
          imageUrl:
            "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129465&type=card",
          name: "Angel of Mercy",
          originalType: "Creature - Angel",
          power: "3",
          rarity: "Uncommon",
          text: "Angel of Mercy enters the battlefield, you gain 3 life.",
        },
      },
    });
    const mockMatch = {
      isExact: true,
      params: { itemId: "8ac972b5-9f6e-5cc8-91c3-b9a40a98232e" },
      path: "/item/:itemId",
      url: "/item/8ac972b5-9f6e-5cc8-91c3-b9a40a98232e",
    };
    renderWithRedux(<CardItem match={mockMatch} />);
  });

  it("Renders with Redux", async () => {
    const cardWrapper = await screen.findByTestId("card-wrapper");
    expect(cardWrapper).toBeVisible();
  });

  it("Matches the snapshot", async () => {
    const cardWrapper = await screen.findByTestId("card-wrapper");
    expect(cardWrapper).toMatchSnapshot();
  });

  it("Renders the correct route for BACK button", async () => {
    const buttonBack = await screen.findByTestId("back-btn");
    expect(buttonBack).toHaveProperty("href", "http://localhost/");
    expect(buttonBack).not.toHaveProperty("href", "/");
  });

  it("Renders the correct route for HOME button", async () => {
    const buttonBack = await screen.findByTestId("home-btn");
    expect(buttonBack).toHaveProperty("href", "http://localhost/");
    expect(buttonBack).not.toHaveProperty("href", "/");
  });

  it("All the props are the fetched from api TITLE", async () => {
    const title = await screen.findByTestId("title");
    expect(title).toHaveTextContent("Angel of Mercy");
    expect(title).not.toHaveTextContent("");
  });

  it("All the props are the fetched from api ARTIST", async () => {
    const infoContainer = await screen.findByTestId("info-container");
    expect(infoContainer.childNodes[1]).toHaveTextContent("Volkan Baǵa");
    expect(infoContainer.childNodes[1]).not.toHaveTextContent("");
  });

  it("All the props are the fetched from api ORIGINAL TYPE", async () => {
    const infoContainer = await screen.findByTestId("info-container");
    expect(infoContainer.childNodes[3]).toHaveTextContent("Creature - Angel");
    expect(infoContainer.childNodes[3]).not.toHaveTextContent("");
  });

  it("All the props are the fetched from api POWER", async () => {
    const infoContainer = await screen.findByTestId("info-container");
    expect(infoContainer.childNodes[5]).toHaveTextContent("3");
    expect(infoContainer.childNodes[5]).not.toHaveTextContent("");
  });

  it("All the props are the fetched from api RARITY", async () => {
    const infoContainer = await screen.findByTestId("info-container");
    expect(infoContainer.childNodes[7]).toHaveTextContent("Uncommon");
    expect(infoContainer.childNodes[7]).not.toHaveTextContent("");
  });

  it("All the props are the fetched from api TEXT", async () => {
    const infoContainer = await screen.findByTestId("info-container");
    expect(infoContainer.childNodes[9]).toHaveTextContent(
      "Angel of Mercy enters the battlefield, you gain 3 life."
    );
    expect(infoContainer.childNodes[9]).not.toHaveTextContent("");
  });
});
