import React from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
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
      <>
        <Typography
          variant="body2"
          component="p"
        >
          I recommend this product
        </Typography>
        <br />
      </>
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
    <Paper elevation={0}>
      <br />
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
      <Typography variant="b" component="h3">
        {review.summary}
      </Typography>
      <br />
      <Typography variant="body2" component="p" gutterBottom>
        {review.body}
      </Typography>
      { renderRecommend(review.recommend) }
      { renderResponse(review.response) }
      <Typography variant="caption" color="textSecondary">
        Helpful?
        <button className="link-button" type="button" onClick={runMarkAsHelpful}>Yes</button>
        {`(${review.helpfulness})`}
        |
        <button className="link-button" type="button" onClick={runReport}>Report</button>
      </Typography>
      <hr />
    </Paper>
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
