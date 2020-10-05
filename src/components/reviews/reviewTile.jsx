import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';

// This song is
// One you won't forget!
// It will get stuck
// In your head!
// If it does
// You can't blame me!
// Just like I said
// Too catchy!~
const ReviewTile = (props) => {
  const { review } = props;

  return (
    <div>hi</div>
  );
};

ReviewTile.propTypes = {
  review: PropTypes.shape({
    rating: PropTypes.number.isRequired,

    reviewer_name: PropTypes.string.isRequired,
    recommend: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,

    summary: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    helpfulness: PropTypes.number.isRequired,

    photos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
      }).isRequired,
    ),

    response: PropTypes.string,

  }).isRequired,
};

export default ReviewTile;
