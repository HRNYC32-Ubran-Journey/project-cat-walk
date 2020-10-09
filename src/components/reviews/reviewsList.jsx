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
  CardActions,
  IconButton,
} from '@material-ui/core';
import {
  ChevronLeft,
  ChevronRight
} from '@material-ui/icons';
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
        <Grid item container alignItems="center">
          <Typography>
            {`${totalReviews} reviews, sorted by `}
          </Typography>
          <TextField
            id="select-sort-type"
            select
            value={sortType}
            onChange={runChangeSortType}
            style={{ marginLeft: '0.5rem' }}
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
        <Grid
          container
          item
          spacing={2}
          style={{
            paddingTop: '1rem',
            paddingBottom: '0.5rem',
          }}
        >
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
      </CardContent>

      <CardActions>
        <Grid container justify="space-between" xs>
          <Grid item>
            <IconButton onClick={goBack} size="medium" color="primary">
              <ChevronLeft />
            </IconButton>
            <Button onClick={toggleExpanded} size="medium" color="primary">
              {expanded ? 'LESS REVIEWS' : 'MORE REVIEWS'}
            </Button>
            <IconButton onClick={goForward} size="medium" color="primary">
              <ChevronRight />
            </IconButton>
          </Grid>
        </Grid>

        <Button size="medium" color="primary">
          ADD A REVIEW +
        </Button>
      </CardActions>
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
