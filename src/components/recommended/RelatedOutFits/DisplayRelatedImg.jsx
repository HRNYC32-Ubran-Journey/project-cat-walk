import React from "react";

const DisplayRelatedImg = ({ styles }) => {
  let foundImg = false;
  if (styles.length === 0) {
    return <h1> where are the images?</h1>;
  }
  for (let i = 0; i < styles.length; i += 1) {
    const imageArr = styles[i].photos;
    //  eslint-disable-next-line no-console
    // console.log(styles[i])
    if (foundImg === true) {
      break;
    }

    for (let j = 0; j < imageArr.length; j += 1) {
      //  eslint-disable-next-line no-console
      if (imageArr[j].thumbnail_url !== null) {
        foundImg = true;
        return (
          <div className="relatedImg">
            <img src={imageArr[j].thumbnail_url} alt="related product" />
          </div>
        );
      }
    }
  }

  return null;
};

export default DisplayRelatedImg;
