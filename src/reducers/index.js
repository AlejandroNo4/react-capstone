import { combineReducers } from 'redux';
import cardsReducer from './cardData';
import filterReducer from './filter';

const rootReducer = combineReducers({
  cardsReducer,
  filterReducer,
});

export default rootReducer;
