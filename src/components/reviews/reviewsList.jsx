import React from 'react';
import PropTypes from 'prop-types';

const ReviewsList = (props) => {
  const { reviews } = props;
  if (!reviews) { return <div> Loading... </div>; }
  return (
    <div>
      This is a list.
      {reviews.map((e) => <div>{e.summary}</div>)}
    </div>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      summary: PropTypes.string,
    }),
  ).isRequired,
};

export default ReviewsList;
