import React, { useState, useEffect } from "react";
import { useFetchGift } from "../hooks/useFetcGift";
// import { getGift } from '../helpers/getGift';
import { GifGridImg } from "./GifGridImg";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  // useEffect( () => {
  //     getGift( category ).then(
  //         (img) => setImages(img)
  //     )

  // }, [category])

  const { data: images, loading } = useFetchGift(category);
  // console.log(useFetchGift( category ))

  return (
    <>
      <div> {category} </div>

      {loading && <h1>Loading...</h1>}

      <div className="class-grid">
        {images.map((image) => (
          <GifGridImg key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
