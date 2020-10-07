import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
// Import Components:
import Summery from './summery';

const Overview = (props) => {
  const {
    metadata,
    averageRating,
    likeRatio,
    updateFilters,
  } = props;
  if (!metadata) { return <div>Loading...</div>; }

  return (
    <>
      <Typography variant="h6">
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

          return (<div onClick={toggleFunc}>{`${e} x%`}</div>);
        })}
      </div>
    </>
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
