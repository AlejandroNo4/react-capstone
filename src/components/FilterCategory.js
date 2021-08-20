import PropTypes from 'prop-types';

const FilterCategory = ({ selectHandler }) => {
  const categories = [
    'All',
    'Food Creatures',
    'Non Food Creatures',
    'Equipment',
    'Materials',
    'Monsters',
    'Treasure',
  ];
  const categoryList = categories.map((c) => <option key={c}>{c}</option>);
  const handleChange = (val) => selectHandler(val);

  const camelize = (str) => str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (index === 0 ? word.toLowerCase() : word.toUpperCase()))
    .replace(/\s+/g, '');

  return (
    <form>
      <select
        name="categoryName"
        onChange={(e) => handleChange(camelize(e.target.value))}
      >
        {categoryList}
      </select>
    </form>
  );
};

FilterCategory.defaultProps = {
  selectHandler: null,
};

FilterCategory.propTypes = {
  selectHandler: PropTypes.func,
};

export default FilterCategory;
