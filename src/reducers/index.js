import { combineReducers } from 'redux';
import cardsReducer from './cardsData';
import filterReducer from './filter';
import singleCardReducer from './card';

const rootReducer = combineReducers({
  singleCardReducer,
  cardsReducer,
  filterReducer,
});

export default rootReducer;
