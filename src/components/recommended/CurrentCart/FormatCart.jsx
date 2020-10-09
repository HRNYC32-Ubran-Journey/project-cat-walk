import React from "react";
import DisplayCartImg from "./DisplayCartImg";

const FormatCart = (props) => {
  if (props.cart.length > 0) {
    const { cart } = props;
    const { productInfo } = props;

    for (let i = 0; i < cart.length; i += 1) {
      cart[i].productInfo = productInfo[i];
    }

    return (
      <div className="currentCartThumbNail">
        {cart.map((obj) => {
          // console.log(obj)
          return <DisplayCartImg stylesObj={obj} />;
        })}
      </div>
    );
  }
  return null;
};

export default FormatCart;
