import React from "react";
import axios from "axios";
import FormatCart from "./FormatCart";
// import DisplayRelatedImg from "../RelatedOutFits/DisplayRelatedImg";

class GetCurrentCart extends React.Component {
  // //  eslint-disable-next-line no-console
  // console.log(cart);
  constructor(props) {
    super(props);
    this.state = {
      currentCart: [],
      productInfo: [],
    };
  }

  componentDidMount() {
    let { cart } = this.props;
    //  eslint-disable-next-line no-console
    // console.log(cart);
    if (cart.length > 0) {
      /*
      Promise.all(
        cart.map((currentProduct) => {
          return axios
            .get(`http://18.224.37.110/products/${currentProduct.id}/styles`)
            .then((productStyles) => {
              // console.log(productStyles)
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
      */
    }
    let that = this;
    function getStylesAPI() {
      return that.props.cart.map((currentProductID) => {
        return axios
          .get(`http://18.224.37.110/products/${currentProductID.id}/styles`)
          .then((productStyles) => {
            // console.log(productStyles);
            return productStyles.data;
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }

    function getStylesProductInfo() {
      return that.props.cart.map((currentProductID) => {
        return axios
          .get(`http://18.224.37.110/products/${currentProductID.id}`)
          .then((productInfo) => {
            // console.log(productInfo);
            return productInfo.data;
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }

    const processReq = async (response) => {
      const newArr = await Promise.all(response);
      return newArr;
    };

    async function getCartStyles() {
      let cartProductStyles;
      let productInfo;
      try {
        const stylesAPIRes = await getStylesAPI();
        const configureStylesAPIReq = await processReq(stylesAPIRes);
        cartProductStyles = configureStylesAPIReq;

        const getStylesProductInfoRes = await getStylesProductInfo();
        const configureProductInfoReq = await processReq(getStylesProductInfoRes);
        productInfo = configureProductInfoReq;
        // console.log(productInfo);
      } catch (err) {
        console.log(err);
      }
      that.setState({ currentCart: cartProductStyles, productInfo });
    }

    getCartStyles();
  }

  render() {
    let { currentCart } = this.state;
    let { productInfo } = this.state;
    // console.log(currentCart)
    return (
      <div className="currentCartImgContainer">
        <FormatCart cart={currentCart} productInfo={productInfo} />
      </div>
    );
  }
}

export default GetCurrentCart;
