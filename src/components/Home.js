import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, removeFilter } from '../actions';
import ItemPreview from './ItemPreview';
import { fetchingData } from './fetching';
import FilterType from './FilterType';
import Loading from './Loading';
import logo from '../assets/magic-logo.png';

const Home = () => {
  const dispatch = useDispatch();
  const gameDataState = useSelector((state) => state.cardsReducer);
  const filterBy = useSelector((state) => state.filterReducer);
  const cardState = useSelector((state) => state.singleCardReducer);

  console.log(cardState);

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
    <div>
      <nav className="d-flex nav-bar">
        <img alt="logo" className="nav-logo" src={logo} />
        <h1>Card List</h1>
        <FilterType selectHandler={handleFilterChange} />
      </nav>

      <ul className="">
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

export default Home;
