import { useEffect } from "react";
import productStore from "../store/ProductStore";
import FeatureStore from "../store/FeatureStore";
import Slider from "../components/slider/Slider";
import Feature from "./../components/feature/Feature";
import ProductCategory from "../components/product/ProductCategory";
import Product from "../components/product/Product";
import Brands from "../components/brands/Brands";

const HomePage = () => {
  const {
    sliderRequestApi,
    brandRequestApi,
    categoryRequestApi,
    productByRemarkRequest,
  } = productStore();
  const { featureAPIRequest } = FeatureStore();

  useEffect(() => {
    (async () => {
      try {
        await sliderRequestApi();
        await brandRequestApi();
        await categoryRequestApi();
        await productByRemarkRequest("new");
        await featureAPIRequest();
      } catch (error) {
        console.error("Homepage Data fetch fail", error);
      }
    })();
  }, []);

  return (
    <div className="bg-gray-300">
      <Slider />
      {/* <Feature /> */}
      <ProductCategory/>
      <Product/>
      <Brands/>
      
    </div>
  );
};

export default HomePage;
