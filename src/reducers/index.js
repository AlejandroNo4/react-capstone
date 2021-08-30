import { combineReducers } from 'redux';
import cardsDataReducer from './cardsData';
import filterReducer from './filter';
import cardReducer from './card';

const rootReducer = combineReducers({
  cardReducer,
  cardsDataReducer,
  filterReducer,
});

export default rootReducer;
