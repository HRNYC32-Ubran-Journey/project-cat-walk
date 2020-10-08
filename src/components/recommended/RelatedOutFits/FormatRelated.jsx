import { recomposeColor } from "@material-ui/core";
import React from "react";
import DisplayRelatedImg from "./DisplayRelatedImg";

//  eslint-disable-next-line no-console

const FormatRelated = (props) => {
  //  eslint-disable-next-line no-console
  // console.log(props);
  if (props.productInfoArr.length > 0 && props.recommended.length > 0) {
    const productInfo = props.productInfoArr;
    const { recommended } = props;
    for (let i = 0; i < productInfo.length; i += 1) {
      props.recommended[i].productInfo = productInfo[i];
      // console.log(props.recommended)
    }

    return (
      <div className="recommendedThumbNailsRow">
        {recommended.map((obj) => {
          return <DisplayRelatedImg styles={obj} />;
        })}
      </div>
    );
  }
  return null;
};

export default FormatRelated;
