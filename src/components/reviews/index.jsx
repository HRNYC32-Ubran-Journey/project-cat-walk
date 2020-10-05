// Please be my rave-boy, we can have some fun!~
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Grid } from '@material-ui/core';
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
          reviews: res.data.results,
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
      <Grid container>
        <Grid item xs={3}>
          <h1>Overview</h1>
        </Grid>
        <Grid item xs={9}>
          <h1>Reviews List</h1>
          <ReviewsList reviews={reviews} />
        </Grid>
      </Grid>
    );
  }
}

Reviews.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Reviews;
