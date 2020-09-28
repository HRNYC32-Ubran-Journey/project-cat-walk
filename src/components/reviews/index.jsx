import React from 'react';
import { create } from 'axios';

const axios = create({
  baseURL: 'http://18.224.37.110/',
});

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      metadata: null,
      reviews: null,
      sortType: null,
      currentPage: 1, 
      expanded: false,
      ratingsFilters: []
    };
  }

  getReviews() {
    const { id } = this.props;

    axios.get({
      url: `/reviews/${id}`,
    })
      .then((res) => {
        console.log(res);
        this.setState({
          reviews: res.data,
        });
        return 'hi';
      });
  }
}

export default Reviews;
