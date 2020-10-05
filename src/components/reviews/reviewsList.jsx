import React from 'react';
import PropTypes from 'prop-types';
// Import Components:
import ReviewTile from './reviewTile';

const ReviewsList = (props) => {
  const { reviews } = props;
  if (!reviews) { return <div> Loading... </div>; }
  return (
    <div>
      This is a list.
      {reviews.map((e) => <ReviewTile key={e.review_id} review={e} />)}
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
