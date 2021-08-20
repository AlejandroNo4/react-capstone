import { combineReducers } from 'redux';
import gameDataReducer from './gameData';
import filterReducer from './filter';

const rootReducer = combineReducers({
  gameDataReducer,
  filterReducer,
});

export default rootReducer;
