import PropTypes from 'prop-types';

const FilterItem = ({  itemEnum, title, changeFilter, isSelected }) => {
  return (
    <li>
      <a
        href="/"
        className={isSelected ? 'selected' : ''}
        onClick={(e) => {
          e.preventDefault();
          changeFilter(itemEnum);
        }}
      >{title}</a>
    </li>
  );
}

FilterItem.propTypes = {
  itemEnum: PropTypes.string,
  title: PropTypes.string,
  changeFilter: PropTypes.func,
  isSelected: PropTypes.bool
}

export default FilterItem;