import React from 'react';
import PropTypes from 'prop-types';
import Reviews from '.';

const ReviewsList = (props) => {
  const { reviews } = props;
  if (!reviews) { return <div> Loading... </div>; }
  console.log(reviews);
  return (
    <div>
      This is a list.
      {reviews.map((e) => <div>{e.summary}</div>)}
    </div>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
