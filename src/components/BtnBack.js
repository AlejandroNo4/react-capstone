import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BntBack = ({ path }) => <Link to={path} className="back-button" data-testid="back-btn">Back to List!</Link>;

BntBack.propTypes = {
  path: PropTypes.string.isRequired,
};

export default BntBack;
