import ImageSlider from "./single-image-slider";
import ThreeImageSlider from "./three-image-slider";
const App = () => {
  return (
    <div>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Simple Image Slider
      </h1>
    {/* <ImageSlider/> */}
    <ThreeImageSlider/>
    </div>
  );
};

export default App;
