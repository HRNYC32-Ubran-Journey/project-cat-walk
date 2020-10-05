import React from 'react';
import PropTypes from 'prop-types';
import Reviews from '.';

const ReviewsList = (props) => {
  const { reviews } = props;

  console.log(reviews);
  return (
    <div>
      This is a list.
      {reviews.map((e) => <div>{e.summery}</div>)}
    </div>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
