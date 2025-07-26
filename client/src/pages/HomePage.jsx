import BrandSkeleton from "../skeleton/BrandSkeleton";
import CategorySkeleton from "../skeleton/CategorySkeleton";
import FeatureSkeleton from "../skeleton/FeatureSkeleton";
import ProductSkeleton from "../skeleton/ProductSkeleton";
import SliderSkeleton from "../skeleton/SliderSkeleton";

const HomePage = () => {
  return (
    <div className="bg-gray-300">
      <h1>This is a Home Page</h1>
      <SliderSkeleton />
      <div className="w-[1280px] mx-auto">
        <div className="text-center text-4xl font-bold space-y-2">
          <h1>Features</h1>
          <p className="text-base font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            doloribus!
          </p>
        </div>
        <FeatureSkeleton />
        <div className="text-center text-4xl font-bold space-y-2">
          <h1>Product Category</h1>
          <p className="text-base font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            doloribus!
          </p>
        </div>

        <CategorySkeleton />

        <div className="text-center text-4xl font-bold space-y-2">
          <h1>Most Popular Product</h1>
          <p className="text-base font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            doloribus!
          </p>
        </div>
        <ProductSkeleton />

        <div className="text-center text-4xl font-bold space-y-2">
          <h1>Brand Collection</h1>
          <p className="text-base font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            doloribus!
          </p>
        </div>
        <BrandSkeleton />
      </div>
    </div>
  );
};

export default HomePage;
