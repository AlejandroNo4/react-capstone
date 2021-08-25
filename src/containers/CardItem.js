import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { cleanCardData } from '../actions/index';
import { fetchingCard } from '../api/fetching';
import Loading from './Loading';
import logo from '../assets/magic-logo.png';
import notFound from '../assets/not-found.png';

const CardItem = ({ match }) => {
  const dispatch = useDispatch();
  const cardState = useSelector((state) => state.cardReducer);
  const {
    params: { itemId },
  } = match;
  const url = itemId;

  useEffect(() => {
    fetchingCard({ dispatch, url });
    return () => { dispatch(cleanCardData()); };
  }, []);

  if (cardState.loading) {
    return <Loading />;
  }
  if (cardState.error) {
    return <h2>{cardState.error}</h2>;
  }

  const card = cardState.data;

  return (
    <div>
      <nav className="d-flex nav-bar">
        <p>
          <Link to="/"><img alt="logo" className="nav-logo" src={logo} /></Link>
        </p>
      </nav>
      <div className="d-flex flex-column align-center card-info cards-container">
        <h2 className="title">{card.name}</h2>
        <div className="img-container">
          <div className={card.imageUrl === undefined ? '' : 'line-card-top'} />
          <img alt={card.name} src={card.imageUrl === undefined ? notFound : card.imageUrl} />
          <div className={card.imageUrl === undefined ? '' : 'line-card-bottom'} />
        </div>
        <div className="info-container">
          <p className="property">Artist:</p>
          <p className="content">{card.artist}</p>
          <p className="property">Original Type:</p>
          <p className="content">{card.originalType}</p>
          <p className="property">Power:</p>
          <p className="content">{card.power}</p>
          <p className="property">Rarity:</p>
          <p className="content">{card.rarity}</p>
          <p className="property">Text:</p>
          <p className="content">{card.text}</p>
        </div>
        <Link to="/" className="back-button">BACK TO LIST</Link>
      </div>
    </div>
  );
};

CardItem.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CardItem;
