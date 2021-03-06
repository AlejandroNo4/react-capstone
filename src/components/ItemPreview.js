import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import notFound from '../assets/not-found.png';

const ItemPreview = ({ id, name, srcImg }) => (
  <li>
    <div className="preview-item" data-testid={`card-preview-${id}`}>
      <Link to={`/item/${id}`}>
        {' '}
        <div className={srcImg === undefined ? '' : 'line-card-top'} />
        <p className="name-preview">{name}</p>
        <img
          src={srcImg === undefined ? notFound : srcImg}
          alt={name}
          id={id}
          className="card-image"
          data-testid={`image-preview-${id}`}
        />
      </Link>
    </div>
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
