import axios from 'axios';
import PropTypes from 'prop-types';

const API_KEY = '33638129-981d5a332eef74e1c5d750a3a';
const ENDPOINT = 'https://pixabay.com/api/';
export const IMG_PER_PAGE = 12;

const FetchQuery = async (value, page) => {
  const URL = `${ENDPOINT}?key=${API_KEY}`;
  const options = {
    params: {
      q: value,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: IMG_PER_PAGE,
      page: page,
    },
  };

  const response = await axios.get(URL, options);

  return response.data.hits;
};

FetchQuery.propTypes = {
  value: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

export default FetchQuery;
