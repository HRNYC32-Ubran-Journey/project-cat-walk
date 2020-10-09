import React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
} from '@material-ui/core';
import {
  FullscreenExit,
} from '@material-ui/icons';

class ShowFullscreenImage extends React.Component {
  constructor(props) {
    super(props);

    this.openModel = this.openModel.bind(this);
    this.closeModel = this.closeModel.bind(this);

    this.recent = null;
    this.state = {
      currentImage: null,
      isBeingClosed: false,
      lastImage: null,
    };
  }

  componentDidUpdate() {
    this.openModel();
  }

  openModel () {
    const { currentImage } = this.state;
    const { image } = this.props;

    if (currentImage !== image && this.recent !== image) {
      this.setState({
        currentImage: image,
      });
    }
  }

  closeModel() {
    const { currentImage } = this.state;

    this.recent = currentImage;
    this.setState({
      currentImage: null,
    }, () => {
      this.recent = null;
    });
  }

  render() {
    const { currentImage } = this.state;
    if (currentImage === null) { return ''; }
    return (
      <div
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          backgroundImage: `url(${currentImage})`,
          backgroundPSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
          zIndex: '1000',
          position: 'absolute',
          top: document.documentElement.scrollTop,
          left: 0,
          width: '100vw',
          height: '100vh',
          display: `${currentImage ? 'inline' : 'none'}`,
        }}
      >
        <IconButton
          onClick={this.closeModel}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            color: '#FFFFFF',
            backgroundColor: 'rgba(0,0,0,0.7)',
          }}
        >
          <FullscreenExit />
        </IconButton>
      </div>
    );
  }
}

ShowFullscreenImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ShowFullscreenImage;
