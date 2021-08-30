import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, removeFilter } from '../actions';
import ItemPreview from '../components/ItemPreview';
import fetchingData from '../api/fetchingData';
import FilterType from '../components/FilterType';
import Loading from '../components/Loading';
import BtnHome from '../components/BtnHome';

const CardsList = () => {
  const dispatch = useDispatch();
  const gameDataState = useSelector((state) => state.cardsDataReducer);
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
      <nav className="d-flex nav-bar align-center">
        <div>
          <BtnHome />
        </div>
        <FilterType selectHandler={handleFilterChange} val={filterBy.filter} />
      </nav>

      <ul className="d-flex cards-grid justify-center" data-testid="cards-test">
        {cardsToRender.map((card) => (
          <ItemPreview
            key={card.id}
            id={card.id}
            name={card.name}
            srcImg={card.imageUrl}
          />
        ))}
      </ul>
    </div>
  );
};

export default CardsList;
