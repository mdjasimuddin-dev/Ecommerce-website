import Lottie from "lottie-react";
import React from "react";
import placeholderImage from "./../assets/AnimImage/image.json";
import Skeleton from "react-loading-skeleton";

const FeatureSkeleton = () => {
  return (
    <div className="grid grid-cols-3 gap-5 bg-white p-5">
      <div>
        <Lottie className="w-20" animationData={placeholderImage} loop={true} />
      </div>
      <div className="grid col-span-2">
        <Skeleton count={3} />
      </div>
    </div>
  );
};

export default FeatureSkeleton;
