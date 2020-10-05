import React from "react";
import DisplayRelatedImg from './DisplayRelatedImg';

//  eslint-disable-next-line no-console

const FormatRelated = ({ recommended }) => {
  //  eslint-disable-next-line no-console
  // console.log(recommended);

  return (
    <div className="recommendedThumbNailsRow">
      hello
      {recommended.map(arr => {
        //  eslint-disable-next-line no-console
        // console.log(arr);
        return <DisplayRelatedImg styles={arr} />;
      })}
    </div>
  );
};

export default FormatRelated;
