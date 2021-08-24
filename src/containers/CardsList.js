import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeFilter, removeFilter } from '../actions';
import ItemPreview from '../components/ItemPreview';
import { fetchingData } from '../api/fetching';
import FilterType from '../components/FilterType';
import Loading from './Loading';
import logo from '../assets/magic-logo.png';

const CardsList = () => {
  const dispatch = useDispatch();
  const gameDataState = useSelector((state) => state.cardsReducer);
  const filterBy = useSelector((state) => state.filterReducer);

  useEffect(() => {
    fetchingData({ dispatch });
  }, []);

  if (gameDataState.loading) {
    return <Loading />;
  }
  if (gameDataState.error) {
    return <h2>{gameDataState.error}</h2>;
  }

  const allCards = gameDataState.data;
  const filteredCards = gameDataState.data.filter(
    (card) => card.type.split(' ')[0] === filterBy.filter,
  );

  const handleFilterChange = (catFilter) => {
    if (catFilter === 'all') {
      dispatch(removeFilter());
    } else {
      dispatch(changeFilter(catFilter));
    }
  };

  const cardsToRender = filterBy.filter === 'All' ? allCards : filteredCards;
  return (
    <div className="cards-container d-flex flex-column align-center">
      <nav className="d-flex nav-bar">
        <p>
          <Link to="/"><img alt="logo" className="nav-logo" src={logo} /></Link>
        </p>
        <FilterType selectHandler={handleFilterChange} />
      </nav>

      <ul className="d-flex cards-grid">
        {cardsToRender.map((card) => (
          <ItemPreview
            key={card.id}
            id={card.id}
            name={card.name}
            srcImg={card.imageUrl}
          />
        ))}
        ;
      </ul>
    </div>
  );
};

export default CardsList;
