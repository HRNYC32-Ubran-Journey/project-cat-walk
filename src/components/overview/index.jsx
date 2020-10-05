import React from 'react';
import axios from 'axios';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      information: null,
      styles: null,
    };
  }

  componentDidMount() {
    this.getInformation();
    this.getStyles();
  }

  getInformation() {
    console.log('test');
    axios({
      url: `http://18.224.37.110/products/${this.state.id}`,
      method: 'get',
    })
      .then((body) => {
        this.setState({ information: body.data });
      })
      .catch((err) => {
        // console.log('ERROR:', err);
      });
  }

  getStyles() {
    axios({
      url: `http://18.224.37.110/products/${this.state.id}/styles`,
      method: 'get',
    })
      .then((body) => {
        this.setState({ styles: body.data });
        console.log(this.state);
      })
      .catch((err) => {
        // console.log('ERROR:', err);
      });
  }

  render() {
    return (
      <h1>hi from Overview</h1>
    );
  }
}

export default Overview;
