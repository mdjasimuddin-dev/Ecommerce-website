import { useEffect } from "react";
import productStore from "../store/ProductStore";
import Product from "../components/product/Product";
import Brands from "../components/brands/Brands";
import ProductCategory from "../components/product/ProductCategory";
import Feature from "../components/feature/Feature";
import featureStore from "../store/FeatureStore";

const HomePage = () => {
  const {
    sliderRequestApi,
    brandRequestApi,
    productByRemarkRequest,
    categoryRequestApi,
  } = productStore();
  const { featureAPIRequest } = featureStore()

  useEffect(() => {
    (async () => {
      try {
        await sliderRequestApi();
        await featureAPIRequest();
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
      <Feature />
      <ProductCategory />
      <Product />
      <Brands />
    </div>
  );
};

export default HomePage;
