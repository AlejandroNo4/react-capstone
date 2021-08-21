import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const GameItem = ({ match }) => {
  const cardState = useSelector((selector) => selector.cardsReducer);
  const {
    params: { itemId },
  } = match;

  const cardObj = cardState.data.filter((card) => card.id === itemId);
  console.log(cardObj);
  const card = cardObj[0];
  const replace = 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=83185&type=card';

  return (
    <div>
      <img alt={card.name} src={card.id !== '37f0071d-09b9-5fdc-a5de-52061a01cb64' ? card.imageUrl : replace} />
      <h2>{card.name}</h2>
      <p>Artist:</p>
      <p>{card.artist}</p>
      <p>Original Type:</p>
      <p>{card.originalType}</p>
      <p>Power:</p>
      <p>{card.power}</p>
      <p>Rarity:</p>
      <p>{card.rarity}</p>
      <p>Text:</p>
      <p>{card.text}</p>
      <p>
        <Link to="/">go back!</Link>
      </p>
    </div>
  );
};

GameItem.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default GameItem;
