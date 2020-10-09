import React from 'react';
import {
  Card,
  Button,
  IconButton,
  Grid,
  GridList,
  GridListTile,
} from '@material-ui/core';
import {
  ChevronLeft,
  ChevronRight,
} from '@material-ui/icons';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhoto: 0,
    };
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
    this.setCurrentPhotoIndex = this.setCurrentPhotoIndex.bind(this);
  }

  componentDidMount() {
  }

  setThumbnailSelect(sliceIndexs) {
    console.log('In Image Select');
    const { images } = this.props;
    let sliceIndex = this.resetThumbnailSelectStartingIndex();
    console.log(sliceIndex);
    return images.slice(sliceIndex, sliceIndex + 5).map((image, i) => {
      const setPhoto = () => (
        this.setCurrentPhotoIndex(i + sliceIndex)
      );

      return (
        <GridListTile
          style={{
            backgroundImage: `url(${image.thumbnail_url})`,
            backgroundSize: 'cover',
            boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.3), 0px 8px 10px 1px rgba(0,0,0,0.22), 0px 3px 14px 2px rgba(0,0,0,0.14)',
            padding: 'none',
            // height: 'width',
          }}
          onClick={setPhoto}
        />
      );
    });
  }

  setCurrentPhotoIndex(i) {
    console.log('in set index', i);
    this.setState({ currentPhoto: i });
  }

  resetThumbnailSelectStartingIndex() {
    const { currentPhoto } = this.state;
    const { images } = this.props;
    console.log(currentPhoto, 'in get starting', images.length);

    //check if less than 5 thumbnails AND first 3 indeices
    if (currentPhoto <= 2 || images.length < 5) {
      console.log('returning 0')
      return 0;
    }
    if (currentPhoto >= images.length - 4) {
      console.log('returning minus');
      return images.length - 5;
    }
    console.log('middle', currentPhoto);
    return currentPhoto - 2;
  }

  leftClickButton() {
    const { currentPhoto } = this.state;
    if (currentPhoto !== 0) {
      return (
        <IconButton
          size="medium"
          style={{backgroundColor: 'rgba(0,0,0,0.5)'}}
          onClick={this.leftClick}
        >
          <ChevronLeft
            style={{ color: 'white' }}
            fontSize="large"
          />
        </IconButton>
      );
    }
    return (
      <IconButton
        size="medium"
        style={{backgroundColor: 'rgba(0,0,0,0.5)'}}
      >
        <ChevronLeft
          style={{ color: 'grey' }}
          fontSize="large"
          disabled
        />
      </IconButton>
    );
  }

  rightClickButton() {
    const { currentPhoto } = this.state;
    const { images } = this.props;
    if (currentPhoto !== images.length - 1) {
      return (
        <IconButton
          size="medium"
          style={{backgroundColor: 'rgba(0,0,0,0.5)'}}
          onClick={this.rightClick}
        >
          <ChevronRight
            style={{ color: 'white' }}
            fontSize="large"
          />
        </IconButton>
      );
    }
    return (
      <IconButton
        size="medium"
        style={{backgroundColor: 'rgba(0,0,0,0.5)'}}
      >
        <ChevronRight
          style={{ color: 'grey' }}
          fontSize="large"
          disabled
        />
      </IconButton>
    );
  }

  leftClick() {
    const { currentPhoto } = this.state;

    if (currentPhoto !== 0) {
      this.setState({ currentPhoto: currentPhoto - 1 });
    }
  }

  rightClick() {
    const { images } = this.props;
    const { currentPhoto } = this.state;

    // Todo: props validation
    if (currentPhoto !== images.length - 1) {
      this.setState({ currentPhoto: currentPhoto + 1 });
    }
    console.log(this.state);
  }

  render() {
    const { currentPhoto } = this.state;
    const { images } = this.props;
    console.log(this.props);

    if (images.length === 0) {
      return <div> loading </div>;
    }
    return (
      <Card
        raised
        style={{
          backgroundImage: `url(${images[currentPhoto].url})`,
          backgroundColor: 'black',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100%',
        }}
      >
        <Grid container style={{ height: '100%' }}>
          <Grid item xs={2}>
            <GridList col={1} row cellHeight={70}>
              {this.setThumbnailSelect()}
            </GridList>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            justify="space-between"
            xs={10}
            style={{padding: '1rem'}}
          >
            {this.leftClickButton()}
            {this.rightClickButton()}
          </Grid>
        </Grid>
      </Card>
    );
  }
}

export default Carousel;