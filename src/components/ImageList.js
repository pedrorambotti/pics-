import "./ImageList.css";
import React from "react";
const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
// MAPEO :
// const numbers = [0 , 1 .  2 .  3 .  4]
// let newNumbers = [] ;
// for (let i = 0; i < numbers.length; i++) {newNumbers.push(numbers[i]*10);}
// numbers.map(num => num*10)
//numbers
