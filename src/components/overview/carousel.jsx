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

  setImageSelect() {
    console.log('In Image Select');
    const { images } = this.props;
    return images.map((image, i) => {
      console.log(image);
      const setPhoto = () => (
        this.setCurrentPhotoIndex(i)
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
    this.setState({ CurrentPhoto: i });
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
        {this.setImageSelect()}
        {/*

            make div expandable

            add arrows

            rotate images

            add side coursel

            add zoom functionality

          */}
        hello from carousel
        <button type="button" onClick={this.leftClick}>
          {'<'}
        </button>
        <button type="button" onClick={this.rightClick}>
          {'>'}
        </button>
        <img src={this.props.images[currentPhoto].url} alt="product" />
      </div>
    );
  }

};

export default Carousel;
