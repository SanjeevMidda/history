import React from "react";

const Year = ({ color, text, image, top }) => {
  let styles = {
    // background: color,
    // backgroundImage: `url(${image})`,
    top: `${top}px`,
  };
  return (
    // <div className="year" style={styles}>
    <div className="year" style={styles}>
      <div className="imageContainer">
        <h1 style={{ color: color }}>{text}</h1>

        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Year;
