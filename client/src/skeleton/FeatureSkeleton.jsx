import Lottie from "lottie-react";
import placeholderImage from "./../assets/AnimImage/image.json";
import Skeleton from "react-loading-skeleton";

const FeatureSkeleton = () => {
  const showCard = 4;
  return (
    <div className={`w-full grid grid-cols-${showCard} gap-10 p-10`}>
      {Array.from({ length: showCard }).map(() => {
        return (
          <div className="grid grid-cols-3 gap-5 bg-white p-5">
            <div>
              <Lottie
                className="w-20"
                animationData={placeholderImage}
                loop={true}
              />
            </div>
            <div className="grid col-span-2">
              <Skeleton count={3} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureSkeleton;
