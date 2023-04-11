import PropTypes from 'prop-types';
import { Component } from 'react';
import Modal from '../Modal';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { id, webformatURL, largeImageURL, tags } = this.props.image;
    return (
      <GalleryItem key={id}>
        <GalleryImage
          src={webformatURL}
          alt={tags}
          onClick={this.toggleModal}
        />
        {this.state.showModal && (
          <Modal imgURL={largeImageURL} alt={tags} onClose={this.toggleModal} />
        )}
      </GalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object,
  id: PropTypes.string,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
};

export default ImageGalleryItem;
