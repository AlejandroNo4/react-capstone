import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ItemPreview = ({ id, name, srcImg }) => {
  console.log('yay');

  return (
    <li>
      <img
        src={srcImg === undefined ? 'http://windowsbulletin.com/wp-content/uploads/2019/07/Tumblr-Images-not-Loading.jpg' : srcImg}
        alt={name}
      />
      <p>{name}</p>
      <p>
        <Link to={`/item/${id}`}>click to see more</Link>
      </p>
    </li>
  );
};

ItemPreview.defaultProps = {
  srcImg: undefined,
};

ItemPreview.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  srcImg: PropTypes.string,
};

export default ItemPreview;
