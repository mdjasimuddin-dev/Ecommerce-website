import { useEffect } from "react";
import productStore from "../store/ProductStore";
import Slider from "../components/slider/Slider";
import Product from "../components/product/Product";
import Brands from "../components/brands/Brands";
import ProductCategory from "../components/product/ProductCategory";

const HomePage = () => {
  const {
    // sliderRequestApi,
    brandRequestApi,
    productByRemarkRequest,
    categoryRequestApi,
  } = productStore();

  useEffect(() => {
    (async () => {
      try {
        // await sliderRequestApi();
        await categoryRequestApi();
        await productByRemarkRequest("new");
        await brandRequestApi();
      } catch (error) {
        console.error("Homepage Data fetch fail", error);
      }
    })();
  }, []);

  return (
    <div>
      {/* <Slider /> */}
      <ProductCategory/>
      <Product />
      <Brands />
    </div>
  );
};

export default HomePage;
