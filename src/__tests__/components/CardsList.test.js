import React from 'react';
import { Provider } from 'react-redux';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import axiosMock from 'axios';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import CardsList from '../../containers/CardsList';
import store from '../../store';

afterEach(cleanup);

const renderWithRedux = (component) => ({
  ...render(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>,
  ),
});

describe('Cards List component', () => {
  beforeEach(() => {
    axiosMock.get.mockResolvedValueOnce({
      data: {
        cards: [
          {
            name: 'Test name for a card',
            id: '1',
            imageUrl: '/Test-img-URL',
            type: 'Creature',
          },
          {
            name: 'Test name for a Instant card',
            id: '12',
            imageUrl: '/Test-img-URL',
            type: 'Instant',
          },
          {
            name: 'Test name for a Legendary card',
            id: '123',
            imageUrl: '/Test-img-URL',
            type: 'Legendary',
          },
          {
            name: 'Test name for a Enchantment card',
            id: '1234',
            imageUrl: '/Test-img-URL',
            type: 'Enchantment',
          },
          {
            name: 'Test name for a Sorvery card',
            id: '12345',
            imageUrl: '/Test-img-URL',
            type: 'Sorcery',
          },
        ],
      },
    });
    renderWithRedux(<CardsList />);
  });

  it('Renders with Redux', async () => {
    const cardsWrapper = await screen.findByTestId('cards-test');
    expect(cardsWrapper).toBeVisible();
  });

  it('Matches the snapshot', async () => {
    const cardsWrapper = await screen.findByTestId('cards-test');
    expect(cardsWrapper).toMatchSnapshot();
  });

  it('Renders the ItemPreview component', async () => {
    const cardPreview = await screen.findByTestId('card-preview-1');
    expect(cardPreview).toBeVisible();
  });

  it("Renders the correct route for home button", async () => {
    const buttonBack = await screen.findByTestId("home-btn");
    expect(buttonBack).toHaveProperty("href", "http://localhost/");
    expect(buttonBack).not.toHaveProperty("href", "http://localhost/12345");
  });

  it('Pass the correct props to the Item Preview component', async () => {
    const imgPreview = await screen.findByTestId('image-preview-1');
    expect(imgPreview).toHaveProperty('id', '1');
    expect(imgPreview).toHaveProperty('alt', 'Test name for a card');
    expect(imgPreview).toHaveProperty('src', 'http://localhost/Test-img-URL');
  });

  it('Pass the INCORRECT props to the Item Preview component', async () => {
    const imgPreview = await screen.findByTestId('image-preview-1');
    expect(imgPreview).not.toHaveProperty('id', '');
    expect(imgPreview).not.toHaveProperty('alt', '');
    expect(imgPreview).not.toHaveProperty('src', '');
  });

  it('The image element can route to the given id', async () => {
    const cardPreview = await screen.findByTestId('card-preview-1');
    const link = cardPreview.childNodes[0];
    expect(link).toHaveProperty('href', 'http://localhost/item/1');
    expect(link).not.toHaveProperty('href', '/');
  });

  it('The image element can route to the given id', async () => {
    const cardPreview = await screen.findByTestId('card-preview-12');
    const link = cardPreview.childNodes[0];
    expect(link).toHaveProperty('href', 'http://localhost/item/12');
    expect(link).not.toHaveProperty('href', '/');
  });

  it('The image element can route to the given id', async () => {
    const cardPreview = await screen.findByTestId('card-preview-123');
    const link = cardPreview.childNodes[0];
    expect(link).toHaveProperty('href', 'http://localhost/item/123');
    expect(link).not.toHaveProperty('href', '/');
  });

  it('Shows the list for the type filter when click on select', async () => {
    const filterSelect = await screen.getByText('All');
    fireEvent.click(filterSelect);
    const allTypes = await screen.findAllByTestId(/filter-type-/i);
    expect(allTypes.length).toBe(6);
    expect(allTypes.length).not.toBe(0);
  });

  it('Shows ALL five cards ath the first rendering', async () => {
    const cardsShown = await screen.findAllByTestId(/card-preview-/i);
    expect(cardsShown.length).toBe(5);
    expect(cardsShown.length).not.toBe(0);
  });

  it('Shows ONLY the elements that fits on the selected CREATURE type filter', async () => {
    const cardsWrapper = await screen.findByTestId('cards-test');
    const selectBox = await screen.findByTestId('select-box');
    fireEvent.change(selectBox, { target: { value: 'Creature' } });
    expect(cardsWrapper.childNodes.length).toBe(1);
    expect(cardsWrapper.childNodes.length).not.toBe(5);
  });

  it('Shows ONLY the elements that fits on the selected INSTANT type filter', async () => {
    const cardsWrapper = await screen.findByTestId('cards-test');
    const selectBox = await screen.findByTestId('select-box');
    fireEvent.change(selectBox, { target: { value: 'Instant' } });
    expect(cardsWrapper.childNodes.length).toBe(1);
    expect(cardsWrapper.childNodes.length).not.toBe(5);
  });

  it('Shows ONLY the elements that fits on the selected LEGENDARY type filter', async () => {
    const cardsWrapper = await screen.findByTestId('cards-test');
    const selectBox = await screen.findByTestId('select-box');
    fireEvent.change(selectBox, { target: { value: 'Legendary' } });
    expect(cardsWrapper.childNodes.length).toBe(1);
    expect(cardsWrapper.childNodes.length).not.toBe(5);
  });

  it('Shows ONLY the elements that fits on the selected ENCHANTMENT type filter', async () => {
    const cardsWrapper = await screen.findByTestId('cards-test');
    const selectBox = await screen.findByTestId('select-box');
    fireEvent.change(selectBox, { target: { value: 'Enchantment' } });
    expect(cardsWrapper.childNodes.length).toBe(1);
    expect(cardsWrapper.childNodes.length).not.toBe(5);
  });

  it('Shows ONLY the elements that fits on the selected SORCERY type filter', async () => {
    const cardsWrapper = await screen.findByTestId('cards-test');
    const selectBox = await screen.findByTestId('select-box');
    fireEvent.change(selectBox, { target: { value: 'Sorcery' } });
    expect(cardsWrapper.childNodes.length).toBe(1);
    expect(cardsWrapper.childNodes.length).not.toBe(5);
  });
});
