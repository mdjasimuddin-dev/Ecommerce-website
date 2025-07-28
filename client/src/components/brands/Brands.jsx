import { Link } from "react-router";
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
        <h1>Top Brands</h1>
        <p className="text-base font-normal md:w-2/3 lg:w-1/3 mx-auto">
          Discover a world of quality and innovation with products from our trusted and leading brand collection.
        </p>
        <div
          className={` grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-2 md:gap-5 p-2 md:p-5`}
        >
          {brandList.map((item, index) => {
            return (
              <Link key={index}>
                <img src={item.brandImg} className="h-9 lg:h-16" alt="" />
                <h1>{item.BrandName}</h1>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Brands;
