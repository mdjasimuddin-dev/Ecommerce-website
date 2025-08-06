import { Link } from "react-router";
import productStore from "../../store/ProductStore";
import CategorySkeleton from "./../../skeleton/CategorySkeleton";

const ProductCategory = () => {
  const { categoryList } = productStore();

  if (categoryList === null) {
    return <CategorySkeleton />;
  } else {
    return (
      <div className="lg:w-[1280px] mx-auto p-2 mt-20">
        <div className="text-center text-2xl md:text-4xl font-bold space-y-2 my-5 mt-10">
          <h1>Product Category</h1>
          <p className="text-base font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            doloribus!
          </p>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 md:gap-5 p-2 md:p-5 ">
            {categoryList.map((item) => {
              return (
                <Link to={`/category/${item._id}`} className="bg-white p-2 md:p-5 shadow-xl rounded-2xl" key={item._id}>
                  <div className="flex flex-col justify-center items-center">
                    <figure>
                      <img
                        src={item.categoryImg}
                        className="h-20"
                        alt="category 1"
                      />
                    </figure>
                  </div>
                  <div className="grid col-span-2">
                    <h1 className="text-lg">{item.categoryName}</h1>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default ProductCategory;
