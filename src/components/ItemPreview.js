import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const replace = 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=83185&type=card';

const ItemPreview = ({ id, name, srcImg }) => (
  <li>
    <img src={id !== '37f0071d-09b9-5fdc-a5de-52061a01cb64' ? srcImg : replace} alt={name} />
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
