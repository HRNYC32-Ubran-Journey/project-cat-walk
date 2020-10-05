import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const Overview = (props) => {
  const { metadata } = props;
  return (
    <>
      <Typography variant="h6">
        RATINGS & REVIEWS
      </Typography>
    </>
  );
};

Overview.protoTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Overview;
