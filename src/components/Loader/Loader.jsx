import { Grid } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrap>
      <Grid
        height="50"
        width="50"
        color="#3f51b5"
        ariaLabel="grid-loading"
        radius="12.5"
        visible={true}
      />
    </LoaderWrap>
  );
};

export default Loader;
