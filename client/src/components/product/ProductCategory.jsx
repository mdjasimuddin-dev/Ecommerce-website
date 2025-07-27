import productStore from "../../store/ProductStore";
import CategorySkeleton from "./../../skeleton/CategorySkeleton";

const ProductCategory = () => {
  const { categoryList } = productStore();

  if (categoryList === null) {
    return <CategorySkeleton />;
  }

  return (
    <div className="lg:w-[1280px] mx-auto p-2">
      <div className="text-center text-2xl md:text-4xl font-bold space-y-2 my-5 mt-10">
        <h1>Product Category</h1>
        <p className="text-base font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          doloribus!
        </p>
      </div>
    </div>
  );
};

export default ProductCategory;
