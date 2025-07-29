import productStore from "../../store/ProductStore";
import ProductSkeleton from "../../skeleton/ProductSkeleton";
import { Link } from "react-router";

const Product = () => {
  const { productRemark } = productStore();

  if (productRemark === null) {
    return <ProductSkeleton />;
  }

  return (
    <div>
      <div className="text-center text-2xl md:text-4xl font-bold space-y-2 my-5 mt-10">
        <h1>Most Popular Product</h1>
        <p className="text-base font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          doloribus!
        </p>

        <div
          className={` grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-2 md:gap-5 p-2 md:p-5`}
        >
          {productRemark.map((item) => {
            return (
              <Link key={item._id}>
                <img src={item.image} className="h-9 lg:h-16" alt="" />
                <h1>{item.title}</h1>
                <p>{item.shortDes}</p>
                <p>{item.price}</p>
                <p>{item.shortDes}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
