import React from "react";

const DisplayRelatedImg = ({ styles }) => {
  // console.log(styles,'styles???? with product info key')
  // console.log(styles.productInfo, 'product info key?????')
  const productStyles = styles.results;

  let foundImg = false;
  if (styles.length === 0) {
    // console.log("if statement?");
    // console.log(styles);
    return <h1> where are the images?</h1>;
  }
  for (let i = 0; i < productStyles.length; i += 1) {
    const imageArr = productStyles[i].photos;
    // console.log(styles)
    //  eslint-disable-next-line no-console
    // console.log(styles[i])
    // if ()
    // console.log(styles)
    if (foundImg === true) {
      break;
    }

    for (let j = 0; j < imageArr.length; j += 1) {
      //  eslint-disable-next-line no-console
      const thumbnail = imageArr[j].thumbnail_url;

      if (thumbnail !== null) {
        // console.log(styles);
        foundImg = true;
        return (
          <div className="relatedImg">
            <ul>
              <li>
                <img src={imageArr[j].thumbnail_url} alt="related product" />
              </li>
            </ul>
            <p>{styles.productInfo.category}</p>
            <p>{}</p>
            <p>{styles.productInfo.name}</p>
          </div>
        );
      }
    }
  }

  return null;
};

export default DisplayRelatedImg;
