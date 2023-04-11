import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';

class App extends Component {
  state = {
    searchValue: '',
  };

  hendleSearch = value => {
    this.setState({ searchValue: value });
  };

  render() {
    return (
      <div>
        <Searchbar setSearchValue={this.hendleSearch} />
        <ImageGallery keyWord={this.state.searchValue} />
        <ToastContainer autoClose={3000} theme="colored" />
      </div>
    );
  }
}

App.propTypes = {
  value: PropTypes.string,
};

export default App;
