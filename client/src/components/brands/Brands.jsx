import productStore from "../../store/ProductStore";
import BrandSkeleton from "./../../skeleton/BrandSkeleton";

const Brands = () => {
  const { brandList } = productStore();

  if (brandList === null) {
    return <BrandSkeleton />;
  }
  return (
    <div>
      <div className="text-center text-2xl md:text-4xl font-bold space-y-2 my-5 mt-10">
        <h1>Brand Collection</h1>
        <p className="text-base font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          doloribus!
        </p>
      </div>
    </div>
  );
};

export default Brands;
