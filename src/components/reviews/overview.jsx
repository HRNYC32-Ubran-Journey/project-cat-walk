import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
// Import Components:
import Summery from './summery';

const Overview = (props) => {
  const { metadata } = props;
  if (!metadata) { return <div>Loading...</div>; }
  console.log(metadata);

  let totalRatings = 0;
  let totalScore = 0;
  Object.keys(metadata.ratings).forEach((score) => {
    const { ratings } = metadata;
    const amount = parseInt(ratings[score], 10);
    totalRatings += amount;
    totalScore += amount * parseInt(score, 10);
  });

  const averageRating = `${totalScore / totalRatings}`.slice(0, 3);

  return (
    <>
      <Typography variant="h6">
        RATINGS & REVIEWS
      </Typography>
      <Summery rating={averageRating} />
    </>
  );
};

Overview.propTypes = {
  metadata: PropTypes.shape({
    ratings: PropTypes.objectOf({
      1: PropTypes.number.isRequired,
      2: PropTypes.number.isRequired,
      3: PropTypes.number.isRequired,
      4: PropTypes.number.isRequired,
      5: PropTypes.number.isRequired,
    }).isRequired,
    recommended: PropTypes.objectOf({
      0: PropTypes.number.isRequired,
      1: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Overview;
