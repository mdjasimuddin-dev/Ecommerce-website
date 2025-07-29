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
                <div className="bg-white p-2 md:p-5" key={item._id}>
                  <div className="flex flex-col justify-center items-center">
                    <figure>
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                      />
                    </figure>
                  </div>
                  <div className="grid col-span-2">
                    <h1 className="text-lg">{item.categoryName}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default ProductCategory;
