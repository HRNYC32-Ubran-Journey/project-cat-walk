import React from "react";

const DisplayCartImg = ({ stylesObj }) => {
  // console.log(styles);
  let foundImg = false;
  const styles = stylesObj.results;
  console.log(stylesObj);
  if (styles.length === 0) {
    return <h1> where are the images?</h1>;
  }
  for (let i = 0; i < styles.length; i += 1) {
    const imageArr = styles[i].photos;

    if (foundImg === true) {
      break;
    }

    for (let j = 0; j < imageArr.length; j += 1) {
      const { category } = stylesObj.productInfo;
      const { name } = stylesObj.productInfo;
      const { default_price } = stylesObj.productInfo;
      // console.log(default_price)
      if (imageArr[j].thumbnail_url !== null) {
        foundImg = true;
        return (
          <div className="OutfitImg">
            <ul>
              <li>
                <img src={imageArr[j].thumbnail_url} alt="related product" />
              </li>
            </ul>
            <p> { category } </p>
            <p> { name } </p>
            <p> ${ default_price } </p>
          </div>
        );
      }
    }
  }

  return null;
};

export default DisplayCartImg;
