import PropTypes from 'prop-types';
import { Component } from 'react';
import { toast } from 'react-toastify';
import { GalleryUl } from './ImageGallery.styled';
import FetchQuery from '../../services/Api';
import { IMG_PER_PAGE } from '../../services/Api/Api';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';
import Loader from '../Loader';

class ImageGallery extends Component {
  state = {
    imageArr: [],
    page: 1,
    isLoading: false,
    disabledBtn: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const newKeyWord = this.props.keyWord;
    const prevKeyWord = prevProps.keyWord;
    const currPage = this.state.page;
    const prevPage = prevState.page;

    if (
      (prevKeyWord !== newKeyWord && currPage === 1) ||
      (prevKeyWord !== newKeyWord && currPage !== 1)
    ) {
      this.imageArrReset();
      this.pageReset();
      this.getImages();
    }

    if (prevKeyWord === newKeyWord && currPage !== prevPage && currPage !== 1) {
      this.getImages();
    }
  }

  getImages = async () => {
    this.isLoadingToggle();
    this.setState({ disabledBtn: false });
    try {
      const data = await FetchQuery(this.props.keyWord, this.state.page);

      if (data.length === 0) {
        toast.info('There are no images for your request.');
        this.imageArrReset();
        this.pageReset();
        this.isLoadingToggle();
        return;
      }

      if (data.length === IMG_PER_PAGE) {
        this.setState({ disabledBtn: true });
      } else {
        this.setState({ disabledBtn: false });
      }

      this.setState(({ imageArr }) => ({
        imageArr: [...imageArr, ...data],
      }));
    } catch (error) {
      this.imageArrReset();
      this.pageReset();
      this.setState({
        disabledBtn: false,
        error: 'Ooops, something went wrong. Restart the application.',
      });

      console.error();
    }

    this.isLoadingToggle();
  };

  pageUpdate = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  imageArrReset = () => {
    this.setState({ imageArr: [] });
  };

  pageReset = () => {
    this.setState({ page: 1 });
  };

  isLoadingToggle = () => {
    this.setState(({ isLoading }) => ({
      isLoading: !isLoading,
    }));
  };

  render() {
    const { imageArr, error, isLoading, disabledBtn } = this.state;
    return (
      <>
        <GalleryUl>
          {imageArr.map(image => (
            <ImageGalleryItem key={image.id} image={image} />
          ))}
        </GalleryUl>
        {error && <h2>{error}</h2>}
        {isLoading && <Loader />}
        {disabledBtn && <Button onClickBtn={this.pageUpdate} />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  data: PropTypes.array,
  keyWord: PropTypes.string.isRequired,
};

export default ImageGallery;
