import productStore from "../../store/ProductStore";
import ProductSkeleton from "../../skeleton/ProductSkeleton";

const Product = () => {
  const { productRemark } = productStore();

  if (productRemark === null) {
    return <ProductSkeleton />;
  } else {
    return (
      <div>
        <div className="text-center text-2xl md:text-4xl font-bold space-y-2 my-5 mt-10">
          <h1>Discover Our Latest Products</h1>
          <p className="text-base font-normal md:w-1/2 mx-auto">
            Explore a curated selection of high-quality products, right here in
            Dhaka. We bring you the best, with local convenience in mind.
          </p>

          <div
            className={` grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 lg:gap-10 md:p-5`}
          >
            {productRemark.map((item) => {
              return (
                <div className="card bg-base-100 shadow-sm">
                  <figure>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-left">
                      {item.title}
                      <div className="badge badge-secondary text-right uppercase">
                        {item.remark}
                      </div>
                    </h2>
                    <p className="text-left font-normal">{item.shortDes}</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">
                        {item.categories.categoryName}
                      </div>
                      <div className="badge badge-outline">
                        {item.brands.brandName}
                      </div>
                    </div>

                    <a
                      href="#_"
                      class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#F43098] text-indigo-600 text-white"
                    >
                      <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#F43098] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                      <span class="relative text-red-600 transition duration-300 group-hover:text-white ease">
                        Add to cart
                      </span>
                    </a>
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

export default Product;
