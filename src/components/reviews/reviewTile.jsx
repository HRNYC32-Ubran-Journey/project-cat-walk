import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';
import { Check } from '@material-ui/icons';

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
      <Grid 
        style={{ backgroundColor: 'ghostwhite' }}
        alignItems="center"
      >
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
        >
          <Check style={{ color: 'yellowgreen' }} /> User recommends this product
        </Typography>
        <br />
      </Grid>
    );
  }
  return '';
};

const renderResponse = (response) => {
  if (response) {
    return (
      <>
        <Typography
          variant="body2"
          component="p"
          style={{
            backgroundColor: 'lightgray',
          }}
        >
          { response }
        </Typography>
        <br />
      </>
    );
  }
  return '';
};

const ReviewTile = (props) => {
  const { review, markAsHelpful, report } = props;
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

  const runMarkAsHelpful = () => {
    markAsHelpful(review.review_id);
  };

  const runReport = () => {
    report(review.review_id);
  };

  return (
    <Card elevation={3}>
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
        <br />
        <Typography variant="h5" component="h2" gutterBottom>
          <b>{review.summary}</b>
        </Typography>
        <Typography variant="body2" component="p">
          {review.body}
        </Typography>
        <br />
        { renderRecommend(review.recommend) }
        { renderResponse(review.response) }
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={runMarkAsHelpful}>
          I found this helpful
          {` (${review.helpfulness})`}
        </Button>
        <Button size="small" color="primary" onClick={runReport}>
          Report
        </Button>
      </CardActions>
    </Card>
  );
};

ReviewTile.propTypes = {
  review: PropTypes.shape({
    review_id: PropTypes.number.isRequired,

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
  markAsHelpful: PropTypes.func.isRequired,
  report: PropTypes.func.isRequired,
};

export default ReviewTile;
