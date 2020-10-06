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
    this.getReviews = this.getReviews.bind(this);
    this.getMetadata = this.getMetadata.bind(this);
    this.markAsHelpful = this.markAsHelpful.bind(this);
    this.reportReview = this.reportReview.bind(this);

    // Define state.
    this.state = {
      metadata: null,
      totalReviews: null,
      reviews: null,
      sortType: 'relevant',
    };
  }

  componentDidMount() {
    this.getMetadata();
    // this.getReviews();
  }

  getMetadata() {
    const { id } = this.props;

    axios.get('http://18.224.37.110/reviews/meta', {
      params: {
        product_id: id,
      },
    })
      .then((res) => {
        let metadata = res.data;
        let totalReviews = 0;
        for (let i = 1; i <= 5; i += 1) {
          const amount = parseInt(metadata.ratings[i], 10);
          if (Number.isNaN(amount) === false) {
            totalReviews += metadata.ratings[i];
          }
        }

        this.setState({ metadata, totalReviews, });
      });
  }

  getReviews() {
    const { id } = this.props;
    const { sortType, expanded } = this.state;
    const amount = expanded ? 10 : 2;

    axios.get('http://18.224.37.110/reviews/', {
      params: {
        product_id: id,
        sort: 'relevant',
      },
    })
      .then((res) => {
        console.log(res.data.results);
        this.setState({
          reviews: res.data.results,
        });
      });
  }

  markAsHelpful(id) {
    axios.put(`http://18.224.37.110/reviews/${id}/helpful`)
      .then(() => {
        this.getReviews();
      })
      .catch((e) => {
        alert(e);
      });
  }

  reportReview(id) {
    axios.put(`http://18.224.37.110/reviews/${id}/report`)
      .then(() => {
        this.getReviews();
      })
      .catch((e) => {
        alert(e);
      });
  }

  // changeSortingMethod(method) {
  //   if (['relevant', 'newest', 'helpful'].includes(method)) {
  //     this.setState({ sortType: method }, () => this.getReviews());
  //   } else {
  //     alert('There was an error changing the sorting method.');
  //     throw new Error(`WARNING: method was ${method} which is not an acceptable method.`);
  //   }
  // }

  // toggleExpanded() {
  //   const { expanded } = this.state;
  //   this.setState({
  //     expanded: !expanded,
  //   }, () => this.getReviews());
  // }

  // updateNumberOfReviews(total) {
  //   const { totalReviews } = this.state;
  //   if (totalReviews === null) {
  //     this.setState({
  //       totalReviews: total,
  //     });
  //   }
  // }

  // updateFilters(n) {
  //   const { ratingsFilters } = this.state;
  //   if ([1, 2, 3, 4, 5].includes(n)) {
  //     if (ratingsFilters.includes(n)) {
  //       this.setState({
  //         ratingsFilters: ratingsFilters.filter((e) => e !== n),
  //       });
  //       return;
  //     }
  //     this.setState({
  //       ratingsFilters: [...ratingsFilters].push(n),
  //     });
  //     return;
  //   }
  //   alert('There was an error trying to filter the reviews');
  //   throw new Error('n was out of range.');
  // }
  // updatePage(direction) {
  //   const { currentPage } = this.state;
  //   if (direction === 'next') {
  //     this.setState({
  //       currentPage: currentPage + 1,
  //     });
  //   } else if (direction === 'before') {
  //     this.setState({
  //       currentPage: currentPage > 1 ? currentPage - 1 : 1,
  //     });
  //   }
  //   alert('There was an error trying to navigate pages.')
  // }

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
