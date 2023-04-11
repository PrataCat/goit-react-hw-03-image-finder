import PropTypes from 'prop-types';
import { Component } from 'react';
import { ModalOverlay, ModalContent } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }

  hendleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  hendleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { imgURL, alt } = this.props;
    return (
      <ModalOverlay onClick={this.hendleBackdropClick}>
        <ModalContent>
          <img src={imgURL} alt={alt} />
        </ModalContent>
      </ModalOverlay>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  imgURL: PropTypes.string,
  alt: PropTypes.string,
};

export default Modal;
