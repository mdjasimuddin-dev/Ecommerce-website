import Lottie from "lottie-react";
import placeholderImage from "./../assets/AnimImage/image.json";
import Skeleton from "react-loading-skeleton";

const FeatureSkeleton = () => {
  return (
    <div>
      <div className="space-y-2 mt-10">
        <h1 className="text-4xl font-bold text-center">
          Ours Features
        </h1>
        <p className="text-base text-center font-normal md:w-1/2 mx-auto">
          Explore a curated selection of high-quality products.
        </p>
      </div>

      <div
        className={`w-full grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 lg:gap-10 p-2 md:p-5 lg:p-10`}
      >
        {Array.from({ length: 4 }).map((index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-3 md:gap-5 bg-white p-2 lg:p-5"
            >
              <div>
                <p>{index}</p>
                <Lottie
                  className="lg:w-20"
                  animationData={placeholderImage}
                  loop={true}
                />
              </div>
              <div className="grid col-span-2 items-center">
                <Skeleton count={2} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureSkeleton;
