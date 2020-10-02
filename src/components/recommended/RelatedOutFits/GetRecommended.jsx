import React from "react";
// import ReactDOM from "react-dom";
import axios from "axios";
import FormatRelated from "./FormatRelated";
// import DisplayRelatedContainer from "./DisplayRelatedContainer";
// import { render } from 'enzyme';

// this component gets related/recommended products from id from cart
// axios.get(http://18.224.37.110/products/:product_id/related) api end point for products
class GetRecommended extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommended: [],
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-console
    // console.log(this.props.id)
    const relatedProduct = axios
      .get(`http://18.224.37.110/products/${this.props.id}/related`)
      .then((data) => {
        return data.data;
      })
      .then((data) => {
        return data.map((productID) => {
          return axios
            .get(`http://18.224.37.110/products/${productID}/styles`)
            .then((data) => {
              return data.data.results;
            })
            .catch((err) => {
              // eslint-disable-next-line no-console
              console.log(err);
            });
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });

    Promise.resolve(relatedProduct).then((x) => {
      // eslint-disable-next-line no-console
      return Promise.all(x).then((data) => {
        // eslint-disable-next-line no-console
        console.log(data);
        this.setState({ recommended: data });
      });
    });
  }

  render() {
    let { recommended } = this.state;
    return (
      <div>
        test
        {/* // eslint-disable-next-line no-console */}
        {console.log(this.state)}
        <FormatRelated recommended={recommended} />
      </div>
    );
  }
}

// GetRecommended.propTypes = {
//   cart:{}
// };

export default GetRecommended;

// a bit about this component / gameplan -

/*

*/
