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
      productInfo: [],
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-console
    // console.log(this.props.id)

    /*
    const relatedProduct = axios
      .get(`http://18.224.37.110/products/${this.props.id}/related`)
      .then((data) => {
        // console.log(data)
        let { productInfo } = this.state;
        this.setState({ productInfo: data.data });
        return data.data;
      })
      .then((data) => {
        // eslint-disable-next-line no-console
        // console.log(data)
        return data.map((productID) => {
          return axios
            .get(`http://18.224.37.110/products/${productID}/styles`)
            .then((productInfo) => {
              // eslint-disable-next-line no-console
              // console.log(productInfo.data);
              return productInfo.data;
            })
            .catch((err) => {
              // eslint-disable-next-line no-console
              console.log(err);
            });
        });
      })
      .then((array) => {
        return Promise.all(array).then((arr) => {
          const { productInfo } = this.state;
          return Promise.all(productInfo.map((id) => {
            return axios
              .get(`http://18.224.37.110/products/${id}`)
              .then((data) => {
                // console.log(data)
                return data.data;
              })
              .catch((err) => {
                console.log(err);
              });
          })).then((productInfoArr) => {
            // console.log(productInfoArr)
            this.setState({ productInfo: productInfoArr });
            // console.log(this.state)
            return array;
          });
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });

    Promise.resolve(relatedProduct).then((x) => {
      // eslint-disable-next-line no-console
      // console.log(relatedProduct)
      Promise.all(x).then((data) => {
        // eslint-disable-next-line no-console
        // console.log(x,data);
        this.setState({ recommended: data });
        console.log(this.state,'state')
      });
    });
    */
    let that = this;
    async function getRelatedProducts() {
      try {
        const data = await axios
          .get(`http://18.224.37.110/products/${that.props.id}/related`);
        // console.log(data);
        // console.log(data.data);
        // let { productInfo } = that.state;
        that.setState({ productInfo: data.data });
        console.log(that.state);
        const data_1 = data.data;
        return data_1.map((productID) => {
          return axios
            .get(`http://18.224.37.110/products/${productID}/styles`)
            .then((productInfo) => {
              // eslint-disable-next-line no-console
              // console.log(productInfo.data);
              return productInfo.data;
            })
            .catch((err) => {
              // eslint-disable-next-line no-console
              console.log(err);
            });
        });
      } catch (err_1) {
        console.log(err_1);
      }
    }

    function getProductDetails() {
      const { productInfo } = that.state;
      return productInfo.map((id) => {
        return axios.get(`http://18.224.37.110/products/${id}`)
          .then((data) => {
            // console.log(data);
            return data.data;
          })
          .catch((err) => {
            console.log(err);
          })
      });
    }

    const processRelatedRequest = async (response) => {
      const newArr = await Promise.all(response);
      return newArr;
    };

    async function getResults() {
      let relatedProductResult;
      let productDetailsResult;
      try {
        const getRelatedProductsArr = await getRelatedProducts();
        const processRelatedReq = await processRelatedRequest(
          getRelatedProductsArr
        );

        const getProductDetailsReq = await getProductDetails();
        const processProductDetailsReq = await processRelatedRequest(getProductDetailsReq);

        // console.log(processProductDetailsReq)
        relatedProductResult = processRelatedReq;
        productDetailsResult = processProductDetailsReq;
      } catch (err) {
        console.log(err);
      }
      that.setState({ recommended: relatedProductResult, productInfo: productDetailsResult });
      // console.log(that);
      // return result;
    }

    getResults();
    // console.log(that, this);
  }

  render() {
    const { recommended } = this.state;
    const { productInfo } = this.state;
    // console.log(
    //   this.state,
    //   "STATE",
    //   this.state.recommended,
    //   "recommened",
    //   this.state.productInfo
    // );
    // console.log(productInfo)
    return (
      <div>
        {/* // eslint-disable-next-line no-console */}
        {/* {console.log(this.state)} */}
        <FormatRelated recommended={recommended} productInfoArr={productInfo} />
      </div>
    );
  }
}

// GetRecommended.propTypes = {
//   cart:{}
// };

export default GetRecommended;
