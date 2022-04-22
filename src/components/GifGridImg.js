import React from "react";

export const GifGridImg = ({ title, url }) => {
  return (
    <div className="animate__animated animate__rubberBand">
      <h2>{title}</h2>
      <img src={url} alt={title} />
    </div>
  );
};
