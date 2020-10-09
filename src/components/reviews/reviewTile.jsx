import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';
import { CheckBox } from '@material-ui/icons';

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
        container
        style={{ backgroundColor: '#fff1ff', padding: '0.25rem', marginTop: '1rem' }}
        alignItems="center"
        xs
      >
        <CheckBox style={{ color: 'yellowgreen', marginRight: '0.25rem' }} />
        <Typography
          variant="caption"
          color="textSecondary"
        >
          <i>This user recommends this product</i>
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
      <Grid
        container
        style={{ backgroundColor: '#fff1ff', padding: '0.25rem' }}
        alignItems="center"
        xs
      >
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
        >
          {response}
        </Typography>
        <br />
      </Grid>
    );
  }
  return '';
};

// This function tries its best to make a random color using M A T H.
const generateRandomColor = (name) => {
  let newName = name;
  let r = 0;
  let g = 0;
  let b = 0;
  // Our method only works if the input is at least 3 characters long.
  // If it isn't we need to improvise.
  if (newName.length < 3) {
    if (newName.length === 0) {
      return '#000000';
    }

    if (newName.length === 1) {
      newName += newName[0] + newName[0];
    } else if (newName.length === 2) {
      newName += newName[1];
    }
  }

  for (let i = 0; i < newName.length; i += 1) {
    if (i % 3 === 0) {
      r = (r + newName.charCodeAt(i)) % 150;
    } else if (i % 3 === 1) {
      g = (g + newName.charCodeAt(i)) % 150;
    } else {
      b = (b + newName.charCodeAt(i)) % 150;
    }
  }

  r += 75;
  g += 75;
  b += 75;

  return `#${parseInt(r, 16)}${parseInt(g, 16)}${parseInt(b, 16)}`;
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
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" style={{backgroundColor: 'red'}}>
            {review.reviewer_name[0].toUpperCase()}
          </Avatar>
        }
        title={<b>{review.summary}</b>}
        // subheader={review.summary}
      />
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
      </CardContent>
      <CardContent>
      </CardContent>
        { renderRecommend(review.recommend) }
        { renderResponse(review.response) }
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
