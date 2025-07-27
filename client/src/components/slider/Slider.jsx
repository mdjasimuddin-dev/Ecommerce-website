import React from "react";
import productStore from "../../store/ProductStore";
import SliderSkeleton from "./../../skeleton/SliderSkeleton";

const Slider = () => {
  const { sliderList } = productStore();

  if (sliderList === null) {
    return <SliderSkeleton />;
  }
  return (
    <div>
      <h1>Product Slider</h1>
    </div>
  );
};

export default Slider;
