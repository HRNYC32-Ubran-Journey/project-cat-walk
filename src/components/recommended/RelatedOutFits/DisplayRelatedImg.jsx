import React from "react";

const DisplayRelatedImg = ({ styles }) => {
  let foundImg = false;
  if (styles.length === 0) {
    console.log("if statement?");
    console.log(styles);
    return <h1> where are the images?</h1>;
  }
  for (let i = 0; i < styles.length; i += 1) {
    const imageArr = styles[i].photos;
    //  eslint-disable-next-line no-console
    // console.log(styles[i])
    // if ()
    // console.log(styles)
    if (foundImg === true) {
      break;
    }

    for (let j = 0; j < imageArr.length; j += 1) {
      //  eslint-disable-next-line no-console
      let thumbnail = imageArr[j].thumbnail_url;
      if (thumbnail !== null) {
        foundImg = true;
        return (
          <ul className="relatedImg">
            <li>
              <img src={imageArr[j].thumbnail_url} alt="related product" />
            </li>
          </ul>
        );
      }
    }
  }

  return null;
};

export default DisplayRelatedImg;
