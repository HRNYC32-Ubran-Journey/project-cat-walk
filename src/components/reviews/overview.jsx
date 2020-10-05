import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
// Import Components:
import Summery from './summery';

const Overview = (props) => {
  const { metadata, setTotal } = props;
  if (!metadata) { return <div>Loading...</div>; }

  let totalRatings = 0;
  let totalScore = 0;
  Object.keys(metadata.ratings).forEach((score) => {
    const { ratings } = metadata;
    const amount = parseInt(ratings[score], 10);
    totalRatings += amount;
    totalScore += amount * parseInt(score, 10);
  });
  const averageRating = `${totalScore / totalRatings}`.slice(0, 3);

  let likeRatio = null;
  if (metadata.recommended[0] === 0 && metadata.recommended[1] > 0) {
    likeRatio = '100%';
  } else if (metadata.recommended[1] === 0) {
    likeRatio = '0%';
  } else {
    const ratio = metadata.recommended[1] / (metadata.recommended[0] + metadata.recommended[1]);
    likeRatio = `${Math.trunc(ratio * 100)}%`;
  }

  setTotal(totalRatings);

  return (
    <>
      <Typography variant="h6">
        RATINGS & REVIEWS
      </Typography>
      <Summery rating={averageRating} />
      <Typography>
        {`${likeRatio} of people recommend this product.`}
      </Typography>
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
  setTotal: PropTypes.func.isRequired,
  updateFilters: PropTypes.func.isRequired,
};

export default Overview;
