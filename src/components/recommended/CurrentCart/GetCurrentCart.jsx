import React from "react";
import axios from "axios";
import DisplayRelatedImg from "../RelatedOutFits/DisplayRelatedImg";

class GetCurrentCart extends React.Component {
  // //  eslint-disable-next-line no-console
  // console.log(cart);
  constructor(props) {
    super(props);
    this.state = {
      currentCart: [],
    };
  }

  componentDidMount() {
    let { cart } = this.props;
    //  eslint-disable-next-line no-console
    // console.log(cart);
    if (cart.length > 0) {
      Promise.all(
        cart.map((currentProduct) => {
          axios
            .get(`http://18.224.37.110/products/${currentProduct.id}/styles`)
            .then((productStyles) => {
              return productStyles.data.results;
            })
            .catch((err) => {
              console.log(err);
            });
        })
      ).then((productStylesArr) => {
        this.setState({ currentCart: productStylesArr });
      });
    }
  }

  render() {
    let { cart } = this.props;
    return <div className="currentCartImgContainer"> </div>;
  }
}

export default GetCurrentCart;
