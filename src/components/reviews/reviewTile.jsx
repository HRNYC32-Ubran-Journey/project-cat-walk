import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';

// This song is
// One you won't forget!
// It will get stuck
// In your head!
// If it does
// You can't blame me!
// Just like I said
// Too catchy!~
const renderRecommend = (recommends) => {
  if (recommends) {
    return (
      <Typography
        variant="body2"
        component="p"
      >
        I recommend this product
      </Typography>
    );
  }
  return '';
};

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
            <Typography variant="caption" color="textSecondary">
              {`${review.rating} stars`}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" color="textSecondary">
              {`${review.reviewer_name}, ${reviewDateText}`}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="h5" component="h6">
          <b>{review.summary}</b>
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          {review.body}
        </Typography>
        { renderRecommend(review.recommend)}
        <Typography variant="caption" color="textSecondary">
          Helpful? <a href="#">Yes</a> ({review.helpfulness}) | <a href="#">Report</a>
        </Typography>
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
