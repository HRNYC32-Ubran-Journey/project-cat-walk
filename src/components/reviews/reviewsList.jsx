import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
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
    sortType = 'relevant',
    changeSortType,
    expanded,
    toggleExpanded,
    totalReviews,
  } = props;
  if (!reviews) { return <div> Loading... </div>; }

  const runChangeSortType = (e) => {
    changeSortType(e.target.value);
  };

  const goBack = () => {
    props.changePage(-1);
  };

  const goForward = () => {
    props.changePage(1);
  };

  return (
    <Card raised>
      <CardContent>
        <Grid item container>
          <Typography>
            {`${totalReviews} reviews, sorted by `}
          </Typography>
          <TextField
            id="select-sort-type"
            select
            value={sortType}
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
        <Grid container>
          <Grid item>
            <Button onClick={goBack} variant="outlined" color="primary">
              {'<='}
            </Button>
            <Button onClick={toggleExpanded} variant="outlined" color="primary">
              {expanded ? 'LESS REVIEWS' : 'MORE REVIEWS'}
            </Button>
            <Button onClick={goForward} variant="outlined" color="primary">
              {'=>'}
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">
              ADD A REVIEW +
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
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
  sortType: PropTypes.string.isRequired,
  changeSortType: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  toggleExpanded: PropTypes.func.isRequired,
  totalReviews: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default ReviewsList;
