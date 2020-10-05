import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Button,
  Typography,
  TextField,
  MenuItem,
} from '@material-ui/core';
// Import Components:
import ReviewTile from './reviewTile';

const ReviewsList = (props) => {
  const {
    reviews,
    report,
    markAsHelpful,
    changeSortType,
  } = props;
  if (!reviews) { return <div> Loading... </div>; }

  const runChangeSortType = (e) => {
    changeSortType(e.target.value);
  };

  return (
    <>
      <Grid item>
        <Typography>
          {'<number> reviews, sorted by '}
          <TextField
            id="select-sort-type"
            select
            value="relevant"
            onChange={runChangeSortType}
          >
            <MenuItem key="relevant" value="relevant">
              relevance
            </MenuItem>
            <MenuItem key="newest" value="newest">
              newest
            </MenuItem>
            <MenuItem key="helpful" value="helpful">
              helpfulness
            </MenuItem>
          </TextField>
        </Typography>
      </Grid>
      <Grid container item spacing={2}>
        {reviews.map((e) => (
          <Grid key={e.review_id} xs={12} item>
            <ReviewTile
              review={e}
              markAsHelpful={markAsHelpful}
              report={report}
            />
          </Grid>
        ))}
      </Grid>
      <Grid item>
        <Button variant="outlined" color="primary">
          MORE REVIEWS
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" color="primary">
          ADD A REVIEW +
        </Button>
      </Grid>
    </>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      summary: PropTypes.string,
    }),
  ).isRequired,
  markAsHelpful: PropTypes.func.isRequired,
  report: PropTypes.func.isRequired,
  changeSortType: PropTypes.func.isRequired,
};

export default ReviewsList;
