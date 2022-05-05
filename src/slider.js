import React, { useState } from "react";

const ImageSlider = () => {
  const images = [
    {
      image:
        "https://storage.googleapis.com/app-builder-56f84.appspot.com/Home-page-new.png",
    },
    {
      image:
        "https://storage.googleapis.com/app-builder-56f84.appspot.com/My-Apps-new.png",
    },
    {
      image:
        "https://storage.googleapis.com/app-builder-56f84.appspot.com/Pages-new.png",
    },
  ];

  const [imageURL, setImageURL] = useState(0);

  const prevImage = () => {
    if (imageURL > 0) {
      setImageURL(imageURL - 1);
    }else{
        setImageURL(images.length - 1)
    }
  };
  const nextImage = () => {
    if (imageURL < images.length - 1) {
      setImageURL(imageURL + 1);
    }else{
        setImageURL(0)
    }
  };
  return (
    <div>
      <div className="image-box">
        <img src={images[imageURL].image} width="100%" height="auto" />
      </div>
      <br />
      <button className="button1" onClick={prevImage}>
        PREV
      </button>
      <button className="button2" onClick={nextImage}>
        NEXT
      </button>
    </div>
  );
};
export default ImageSlider;
