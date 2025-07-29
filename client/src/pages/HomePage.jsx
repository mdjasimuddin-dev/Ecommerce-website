import { useEffect } from "react";
import productStore from "../store/ProductStore";
import Slider from "../components/slider/Slider";
import Product from "../components/product/Product";
import Brands from "../components/brands/Brands";

const HomePage = () => {
  const { sliderRequestApi, brandRequestApi, productByRemarkRequest } =
    productStore();

  useEffect(() => {
    (async () => {
      try {
        await sliderRequestApi();
        await productByRemarkRequest('new');
        await brandRequestApi();
      } catch (error) {
        console.error("Homepage Data fetch fail", error);
      }
    })();
  }, []);

  return (
    <div>
      <Slider />
      <Product />
      <Brands />
    </div>
  );
};

export default HomePage;
