// Please be my rave-boy, we can have some fun!~
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// import { Grid } from '@material-ui/core';
// // Components:
// import Overview from './overview';
// import ReviewsList from './reviewsList';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    // Bind methods.
    this.getMetadata = this.getMetadata.bind(this);
    this.fetchAllReviews = this.fetchAllReviews.bind(this);

    // Define state.
    this.state = {
      metadata: null,
      totalReviews: 0,
      reviews: null,
    };
  }

  componentDidMount() {
    this.getMetadata();
  }

  getMetadata() {
    const { id } = this.props;

    axios.get('http://18.224.37.110/reviews/meta', {
      params: {
        product_id: id,
      },
    })
      .then((res) => {
        const metadata = res.data;
        let totalReviews = 0;
        for (let i = 1; i <= 5; i += 1) {
          const amount = parseInt(metadata.ratings[i], 10);
          if (Number.isNaN(amount) === false) {
            totalReviews += metadata.ratings[i];
          }
        }

        this.setState({
          metadata,
          totalReviews,
        }, () => {
          this.fetchAllReviews();
        });
      });
  }

  fetchAllReviews(page = 1) {
    const { id } = this.props;
    const { reviews } = this.state;

    const params = {
      product_id: id,
      sort: 'relevant',
      count: 100,
      page,
    };

    axios.get('http://18.224.37.110/reviews/', { params })
      .then((res) => {
        const newReviews = [...reviews, ...res.data.results];
        this.setState({
          reviews: newReviews,
        }, () => {
          if (res.results.length >= 100) {
            this.fetchAllReviews(page + 1);
          } else { console.log('Done'); }
        });
      });
  }

  render() {
    return (
      <div>
        <div>
          hi
        </div>
        <div>
          bye
        </div>
      </div>
    );
  }
}

Reviews.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Reviews;
