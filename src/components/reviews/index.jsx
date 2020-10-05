// Please be my rave-boy, we can have some fun!~
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// Components:
import ReviewsList from './reviewsList';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    // Bind methods.
    this.getReviews = this.getReviews.bind(this);
    this.getMetadata = this.getMetadata.bind(this);

    // Define state.
    this.state = {
      metadata: null,
      reviews: null,
      sortType: null,
      currentPage: 1,
      expanded: false,
      ratingsFilters: []
    };
  }

  componentDidMount() {
    this.getReviews();
    this.getMetadata();
  }

  getReviews() {
    const { id } = this.props;

    axios.get('http://18.224.37.110/reviews/', {
      params: {
        product_id: id,
      },
    })
      .then((res) => {
        console.log(res);
        this.setState({
          reviews: res.data,
        });
      });
  }

  getMetadata() {
    const { id } = this.props;

    axios.get('http://18.224.37.110/reviews/meta', {
      params: {
        product_id: id,
      },
    })
      .then((res) => {
        console.log(res);
        this.setState({
          metadata: res.data,
        });
      });
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        <h1>Overview</h1>
        <h1>Reviews List</h1>
        <ReviewsList reviews={reviews} />
      </>
    );
  }
}

Reviews.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Reviews;
