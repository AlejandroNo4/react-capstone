import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, removeFilter } from '../actions';
import Distribution from './distribution';
import FetchingData from './FetchingData';
import ItemPreview from './ItemPreview';
import FilterCategory from './FilterCategory';

const Home = () => {
  const dispatch = useDispatch();
  const gameDataState = useSelector((state) => state.gameDataReducer);
  const filterBy = useSelector((state) => state.filterReducer);

  useEffect(() => {
    FetchingData({ dispatch });
  }, []);

  if (gameDataState.loading) {
    return <h2>loading</h2>;
  }
  if (gameDataState.error) {
    return <h2>{gameDataState.error}</h2>;
  }

  const handleFilterChange = (catFilter) => {
    if (catFilter === 'all') {
      dispatch(removeFilter());
    } else {
      dispatch(changeFilter(catFilter));
    }
  };

  const calling = Distribution({ gameDataState });
  const categories = calling.gameCategories();
  const allItems = calling.gameItems();

  const itemsToRender = filterBy.filter === 'all' ? allItems : categories[filterBy.filter];

  return (
    <div>
      <FilterCategory selectHandler={handleFilterChange} />
      <ul>
        {itemsToRender.map((item) => (
          <ItemPreview
            key={item.id}
            id={item.id}
            name={item.name}
            srcImg={item.image}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
