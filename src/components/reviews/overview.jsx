import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  ButtonBase
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// Import Components:
import Summery from './summery';

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
});

const Overview = (props) => {
  const {
    metadata,
    averageRating,
    likeRatio,
    updateFilters,
  } = props;
  const classes = useStyles();
  if (!metadata) { return <div>Loading...</div>; }

  return (
    <Card raised>
      <CardContent>
        <Grid
          container
          spacing={1}
          justify="center"
        >
          <Typography classes={classes.title}>
            RATINGS & REVIEWS
          </Typography>
          <Summery rating={averageRating} />
          <Typography>
            {`${likeRatio} of people recommend this product.`}
          </Typography>
          <div>
            {[1, 2, 3, 4, 5].map((e) => {
              const toggleFunc = () => {
                updateFilters(e);
              };

              return (
                <ButtonBase 
                  onClick={toggleFunc}
                  style={{
                    backgroundColor: 'darkgray',riub
                  }}
                >
                  hi
                </ButtonBase>
              );
            })}
          </div>
        </Grid>
      </CardContent>
    </Card>
  );
};

Overview.propTypes = {
  metadata: PropTypes.shape({
    ratings: PropTypes.shape({
      1: PropTypes.number.isRequired,
      2: PropTypes.number.isRequired,
      3: PropTypes.number.isRequired,
      4: PropTypes.number.isRequired,
      5: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  updateFilters: PropTypes.func.isRequired,
  averageRating: PropTypes.string.isRequired,
  likeRatio: PropTypes.string.isRequired,
};

export default Overview;
