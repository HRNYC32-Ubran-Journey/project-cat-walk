import React from 'react';
import PropTypes from 'prop-types';
import { Grid, GridList } from '@material-ui/core';
// Import Components:
import ReviewTile from './reviewTile';

const ReviewsList = (props) => {
  const { reviews } = props;
  if (!reviews) { return <div> Loading... </div>; }
  return (
    <Grid container spacing={2}>
      {reviews.map((e) => (
        <Grid xs={12} item>
          <ReviewTile key={e.review_id} review={e} />
        </Grid>
      ))}
    </Grid>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      summary: PropTypes.string,
    }),
  ).isRequired,
};

export default ReviewsList;
