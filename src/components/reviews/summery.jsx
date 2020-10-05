import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@material-ui/core';

const Summery = (props) => {
  const { rating } = props;
  return (
    <Grid container spacing={1}>
      <Grid xs={6} item>
        <Typography variant="h3">
          <b>{rating}</b>
        </Typography>
      </Grid>
      <Grid xs={6} item>
        {`${rating} stars`}
      </Grid>
    </Grid>
  );
};

Summery.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Summery;
