import { Link } from "react-router";


const TabProduct = ({ product }) => {
  console.log("product", product);

  return (
    <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10 drop-shadow-2xl">
      {product?.map((item) => {
        return (
          <Link to={`/productDetails/${item._id}`} key={item._id} className="card bg-base-100 shadow-2xl p-5">
            <figure>
              <img
                src={item.image}
                alt={item.title}
                className="h-36 p-1"
              />
            </figure>
            <div className="text-left space-y-2">
              <h2 className="text-2xl">Price : <del className="text-base">${item.price}</del> ${item.discountPrice}</h2>
              <h2 className="card-title">
                {item.title}
                <div className="badge badge-secondary">{item?.remark}</div>
              </h2>
              <p className="text-base font-normal">
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions badge-secondary justify-end">
                <div className="badge badge-outline">{item.brands.brandName}</div>
                <div className="badge badge-outline">{item.categories.categoryName}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default TabProduct;
