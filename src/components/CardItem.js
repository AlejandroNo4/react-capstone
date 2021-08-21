import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { cleanCardData } from '../actions/index';
import { fetchingCard } from './fetching';

const GameItem = ({ match }) => {
  const dispatch = useDispatch();
  const cardState = useSelector((state) => state.singleCardReducer);
  const {
    params: { itemId },
  } = match;
  const url = itemId;

  useEffect(() => {
    fetchingCard({ dispatch, url });
    return () => { dispatch(cleanCardData()); };
  }, []);

  if (cardState.loading || Object.keys(cardState.data).length === 0) {
    return <h2>loading</h2>;
  }
  if (cardState.error) {
    return <h2>{cardState.error}</h2>;
  }

  const card = cardState.data;

  return (
    <div>
      <img alt={card.name} src={card.imageUrl} />
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
