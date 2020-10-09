import React from 'react';

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
        <img
          height="100"
          width="100"
          alt="thumbnail"
          src={image.thumbnail_url}
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
      console.log(currentPhoto, 'NOT ZERO')
      return (
        <button type="button" onClick={this.leftClick}>
          {'<'}
        </button>
      )
    }
    return '';
  }

  rightClickButton() {
    const { currentPhoto } = this.state;
    const { images } = this.props;
    console.log(currentPhoto)
    if (currentPhoto !== images.length - 1) {
      return (
        <button type="button" onClick={this.rightClick}>
          {'>'}
        </button>
      );
    }
    return '';
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
      <div className="expandable">
        {this.setThumbnailSelect()}
        {/*

            make div expandable

            add arrows

            rotate images

            add side coursel

            add zoom functionality

          */}
        <div>
          THESE ARE THE PHOTOS BUTTONS:
          {this.leftClickButton()}
          {this.rightClickButton()}
        </div>
        <img src={images[currentPhoto].url} alt="product" />
      </div>
    );
  }
}

export default Carousel;
