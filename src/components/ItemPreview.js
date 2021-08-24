import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import notFound from '../assets/not-found.png';

const ItemPreview = ({ id, name, srcImg }) => (
  <li>
    <p className="preview-item">
      <Link to={`/item/${id}`}>
        {' '}
        <div className={srcImg === undefined ? '' : 'line-card-top'} />
        <p className="name-preview">{name}</p>
        <img
          src={srcImg === undefined ? notFound : srcImg}
          alt={name}
          className="card-image"
        />
      </Link>
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
