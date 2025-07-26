import Lottie from "lottie-react";
import placeholderImage from "./../assets/AnimImage/image.json";
import Skeleton from "react-loading-skeleton";

const BrandSkeleton = () => {
  return (
    <div className={`w-full grid grid-cols-8 gap-5 p-5`}>
      {Array.from({ length: 16 }).map(() => {
        return (
          <div className="bg-white p-5">
            <div>
              <Lottie
                className="w-20"
                animationData={placeholderImage}
                loop={true}
              />
            </div>
            <div className="grid col-span-2">
              <Skeleton count={1} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BrandSkeleton;
