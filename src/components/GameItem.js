import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Distribution from './distribution';

const GameItem = ({ match }) => {
  const gameDataState = useSelector((state) => state.gameDataReducer);
  const { params: { itemId } } = match;

  const calling = Distribution({ gameDataState });
  const allItems = calling.gameItems();

  const item = allItems.filter((i) => i.id === itemId);

  console.log(item);

  return (
    <div>
      <h2>{itemId}</h2>
    </div>
  );
};

GameItem.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default GameItem;
