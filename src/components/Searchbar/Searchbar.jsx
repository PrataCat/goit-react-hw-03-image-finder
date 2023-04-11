import PropTypes from 'prop-types';
import { Component } from 'react';
import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import {
  SearchbarWrap,
  SearchForm,
  SearchInput,
  SearchButton,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  hendleSubmit = e => {
    e.preventDefault();

    if (this.state.inputValue.trim() === '') {
      toast.info('Enter a keyword to search for a picture.');
      return;
    }

    this.props.setSearchValue(this.state.inputValue.toLowerCase());
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <SearchbarWrap>
        <SearchForm onSubmit={this.hendleSubmit}>
          <SearchButton type="submit">
            <BsSearch size={20} fill="black" />
          </SearchButton>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarWrap>
    );
  }
}

Searchbar.propTypes = {
  setSearchValue: PropTypes.func,
};

export default Searchbar;
