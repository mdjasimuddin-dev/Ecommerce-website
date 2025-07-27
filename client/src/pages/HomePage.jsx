import { useEffect } from "react";
// import BrandSkeleton from "../skeleton/BrandSkeleton";
// import CategorySkeleton from "../skeleton/CategorySkeleton";
// import FeatureSkeleton from "../skeleton/FeatureSkeleton";
// import ProductSkeleton from "../skeleton/ProductSkeleton";
// import SliderSkeleton from "../skeleton/SliderSkeleton";
import productStore from "../store/ProductStore";
import FeatureStore from "../store/FeatureStore";
import Slider from "../components/slider/Slider";
import Feature from "./../components/feature/Feature";

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
      <Feature />
      <div className="lg:w-[1280px] mx-auto p-2">
        <div className="text-center text-2xl md:text-4xl font-bold space-y-2 my-5 mt-10">
          <h1>Features</h1>
          <p className="text-base font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            doloribus!
          </p>
        </div>
        <div className="text-center text-2xl md:text-4xl font-bold space-y-2 my-5 mt-10">
          <h1>Product Category</h1>
          <p className="text-base font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            doloribus!
          </p>
        </div>

        <div className="text-center text-2xl md:text-4xl font-bold space-y-2 my-5 mt-10">
          <h1>Most Popular Product</h1>
          <p className="text-base font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            doloribus!
          </p>
        </div>

        <div className="text-center text-2xl md:text-4xl font-bold space-y-2 my-5 mt-10">
          <h1>Brand Collection</h1>
          <p className="text-base font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            doloribus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
