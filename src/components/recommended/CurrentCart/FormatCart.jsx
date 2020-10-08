import React from "react";
import DisplayCartImg from "./DisplayCartImg";

const FormatCart = (props) => {
  console.log(props);
  if (props.cart.length > 0) {
    const { cart } = props;
    const { productInfo } = props;
    // console.log(cart);
    for (let i = 0; i < cart.length; i += 1) {
      cart[i].productInfo = productInfo[i];
    }
    // console.log(cart);
    return (
      <div className="currentCartThumbNail">
        {cart.map((obj) => {
          return <DisplayCartImg styles={obj} />;
        })}
      </div>
    );
  }
  return null;
};

export default FormatCart;
