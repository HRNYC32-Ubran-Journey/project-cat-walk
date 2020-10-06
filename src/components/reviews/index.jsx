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
    this.sortReviews = this.sortReviews.bind(this);

    // Define state.
    this.state = {
      metadata: {},
      totalReviews: 0,
      reviews: [],
      allReviews: {
        relevant: [],
        helpful: [],
        newest: [],
      },
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
          if (res.data.results.length >= 100) {
            this.fetchAllReviews(page + 1);
          } else {
            this.sortReviews();
          }
        });
      });
  }

  sortReviews() {
    const { reviews } = this.state;
    const newest = reviews.sort((a, b) => {
      let direction = 0;
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);

      if (aDate > bDate) {
        direction = -1;
      } else if (aDate < bDate) {
        direction = 1;
      }

      return direction;
    });
    const helpfulness = newest.sort((a, b) => {
      let direction = 0;
      const aHelpfulness = a.helpfulness;
      const bHelpfulness = b.helpfulness;

      if (aHelpfulness > bHelpfulness) {
        direction = -1;
      } else if (aHelpfulness < bHelpfulness) {
        direction = 1;
      }

      return direction;
    });

    this.setState({
      allReviews: {
        relevant: reviews,
        helpful: helpfulness,
        newest,
      },
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
