import { useEffect } from "react";
import productStore from "../store/ProductStore";
import Slider from "../components/slider/Slider";
import Brands from "../components/brands/Brands"

const HomePage = () => {
  const { sliderRequestApi, brandRequestApi } = productStore();

  useEffect(() => {
    (async () => {
      try {
        await sliderRequestApi();
        await brandRequestApi();
      } catch (error) {
        console.error("Homepage Data fetch fail", error);
      }
    })();
  }, []);

  return (
    <div>
      <Slider />
      <Brands/>
    </div>
  );
};

export default HomePage;
