import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ItemPreview = ({ id, name, srcImg }) => (
  <li>
    <img src={srcImg} alt={name} />
    <p>{name}</p>
    <p>
      <Link to={`/item/${id}`}>click to see more</Link>
    </p>
  </li>
);

ItemPreview.defaultProps = {
  srcImg: undefined,
};

ItemPreview.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  srcImg: PropTypes.string,
};

export default ItemPreview;
