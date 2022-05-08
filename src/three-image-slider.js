import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const ThreeImageSlider = () => {
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
    {
      image:
        "https://storage.googleapis.com/app-builder-56f84.appspot.com/My-Apps-new.png",
    },
    {
      image:
        "https://storage.googleapis.com/app-builder-56f84.appspot.com/Home-page-new.png",
    },
    {
      image:
        "https://storage.googleapis.com/app-builder-56f84.appspot.com/Pages-new.png",
    },
  ];

  const [boxOne, setBoxOne] = useState(0);
  const [boxTwo, setBoxTwo] = useState(1);
  const [boxThree, setBoxThree] = useState(2);

  const prevImage = () => {
    setBoxOne(boxOne - 1);
    setBoxTwo(boxTwo - 1);
    setBoxThree(boxThree - 1);
    console.log(images.length);
  };
  const nextImage = () => {
    setBoxOne(boxOne + 1);
    setBoxTwo(boxTwo + 1);
    setBoxThree(boxThree + 1);
    console.log("Clicked Two");
  };
  return (
    <div style={{ position: "static" }}>
      <div
        style={{
          color: "black",
          position: "absolute",
          marginTop: "15%",
          border: "1px solid black",
          backgroundColor: "white",
        }}
        className="arrows"
        onClick={prevImage}
      >
        <ChevronLeftIcon />
      </div>
      <h2
        style={{
          color: "black",
          position: "absolute",
          marginTop: "15%",
          marginLeft: "95%",
          textAlign: "right",
          border: "1px solid black",
          backgroundColor: "white",
        }}
        className="arrows"
        onClick={nextImage}
      >
        <ChevronRightIcon />
      </h2>
      <div className="three-image-conatiner" style={{ position: "" }}>
        <Grid container spacing={3}>
          <Grid item md={4}>
            <div style={{ height: "60vh", backgroundColor: "white" }}>
              <img src={images[boxOne].image} height="auto" width="100%" />
            </div>
          </Grid>
          <Grid item md={4}>
            <div style={{ height: "60vh", backgroundColor: "white" }}>
              <img src={images[boxTwo].image} height="auto" width="100%" />
            </div>
          </Grid>
          <Grid item md={4}>
            <div style={{ height: "60vh", backgroundColor: "white" }}>
              <img src={images[boxThree].image} height="auto" width="100%" />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default ThreeImageSlider;
