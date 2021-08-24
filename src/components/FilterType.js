import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const FilterType = ({ selectHandler }) => {
  const type = useSelector((state) => state.filterReducer);
  const types = ['All', 'Creature', 'Instant', 'Legendary', 'Enchantment', 'Sorcery'];
  const categoryList = types.map((c) => <option key={c}>{c}</option>);
  const handleChange = (val) => selectHandler(val);

  return (
    <form className="select">
      <select
        value={type.filter}
        name="categoryName"
        onChange={(e) => handleChange(e.target.value)}
      >
        {categoryList}
      </select>
      <div className="select_arrow" />
    </form>
  );
};

FilterType.defaultProps = {
  selectHandler: null,
};

FilterType.propTypes = {
  selectHandler: PropTypes.func,
};

export default FilterType;
