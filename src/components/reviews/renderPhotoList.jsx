import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonBase,
  Dialog,
  GridList,
  GridListTile,
} from '@material-ui/core';

class RenderPhotosList extends React.Component {
  constructor(props) {
    super(props);

    this.openModel = this.openModel.bind(this);
    this.closeModel = this.closeModel.bind(this);

    this.state = {
      isOpen: false,
    };
  }

  openModel() {
    this.setState({
      isOpen: true,
    });
  }

  closeModel() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { pictures } = this.props;
    const { isOpen } = this.state;

    if (Array.isArray(pictures) && pictures.length > 0) {
      return (
        <>
          <Dialog
            open={isOpen}
            onClose={this.closeModel}
          >
            hi
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
              pictures.map((e) => (
                <GridListTile
                  style={{
                    backgroundImage: `url(${e.url})`,
                    backgroundSize: 'cover',
                    boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.3), 0px 8px 10px 1px rgba(0,0,0,0.22), 0px 3px 14px 2px rgba(0,0,0,0.14)',
                    padding: 'none',
                  }}
                >
                  <ButtonBase
                    style={{ width: '100%', height: '100%' }}
                    onClick={this.openModel}
                  />
                </GridListTile>
              ))
          }
          </GridList>
        </>
      );
    }
    return '';
  }
}

RenderPhotosList.propTypes = {
  pictures: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

RenderPhotosList.defaultProps = {
  pictures: null,
};

export default RenderPhotosList;
