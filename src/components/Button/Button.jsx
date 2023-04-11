import React from 'react';
import PropTypes from 'prop-types';
import { LoadButton } from './Button.styled';

const Button = ({ onClickBtn }) => {
  return (
    <LoadButton type="button" onClick={onClickBtn}>
      Load more
    </LoadButton>
  );
};

Button.propTypes = {
  onClickBtn: PropTypes.func.isRequired,
};

export default Button;
