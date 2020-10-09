import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonBase,
  Dialog,
  GridList,
  GridListTile,
} from '@material-ui/core';
import './renderPhotoList.css';

class RenderPhotosList extends React.Component {
  constructor(props) {
    super(props);

    this.openModel = this.openModel.bind(this);
    this.closeModel = this.closeModel.bind(this);

    this.state = {
      isOpen: false,
      image: null,
    };
  }

  openModel(image) {
    this.setState({
      isOpen: true,
      image,
    });
  }

  closeModel() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { pictures } = this.props;
    const { isOpen, image } = this.state;

    if (Array.isArray(pictures) && pictures.length > 0) {
      return (
        <>
          <Dialog
            open={isOpen}
            onClose={this.closeModel}
            style={{
              overflowY: 'hidden',
              backgroundColor: 'transparent',
            }}
          >
            <div
              style={{
                width: '70vw',
                height: '70vh',
                backgroundColor: 'transparent',
                backgroundImage: `url(${image})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                overflowY: 'hidden',
              }}
            />
          </Dialog>
          <GridList
            cols={5}
            style={{
              backgroundColor: 'darkgrey',
              // backgroundImage: `url(${ImageListBG})`,
              boxShadow: 'inset 0px 5px 5px -3px rgba(0,0,0,0.2), inset 0px 8px 10px 1px rgba(0,0,0,0.14), inset 0px 3px 14px 2px rgba(0,0,0,0.12)',
              padding: '0.75rem',
              paddingTop: '1rem',
              paddingBottom: '1rem',
            }}
          >
            {
              pictures.map((e) => {
                const openImage = () => {
                  this.openModel(e.url);
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
                      style={{ width: '90%', height: '90%' }}
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
