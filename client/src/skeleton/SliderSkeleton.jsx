import ImagePlaceholder from "./../assets/AnimImage/image.json";
import Skeleton from "react-loading-skeleton";
import Lottie from "lottie-react";

const SliderSkeleton = () => {
  return (
    <div className=" bg-gray-300 flex mt-16 md:mt-28  justify-center p-2 md:p-4 font-sans">
      <div className="w-full bg-white rounded-lg shadow-xl p-2 md:p-6 animate-pulse">
        <div className="w-full md:h-[550px] bg-gray-100 rounded-md mb-2 md:mb-6 grid grid-cols-2 justify-center items-center">
          <div className="p-2 md:p-8 lg:28">
            <Skeleton className="bg-white w-1/2" count={2} />
            <br />
            <Skeleton
              className="bg-white w-1/3 md:w-3/4"
              count={3}
              height={26}
            />
            <Skeleton
              className="bg-white w-1/3 md:w-3/4"
              count={3}
              height={18}
            />
            <Skeleton
              className="bg-white w-1/3 md:w-3/4"
              count={1}
              height={32}
            />
          </div>
          <div className="flex justify-center items-center p-2 md:p-4">
            <Lottie
              className=""
              animationData={ImagePlaceholder}
              loop={true}
            />
          </div>
        </div>

        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SliderSkeleton;
