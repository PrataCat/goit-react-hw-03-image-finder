import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, changeFilter }) => {
  return (
    <label className={css['filter-label']}>
      Find contacts by name
      <input
        className={css['filter-input']}
        type="text"
        value={value}
        onChange={changeFilter}
      ></input>
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
