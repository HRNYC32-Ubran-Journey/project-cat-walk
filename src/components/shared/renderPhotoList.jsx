import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonBase,
  Dialog,
  GridList,
  GridListTile,
} from '@material-ui/core';
import ShowFullscreenImage from './showFullscreenImage';

class RenderPhotosList extends React.Component {
  constructor(props) {
    super(props);

    this.changeImage = this.changeImage.bind(this);

    this.state = {
      image: null,
    };
  }

  changeImage(image) {
    console.log(image);
    this.setState({
      image,
    }, console.log(this.state.image));
  }

  render() {
    const { pictures } = this.props;
    const { image } = this.state;
    console.log(image)
    if (Array.isArray(pictures) && pictures.length > 0) {
      return (
        <>
          <ShowFullscreenImage image={image} />
          <GridList
            cols={5}
            style={{
              backgroundColor: 'darkgrey',
              boxShadow: 'inset 0px 5px 5px -3px rgba(0,0,0,0.2), inset 0px 8px 10px 1px rgba(0,0,0,0.14), inset 0px 3px 14px 2px rgba(0,0,0,0.12)',
              padding: '0.75rem',
              paddingTop: '1rem',
              paddingBottom: '1rem',
            }}
          >
            {
              pictures.map((e) => {
                const openImage = () => {
                  this.changeImage(e.url);
                };

                return (
                  <GridListTile
                    className="image-floater"
                    style={{
                      backgroundImage: `url(${e.url})`,
                      backgroundSize: 'cover',
                      boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.3), 0px 8px 10px 1px rgba(0,0,0,0.22), 0px 3px 14px 2px rgba(0,0,0,0.14)',
                      padding: 'none',
                    }}
                  >
                    <ButtonBase
                      style={{ width: '100%', height: '100%' }}
                      onClick={openImage}
                    />
                  </GridListTile>
                );
              })
            }
          </GridList>
        </>
      );
    }
    return '';
  }
}

RenderPhotosList.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

RenderPhotosList.defaultProps = {
  pictures: null,
};

export default RenderPhotosList;
