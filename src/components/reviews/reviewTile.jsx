import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Grid } from '@material-ui/core';

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
  const reviewDate = new Date(review.date);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const reviewDateText = `${months[reviewDate.getMonth()]} ${reviewDate.getDate()}, ${reviewDate.getFullYear()}`;

  return (
    <Card>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            {`${review.rating} stars`}
          </Grid>
          <Grid item>
            {`${review.reviewer_name}, ${reviewDateText}`}
          </Grid>
        </Grid>
        <h3>{review.summary}</h3>
        <p>{review.body}</p>
        <p>Helpful? <u>Yes</u> ({review.helpfulness}) | <u>Report</u></p>
      </CardContent>
    </Card>
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
