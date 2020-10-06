import React from "react";
import axios from "axios";
import FormatCart from './FormatCart';
// import DisplayRelatedImg from "../RelatedOutFits/DisplayRelatedImg";

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
          return axios
            .get(`http://18.224.37.110/products/${currentProduct.id}/styles`)
            .then((productStyles) => {
              console.log(productStyles)
              return productStyles.data.results;
            })
            .catch((err) => {
              console.log(err);
            });
        }),
      ).then((productStylesArr) => {
        // console.log(productStylesArr)
        this.setState({ currentCart: productStylesArr });
      });
    }
  }

  render() {
    let { currentCart } = this.state;
    // console.log(currentCart)
    return <div className="currentCartImgContainer"> <FormatCart cart={currentCart} /> </div>;
  }
}

export default GetCurrentCart;
