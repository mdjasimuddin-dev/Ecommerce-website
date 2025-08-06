import Lottie from "lottie-react";
import placeholderImage from "./../assets/AnimImage/image.json";
import Skeleton from "react-loading-skeleton";

const ProductSkeleton = () => {
  return (
    <div>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-center">
          Discover Our Latest Products
        </h1>
        <p className="text-base text-center font-normal md:w-1/2 mx-auto">
          Explore a curated selection of high-quality products.
        </p>
      </div>

      <div
        className={`w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 lg:gap-10 md:p-5`}
      >
        {Array.from({ length: 16 }).map(() => {
          return (
            <div className="bg-white p-2 md:p-5">
              <div className="flex flex-col justify-center items-center">
                <Lottie
                  className="w-20"
                  animationData={placeholderImage}
                  loop={true}
                />
              </div>
              <div className="grid col-span-2">
                <Skeleton count={2} />
                <Skeleton className="mt-2 md:mt-5" count={1} height={30} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSkeleton;
